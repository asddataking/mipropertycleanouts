import { site } from "@/lib/site";

export const GA_MEASUREMENT_ID =
  process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID || site.gaId;

const TRUSTED_HIGHLEVEL_HOSTS = [
  "leadconnectorhq.com",
  "msgsndr.com",
  "gohighlevel.com",
] as const;

export const GENERATE_LEAD_PARAMS = {
  form_name: "free_estimate",
  site: "mi_property_cleanouts",
} as const;

export const GENERATE_LEAD_DEDUPE_MS = 10_000;
export const GENERATE_LEAD_STORAGE_KEY = "ga4_generate_lead_free_estimate";

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

export function trackEvent(
  name: string,
  params?: Record<string, string>,
) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag === "function") {
    window.gtag("event", name, params);
  }
}

export function isTrustedHighLevelOrigin(origin: string): boolean {
  try {
    const url = new URL(origin);
    if (url.protocol !== "https:") return false;
    const { hostname } = url;
    return TRUSTED_HIGHLEVEL_HOSTS.some(
      (host) => hostname === host || hostname.endsWith(`.${host}`),
    );
  } catch {
    return false;
  }
}

export function isHighLevelLeadSubmit(data: unknown): boolean {
  const payload = parseMessageData(data);
  if (!Array.isArray(payload) || payload.length < 2) return false;
  if (payload[0] !== "set-sticky-contacts") return false;
  const key = payload[1];
  return (
    key === "_ud" ||
    (typeof key === "string" && key.startsWith("embedded_iframe_"))
  );
}

function parseMessageData(data: unknown): unknown {
  if (typeof data !== "string") return data;
  try {
    return JSON.parse(data);
  } catch {
    return data;
  }
}
