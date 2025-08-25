import { useEffect } from "react";

export default function WhatsAppWidget() {
  useEffect(() => {
    (function (w, d, s, u) {
      w.gbwawc = {
        url: u,
        options: {
          waId: "919600181639",
          siteName: "Super Chennai",
          siteTag: "Usually reply in 4 minutes",
          siteLogo: "https://assets.gallabox.com/web/wa-widget-logos/blue-bot.svg",
          widgetPosition: "RIGHT",
          welcomeMessage: "Welcome to Super Chennai!!!",
          brandColor: "#25D366",
          messageText: "Looking for",
          replyOptions: [],
          version: "v1",
          widgetPositionMarginX: 12,
          widgetPositionMarginY: 12,
        },
      };

      const h = d.getElementsByTagName(s)[0];
      const j = d.createElement(s);
      j.async = true;
      j.src = u + "/whatsapp-widget.min.js?_=" + "2025-07-03 12";
      h.parentNode.insertBefore(j, h);
    })(window, document, "script", "https://waw.gallabox.com");
  }, []);

  return null; // This component doesn't render visible elements
}