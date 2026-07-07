import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Impressum – SAP Finance Agents",
};

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-10">
      <h2 className="font-display text-xl font-semibold text-[#2A1F0E] mb-3">{title}</h2>
      <div className="text-[#6B5940] leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

export default function Impressum() {
  return (
    <div className="min-h-screen bg-[#FDFAF4] text-[#2A1F0E]">
      <SiteNav />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          <p className="text-[#B8922A] text-sm font-medium uppercase tracking-widest mb-4">Rechtliches</p>
          <h1 className="font-display text-4xl font-semibold text-[#2A1F0E] mb-12">Impressum</h1>

          <Section title="Angaben gemäß § 5 TMG">
            <p>
              Sabine Boenke<br />
              <span className="text-[#B8922A] text-sm">[Bitte Straße und Hausnummer ergänzen]</span><br />
              79<span className="text-[#B8922A] text-sm">[PLZ]</span> Freiburg im Breisgau<br />
              Deutschland
            </p>
            <p className="text-sm text-[#9A7D5A] bg-[#F7EDD0] border border-[#E5D9C0] rounded-lg px-4 py-3">
              Hinweis: Diese Website ist eine Demoseite und dient ausschließlich zu Präsentationszwecken.
              Es handelt sich um kein gewerbliches Angebot.
            </p>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          <Section title="Kontakt">
            <p>
              Telefon: <span className="text-[#B8922A] text-sm">[Telefonnummer ergänzen]</span><br />
              E-Mail: <a href="mailto:boenke.sabine@gmx.de" className="text-[#B8922A] hover:underline">boenke.sabine@gmx.de</a>
            </p>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          <Section title="Haftung für Inhalte">
            <p>
              Als Diensteanbieter sind wir gemäß § 7 Abs. 1 TMG für eigene Inhalte auf diesen Seiten nach
              den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter
              jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen
              oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p>
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen
              Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt
              der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden
              Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          <Section title="Haftung für Links">
            <p>
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss
              haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die
              Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
              verantwortlich.
            </p>
            <p>
              Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft.
              Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
              inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer
              Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige
              Links umgehend entfernen.
            </p>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          <Section title="Urheberrecht">
            <p>
              Die durch den Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem
              deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
              Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
              jeweiligen Autors bzw. Erstellers.
            </p>
            <p>
              Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch
              gestattet. Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die
              Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet.
              Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
              entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte
              umgehend entfernen.
            </p>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          <Section title="Widerspruch gegen Werbe-E-Mails">
            <p>
              Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung
              von nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit
              widersprochen. Die Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle
              der unverlangten Zusendung von Werbeinformationen, etwa durch Spam-E-Mails, vor.
            </p>
          </Section>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
