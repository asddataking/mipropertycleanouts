"use client";

import Script from "next/script";
import { site } from "@/lib/site";

export function GhlFormEmbed() {
  return (
    <div className="w-full overflow-hidden rounded-lg bg-white">
      <iframe
        src={site.ghlFormUrl}
        id={site.ghlFormIframeId}
        title="MI Property Cleanouts"
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="MI Property Cleanouts"
        data-height="1341"
        data-layout-iframe-id={site.ghlFormIframeId}
        data-form-id={site.ghlFormId}
        className="w-full border-0"
        style={{ height: 1341, borderRadius: 8 }}
      />
      <Script src="https://link.msgsndr.com/js/form_embed.js" strategy="afterInteractive" />
    </div>
  );
}
