import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import {
  Bot,
  BarChart3,
  FileText,
  TrendingUp,
  AlertCircle,
  Zap,
  ArrowRight,
  CheckCircle2,
  Building2,
  Users,
  Layers,
  Target,
} from "lucide-react";

const painPoints = [
  {
    icon: FileText,
    title: "Manuelle Buchungsprozesse",
    text: "Sachbearbeiter verbringen Stunden mit repetitiver Dateneingabe in SAP FI/CO – fehleranfällig und ineffizient.",
  },
  {
    icon: AlertCircle,
    title: "Monatsabschluss-Druck",
    text: "Jeder Periodenabschluss gleicht einem Feuerlöschen: Korrekturbuchungen, fehlende Abstimmungen, Zeitdruck.",
  },
  {
    icon: BarChart3,
    title: "Reporting nach Maß fehlt",
    text: "Standard-SAP-Berichte passen selten. Controlling-Teams kämpfen mit Excel-Exports statt mit Analyse.",
  },
];

const useCases = [
  {
    icon: Bot,
    tag: "Finanzbuchhaltung",
    title: "Buchungsassistent",
    text: "Ein Agent analysiert eingehende Belege, schlägt Kontierung und Kostenstelle vor und bucht nach Freigabe automatisch in SAP.",
  },
  {
    icon: Zap,
    tag: "Periodenabschluss",
    title: "Monatsabschluss-Agent",
    text: "Checklisten, Abstimmungsprüfungen und Buchungsläufe werden automatisch angestoßen, Abweichungen eskaliert.",
  },
  {
    icon: AlertCircle,
    tag: "Risiko",
    title: "Anomalie-Erkennung",
    text: "KI erkennt ungewöhnliche Buchungsmuster, Doppelzahlungen oder Policy-Verstöße in Echtzeit.",
  },
  {
    icon: BarChart3,
    tag: "Controlling",
    title: "Automatisches Reporting",
    text: "Plan-Ist-Vergleiche, Abweichungsanalysen und Kommentierungen werden vom Agenten erzeugt und versandt.",
  },
  {
    icon: TrendingUp,
    tag: "Planung",
    title: "Forecast & Planung",
    text: "Trendbasierte Hochrechnungen aus SAP-Daten, automatisch aktualisiert und in die Planungsmappe übergeben.",
  },
  {
    icon: Target,
    tag: "Konzernanforderungen",
    title: "Intercompany-Abstimmung",
    text: "Konzernverrechnungen werden automatisch abgestimmt und Differenzen mit Lösungsvorschlag eskaliert.",
  },
];

