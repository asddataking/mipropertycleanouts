"use client";

import { useEffect } from "react";
import {
  GENERATE_LEAD_DEDUPE_MS,
  GENERATE_LEAD_PARAMS,
  GENERATE_LEAD_STORAGE_KEY,
  isHighLevelLeadSubmit,
  isTrustedHighLevelOrigin,
  trackEvent,
} from "@/lib/analytics";

let lastLeadTrackedAt: number | null = null;

export function AnalyticsEvents() {
  useEffect(() => {
    function onClick(event: MouseEvent) {
      const target = event.target;
      if (!(target instanceof Element)) return;
      if (!target.closest("a[href^='tel:']")) return;
      trackEvent("phone_click");
    }

    function onMessage(event: MessageEvent) {
      if (!isTrustedHighLevelOrigin(event.origin)) return;
      if (!isHighLevelLeadSubmit(event.data)) return;
      if (wasLeadRecentlyTracked()) return;
      markLeadTracked();
      trackEvent("generate_lead", { ...GENERATE_LEAD_PARAMS });
    }

    document.addEventListener("click", onClick);
    window.addEventListener("message", onMessage, true);
    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("message", onMessage, true);
    };
  }, []);

  return null;
}

function wasLeadRecentlyTracked(): boolean {
  const now = Date.now();
  if (
    lastLeadTrackedAt !== null &&
    now - lastLeadTrackedAt < GENERATE_LEAD_DEDUPE_MS
  ) {
    return true;
  }
  try {
    const stored = sessionStorage.getItem(GENERATE_LEAD_STORAGE_KEY);
    if (stored && now - Number(stored) < GENERATE_LEAD_DEDUPE_MS) {
      return true;
    }
  } catch {
    // sessionStorage may be unavailable
  }
  return false;
}

function markLeadTracked() {
  lastLeadTrackedAt = Date.now();
  try {
    sessionStorage.setItem(GENERATE_LEAD_STORAGE_KEY, String(lastLeadTrackedAt));
  } catch {
    // sessionStorage may be unavailable
  }
}
