"use client";

import { useState, useEffect } from "react";
import { Shield, ChevronDown, X } from "lucide-react";

type Consent = {
  essential: true;
  analytics: boolean;
  savedAt: string;
};

export function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [analytics, setAnalytics] = useState(false);

  useEffect(() => {
    const stored = localStorage.getItem("cookie-consent");
    if (!stored) setVisible(true);
  }, []);

  function save(analyticsConsent: boolean) {
    const consent: Consent = {
      essential: true,
      analytics: analyticsConsent,
      savedAt: new Date().toISOString(),
    };
    localStorage.setItem("cookie-consent", JSON.stringify(consent));
    setVisible(false);
  }

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 sm:p-6">
      <div
        className="max-w-2xl mx-auto bg-white border border-[#E5D9C0] rounded-2xl p-6"
        style={{ boxShadow: "0 -2px 32px rgba(42,31,14,0.10), 0 2px 8px rgba(42,31,14,0.06)" }}
      >
        {/* Header */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="flex items-start gap-3">
            <Shield className="w-5 h-5 text-[#B8922A] mt-0.5 flex-shrink-0" />
            <div>
              <h2 className="font-display font-semibold text-[#2A1F0E] text-lg leading-tight mb-1">
                Cookie-Einstellungen
              </h2>
              <p className="text-[#6B5940] text-sm leading-relaxed">
                Wir nutzen Cookies. Essentielle Cookies sind für den Betrieb erforderlich und immer
                aktiv. Analyse-Cookies helfen uns, die Website zu verbessern – dafür benötigen wir
                Ihre Zustimmung.{" "}
                <a href="/datenschutz" className="text-[#B8922A] hover:underline">
                  Mehr erfahren
                </a>
              </p>
            </div>
          </div>
          {/* X-Button = Ablehnen aller nicht-essentieller Cookies */}
          <button
            onClick={() => save(false)}
            aria-label="Schließen und ablehnen"
            className="text-[#9A7D5A] hover:text-[#2A1F0E] transition-colors flex-shrink-0 mt-0.5"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Granular settings */}
        {expanded && (
          <div className="mb-5 border border-[#E5D9C0] rounded-xl overflow-hidden text-sm">
            {/* Essential – always on */}
            <div className="flex items-center justify-between px-4 py-3 bg-[#F5EFE0]">
              <div>
                <p className="font-medium text-[#2A1F0E]">Essentielle Cookies</p>
                <p className="text-[#9A7D5A] text-xs mt-0.5">Technisch notwendig, nicht deaktivierbar</p>
              </div>
              <span className="text-xs text-[#9A7D5A] font-medium bg-[#E5D9C0] px-2 py-0.5 rounded-full">
                Immer aktiv
              </span>
            </div>
            <div className="h-px bg-[#E5D9C0]" />
            {/* Analytics – toggleable */}
            <div className="flex items-center justify-between px-4 py-3">
              <div>
                <p className="font-medium text-[#2A1F0E]">Analyse-Cookies</p>
                <p className="text-[#9A7D5A] text-xs mt-0.5">
                  Anonymisierte Nutzungsstatistiken zur Website-Verbesserung
                </p>
              </div>
              <button
                onClick={() => setAnalytics((v) => !v)}
                role="switch"
                aria-checked={analytics}
                aria-label="Analyse-Cookies"
                className={`relative w-10 h-6 rounded-full transition-colors flex-shrink-0 ${
                  analytics ? "bg-[#B8922A]" : "bg-[#E5D9C0]"
                }`}
              >
                <span
                  className={`absolute top-1 left-1 w-4 h-4 rounded-full bg-white transition-transform ${
                    analytics ? "translate-x-4" : "translate-x-0"
                  }`}
                />
              </button>
            </div>
          </div>
        )}

        {/* Action buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Akzeptieren – primary CTA */}
          <button
            onClick={() => save(true)}
            className="bg-[#B8922A] hover:bg-[#9E7B22] text-[#FAF5EB] text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Alle akzeptieren
          </button>
          {/* Ablehnen – gleiche Größe, andere Farbe → kein Dark Pattern */}
          <button
            onClick={() => save(false)}
            className="border border-[#B8922A] text-[#B8922A] hover:bg-[#F7EDD0] text-sm font-medium px-5 py-2.5 rounded-lg transition-colors"
          >
            Ablehnen
          </button>
          {/* Einstellungen / Auswahl speichern */}
          {expanded ? (
            <button
              onClick={() => save(analytics)}
              className="text-[#6B5940] hover:text-[#2A1F0E] text-sm font-medium px-3 py-2.5 transition-colors underline underline-offset-2"
            >
              Auswahl speichern
            </button>
          ) : (
            <button
              onClick={() => setExpanded(true)}
              className="flex items-center gap-1 text-[#6B5940] hover:text-[#2A1F0E] text-sm font-medium px-3 py-2.5 transition-colors"
            >
              Einstellungen <ChevronDown className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