const businessModels = [
  {
    icon: Layers,
    title: "SAP BTP Add-on",
    subtitle: "Produkt",
    text: "Nativer Agent direkt auf der SAP Business Technology Platform – kein Datenaustransport, maximale Sicherheit und nahtlose SAP-Integration.",
    highlights: ["SAP-zertifiziert", "ABAP + GenAI", "Schnelle Adoption"],
  },
  {
    icon: Users,
    title: "KI-Transformations-Beratung",
    subtitle: "Service",
    text: "Prozessanalyse, Agent-Design und Implementierung als Beratungsleistung – von der Potenzialanalyse bis zum Go-Live.",
    highlights: ["Fachkenntnis SAP FI/CO", "Change Management", "Fixpreis-Pakete"],
  },
  {
    icon: Building2,
    title: "SaaS-Plattform",
    subtitle: "Plattform",
    text: "Mandantenfähige Web-Plattform, die per SAP-API angebunden wird – kein SAP-Zugriff nötig, schnell ausrollbar für Mittelstand.",
    highlights: ["Subscription-Modell", "Schnelles Onboarding", "White-Label möglich"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FDFAF4] text-[#2A1F0E]">

      <SiteNav />

      {/* Hero */}
      <section className="pt-40 pb-28 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-[#F7EDD0] text-[#7A5A18] text-sm font-medium px-4 py-1.5 rounded-full mb-10 border border-[#E5D9C0]">
            <Zap className="w-3.5 h-3.5" />
            KI-Agenten für SAP FI &amp; CO
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-semibold tracking-tight leading-[1.15] mb-6 text-[#2A1F0E]">
            SAP-Rechnungswesen &amp; Controlling{" "}
            <span className="text-[#B8922A]">neu gedacht</span>
          </h1>
          <p className="text-lg text-[#6B5940] max-w-2xl mx-auto mb-12 leading-relaxed">
            KI-Agenten übernehmen repetitive Buchungs- und Kontrollaufgaben in SAP –
            schneller, fehlerfreier und rund um die Uhr. Mehr Zeit für echte Analyse.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#loesungen"
              className="flex items-center justify-center gap-2 bg-[#B8922A] hover:bg-[#9E7B22] text-[#FAF5EB] font-medium px-7 py-3.5 rounded-lg transition-colors"
            >
              Use Cases ansehen <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#geschaeftsmodelle"
              className="flex items-center justify-center gap-2 border border-[#B8922A] text-[#B8922A] hover:bg-[#F7EDD0] font-medium px-7 py-3.5 rounded-lg transition-colors"
            >
              Geschäftsmodelle
            </a>
          </div>
        </div>
      </section>

      {/* Trennlinie */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-[#E5D9C0]" />
      </div>

      {/* Pain Points */}
      <section className="py-24 px-6 bg-[#F5EFE0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8922A] text-sm font-medium uppercase tracking-widest mb-3">Ausgangslage</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#2A1F0E] mb-4">
              Die Herausforderung heute
            </h2>
            <p className="text-[#6B5940] max-w-xl mx-auto leading-relaxed">
              SAP-Finance-Teams sind leistungsstark – aber zu viel Kapazität fließt in
              Aufgaben, die Maschinen erledigen könnten.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {painPoints.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="bg-white border border-[#E5D9C0] rounded-2xl p-7"
                >
                  <div className="w-10 h-10 rounded-lg bg-[#F7EDD0] flex items-center justify-center mb-5">
                    <Icon className="w-5 h-5 text-[#8B5E1A]" />
                  </div>
                  <h3 className="font-display font-semibold text-[#2A1F0E] mb-2 text-lg">{item.title}</h3>
                  <p className="text-[#6B5940] text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section id="loesungen" className="py-24 px-6 bg-[#FDFAF4]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8922A] text-sm font-medium uppercase tracking-widest mb-3">Lösungen</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#2A1F0E] mb-4">
              Was KI-Agenten in SAP leisten
            </h2>
            <p className="text-[#6B5940] max-w-xl mx-auto leading-relaxed">
              Konkrete Anwendungsfälle – direkt einsetzbar in SAP FI/CO-Umgebungen.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="group bg-white border border-[#E5D9C0] hover:border-[#B8922A] rounded-2xl p-7 transition-colors"
                >
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-10 h-10 rounded-lg bg-[#F7EDD0] flex items-center justify-center">
                      <Icon className="w-5 h-5 text-[#B8922A]" />
                    </div>
                    <span className="text-xs font-medium text-[#9A7D5A] bg-[#F5EFE0] px-2.5 py-1 rounded-full border border-[#E5D9C0]">
                      {item.tag}
                    </span>
                  </div>
                  <h3 className="font-display font-semibold text-[#2A1F0E] mb-2 text-lg">{item.title}</h3>
                  <p className="text-[#6B5940] text-sm leading-relaxed">{item.text}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Business Models */}
      <section id="geschaeftsmodelle" className="py-24 px-6 bg-[#F5EFE0]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#B8922A] text-sm font-medium uppercase tracking-widest mb-3">Geschäftsmodelle</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#2A1F0E] mb-4">
              Drei Wege zum Business
            </h2>
            <p className="text-[#6B5940] max-w-xl mx-auto leading-relaxed">
              Verschiedene Ansätze, wie sich das Thema SAP + KI-Agenten als
              Geschäftsmodell umsetzen lässt.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {businessModels.map((model) => {
              const Icon = model.icon;
              return (
                <div
                  key={model.title}
                  className="bg-white border border-[#E5D9C0] rounded-2xl p-7 flex flex-col gap-5"
                >
                  <div>
                    <span className="text-xs font-semibold uppercase tracking-widest text-[#B8922A]">
                      {model.subtitle}
                    </span>
                  </div>
                  <div className="w-12 h-12 rounded-xl bg-[#F7EDD0] flex items-center justify-center">
                    <Icon className="w-6 h-6 text-[#B8922A]" />
                  </div>
                  <div>
                    <h3 className="font-display text-xl font-semibold text-[#2A1F0E] mb-2">{model.title}</h3>
                    <p className="text-[#6B5940] text-sm leading-relaxed">{model.text}</p>
                  </div>
                  <ul className="mt-auto flex flex-col gap-2.5">
                    {model.highlights.map((h) => (
                      <li key={h} className="flex items-center gap-2.5 text-sm text-[#2A1F0E]">
                        <CheckCircle2 className="w-4 h-4 text-[#B8922A] flex-shrink-0" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section id="kontakt" className="py-28 px-6 bg-[#FDFAF4]">
        <div className="max-w-3xl mx-auto text-center">
          <div className="border border-[#E5D9C0] rounded-3xl p-12 bg-white">
            <p className="text-[#B8922A] text-sm font-medium uppercase tracking-widest mb-4">Nächster Schritt</p>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-[#2A1F0E] mb-4">
              Welches Modell passt zu dir?
            </h2>
            <p className="text-[#6B5940] mb-10 leading-relaxed max-w-lg mx-auto">
              Du hast SAP-Fachwissen und willst KI-Agenten einsetzen – lass uns
              gemeinsam herausarbeiten, welcher Ansatz der vielversprechendste ist.
            </p>
            <a
              href="mailto:boenke.sabine@gmx.de"
              className="inline-flex items-center gap-2 bg-[#B8922A] hover:bg-[#9E7B22] text-[#FAF5EB] font-medium px-8 py-4 rounded-lg transition-colors text-base"
            >
              Gespräch vereinbaren <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />

    </div>
  );
}
