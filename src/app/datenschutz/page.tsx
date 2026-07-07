import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";

export const metadata = {
  title: "Datenschutz – SAP Finance Agents",
};

function Section({ id, title, children }: { id?: string; title: string; children: React.ReactNode }) {
  return (
    <div id={id} className="mb-10">
      <h2 className="font-display text-xl font-semibold text-[#2A1F0E] mb-3">{title}</h2>
      <div className="text-[#6B5940] leading-relaxed space-y-3">{children}</div>
    </div>
  );
}

function SubSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="mb-6">
      <h3 className="font-semibold text-[#2A1F0E] mb-2">{title}</h3>
      <div className="text-[#6B5940] leading-relaxed space-y-2">{children}</div>
    </div>
  );
}

export default function Datenschutz() {
  return (
    <div className="min-h-screen bg-[#FDFAF4] text-[#2A1F0E]">
      <SiteNav />

      <main className="pt-32 pb-24 px-6">
        <div className="max-w-2xl mx-auto">

          <p className="text-[#B8922A] text-sm font-medium uppercase tracking-widest mb-4">Rechtliches</p>
          <h1 className="font-display text-4xl font-semibold text-[#2A1F0E] mb-4">Datenschutzerklärung</h1>
          <p className="text-[#9A7D5A] text-sm mb-12">
            Stand: Juli 2025 – inspiriert von der Vorlage von{" "}
            <a href="https://waxxdu.de" target="_blank" rel="noopener noreferrer" className="text-[#B8922A] hover:underline">
              Carsten Wittmann (waXXdu.de)
            </a>
          </p>

          {/* 1. Überblick */}
          <Section title="1. Datenschutz auf einen Blick">
            <SubSection title="Allgemeine Hinweise">
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren
                personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene
                Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche
                Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten
                Datenschutzerklärung.
              </p>
            </SubSection>
            <SubSection title="Datenerfassung auf dieser Website">
              <p>
                <strong className="text-[#2A1F0E]">Wer ist verantwortlich für die Datenerfassung?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen
                Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p>
                <strong className="text-[#2A1F0E]">Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen – etwa durch
                Kontaktaufnahme per E-Mail. Andere Daten werden automatisch beim Besuch der Website durch
                unseren Hosting-Anbieter erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser,
                Betriebssystem, Uhrzeit des Seitenaufrufs).
              </p>
              <p>
                <strong className="text-[#2A1F0E]">Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu
                gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
              <p>
                <strong className="text-[#2A1F0E]">Welche Rechte haben Sie bezüglich Ihrer Daten?</strong><br />
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck
                Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht auf
                Berichtigung oder Löschung dieser Daten. Wenn Sie eine Einwilligung zur Datenverarbeitung
                erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem
                haben Sie das Recht, unter bestimmten Umständen die Einschränkung der Verarbeitung Ihrer
                personenbezogenen Daten zu verlangen. Des Weiteren steht Ihnen ein Beschwerderecht bei der
                zuständigen Aufsichtsbehörde zu. Hierzu sowie zu weiteren Fragen zum Thema Datenschutz
                können Sie sich jederzeit an uns wenden.
              </p>
            </SubSection>
            <SubSection title="Analyse-Tools und Tools von Drittanbietern">
              <p>
                Diese Website verwendet <strong className="text-[#2A1F0E]">kein</strong> Web-Analyse-Tool
                (wie z. B. Google Analytics) und kein Tracking. Es werden keine Drittanbieter-Dienste
                eingebunden, die Ihr Nutzerverhalten analysieren oder Ihr Surfverhalten websiteübergreifend
                verfolgen.
              </p>
            </SubSection>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          {/* 2. Hosting & Pflichtinfos */}
          <Section title="2. Allgemeine Hinweise und Pflichtinformationen">
            <SubSection title="Datenschutz">
              <p>
                Der Betreiber dieser Seiten nimmt den Schutz Ihrer persönlichen Daten sehr ernst. Wir
                behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen
                Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p>
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
                Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können.
                Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie
                nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <p>
                Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation
                per E-Mail) Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem
                Zugriff durch Dritte ist nicht möglich.
              </p>
            </SubSection>
            <SubSection title="Verantwortliche Stelle">
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p>
                Sabine Boenke<br />
                <span className="text-[#B8922A] text-sm">[Straße, Hausnummer, PLZ]</span> Freiburg im Breisgau<br />
                E-Mail: <a href="mailto:boenke.sabine@gmx.de" className="text-[#B8922A] hover:underline">boenke.sabine@gmx.de</a>
              </p>
              <p>
                Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam
                mit anderen über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten
                (z. B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
              </p>
            </SubSection>
            <SubSection title="Speicherdauer">
              <p>
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde,
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung
                entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur
                Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich
                zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben (z. B.
                steuer- oder handelsrechtliche Aufbewahrungsfristen); im letztgenannten Fall erfolgt die
                Löschung nach Fortfall dieser Gründe.
              </p>
            </SubSection>
            <SubSection title="Gesetzlich vorgeschriebener Datenschutzbeauftragter">
              <p>
                Für diese Website besteht keine gesetzliche Pflicht zur Bestellung eines
                Datenschutzbeauftragten, da es sich um eine private bzw. nichtkommerzielle Demoseite handelt.
              </p>
            </SubSection>
            <SubSection title="Hinweis zur Datenweitergabe in die USA">
              <p>
                Auf dieser Website sind u. a. Tools von Unternehmen mit Sitz in den USA eingebunden
                (Hosting-Anbieter Vercel). Wenn diese Tools aktiv sind, können Ihre personenbezogenen Daten
                an die US-amerikanischen Server dieser Unternehmen übertragen werden. Wir weisen darauf hin,
                dass die USA kein sicheres Drittland im Sinne des EU-Datenschutzrechts sind. US-Unternehmen
                sind verpflichtet, personenbezogene Daten an Sicherheitsbehörden herauszugeben, ohne dass
                Sie als Betroffene/r hiergegen gerichtlich vorgehen könnten.
              </p>
              <p>
                Vercel ist unter dem EU-US Data Privacy Framework (EU-US DPF) zertifiziert, sodass ein
                angemessenes Datenschutzniveau gewährleistet ist. Darüber hinaus setzt Vercel
                Standardvertragsklauseln (Standard Contractual Clauses, SCCs) gemäß Art. 46 Abs. 2 lit. c
                DSGVO ein.
              </p>
            </SubSection>
            <SubSection title="SSL- bzw. TLS-Verschlüsselung">
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher
                Inhalte eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie
                daran, dass die Adresszeile des Browsers von „http://" auf „https://" wechselt und an dem
                Schloss-Symbol in Ihrer Browserzeile. Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist,
                können die Daten, die Sie an uns übermitteln, nicht von Dritten mitgelesen werden.
              </p>
            </SubSection>
            <SubSection title="Auskunft, Löschung und Berichtigung">
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf
                unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und
                Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder
                Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten
                können Sie sich jederzeit an uns wenden.
              </p>
            </SubSection>
            <SubSection title="Recht auf Einschränkung der Verarbeitung">
              <p>
                Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu
                verlangen. Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung
                der Verarbeitung besteht in folgenden Fällen:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir in der Regel Zeit, um dies zu überprüfen.</li>
                <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
                <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung, Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen.</li>
                <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben und noch nicht feststeht, ob die berechtigten Gründe unsererseits gegenüber Ihren Gründen überwiegen.</li>
              </ul>
            </SubSection>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          {/* 3. Datenerfassung */}
          <Section title="3. Datenerfassung auf dieser Website">
            <SubSection title="Server-Log-Dateien">
              <p>
                Der Hosting-Anbieter dieser Website (Vercel) erhebt und speichert automatisch Informationen
                in sogenannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside space-y-1 ml-2">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL (zuvor besuchte Seite)</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p>
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. Die
                Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der
                Websitebetreiber hat ein berechtigtes Interesse an der technisch fehlerfreien Darstellung
                und der Optimierung seiner Website – hierzu müssen die Server-Log-Files erfasst werden.
                Die Logs werden von Vercel für maximal 30 Tage gespeichert.
              </p>
            </SubSection>
            <SubSection title="Cookies">
              <p>
                Diese Website verwendet <strong className="text-[#2A1F0E]">keine</strong> Tracking-Cookies
                oder Analyse-Cookies. Da es sich um eine statisch gerenderte Next.js-Seite handelt, werden
                keine Session-Cookies gesetzt. Es erfolgt keine Datenübertragung an Werbeplattformen oder
                Analysedienste.
              </p>
            </SubSection>
            <SubSection title="Kontaktaufnahme per E-Mail">
              <p>
                Wenn Sie uns per E-Mail kontaktieren, wird Ihre Anfrage inklusive aller daraus hervorgehenden
                personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens bei uns
                gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p>
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern
                Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung
                vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung
                auf unserem berechtigten Interesse an der effektiven Bearbeitung der an uns gerichteten
                Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer Einwilligung (Art. 6 Abs. 1 lit. a
                DSGVO) sofern diese abgefragt wurde.
              </p>
              <p>
                Die von Ihnen an uns per E-Mail-Kontakt gesandten Daten verbleiben bei uns, bis Sie uns zur
                Löschung auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die
                Datenspeicherung entfällt (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende
                gesetzliche Bestimmungen – insbesondere Aufbewahrungsfristen – bleiben unberührt.
              </p>
            </SubSection>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          {/* 4. Hosting */}
          <Section title="4. Hosting">
            <SubSection title="Vercel">
              <p>
                Wir hosten diese Website bei Vercel. Anbieter ist die Vercel Inc., 340 Pine Street, Suite
                701, San Francisco, CA 94104, USA (nachfolgend „Vercel").
              </p>
              <p>
                Wenn Sie unsere Website besuchen, erfasst Vercel verschiedene Logfiles inklusive Ihrer
                IP-Adressen. Details entnehmen Sie der Datenschutzerklärung von Vercel:{" "}
                <a
                  href="https://vercel.com/legal/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8922A] hover:underline break-all"
                >
                  https://vercel.com/legal/privacy-policy
                </a>
              </p>
              <p>
                Die Verwendung von Vercel erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Wir haben
                ein berechtigtes Interesse an einer möglichst zuverlässigen Darstellung unserer Website.
                Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung
                ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO; die Einwilligung ist
                jederzeit widerrufbar.
              </p>
              <p>
                Vercel ist unter dem EU-US Data Privacy Framework (EU-US DPF) zertifiziert. Die
                Datenübertragung in die USA wird auf Standardvertragsklauseln (SCCs) gemäß Art. 46 Abs. 2
                lit. c DSGVO gestützt. Mit Vercel wurde ein Auftragsverarbeitungsvertrag (AVV) gemäß
                Art. 28 DSGVO abgeschlossen.
              </p>
            </SubSection>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          {/* 5. Externe Dienste */}
          <Section title="5. Externe Dienste und eingebundene Inhalte">
            <SubSection title="Schriftarten (Google Fonts via next/font)">
              <p>
                Diese Website verwendet Schriftarten des Anbieters Google Fonts. Zur Einbindung wird die
                Next.js-Bibliothek <code className="bg-[#F5EFE0] px-1.5 py-0.5 rounded text-sm font-mono text-[#2A1F0E]">next/font/google</code> verwendet.
              </p>
              <p>
                <strong className="text-[#2A1F0E]">Wichtiger Hinweis:</strong> Im Gegensatz zur direkten
                Einbindung über einen CDN-Link werden die Schriftdateien bei Verwendung von{" "}
                <code className="bg-[#F5EFE0] px-1.5 py-0.5 rounded text-sm font-mono text-[#2A1F0E]">next/font</code>{" "}
                <strong className="text-[#2A1F0E]">zum Zeitpunkt des Build-Prozesses</strong> heruntergeladen
                und anschließend vom eigenen Server ausgeliefert. Beim Besuch dieser Website werden daher
                <strong className="text-[#2A1F0E]"> keine Anfragen an Google-Server</strong> gestellt.
                Es findet keine Übertragung Ihrer personenbezogenen Daten (insbesondere keine IP-Adresse)
                an Google statt.
              </p>
            </SubSection>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          {/* 6. Betroffenenrechte */}
          <Section title="6. Ihre Rechte als betroffene Person">
            <SubSection title="Überblick der Betroffenenrechte">
              <p>Sie haben folgende Rechte hinsichtlich der Sie betreffenden personenbezogenen Daten:</p>
              <ul className="list-disc list-inside space-y-2 ml-2">
                <li><strong className="text-[#2A1F0E]">Auskunftsrecht</strong> (Art. 15 DSGVO): Sie haben das Recht zu erfahren, welche Daten wir über Sie verarbeiten.</li>
                <li><strong className="text-[#2A1F0E]">Recht auf Berichtigung</strong> (Art. 16 DSGVO): Sie können die Berichtigung unrichtiger Daten verlangen.</li>
                <li><strong className="text-[#2A1F0E]">Recht auf Löschung</strong> (Art. 17 DSGVO): Sie können unter bestimmten Voraussetzungen die Löschung Ihrer Daten verlangen.</li>
                <li><strong className="text-[#2A1F0E]">Recht auf Einschränkung der Verarbeitung</strong> (Art. 18 DSGVO): Sie können die Einschränkung der Verarbeitung verlangen.</li>
                <li><strong className="text-[#2A1F0E]">Recht auf Datenübertragbarkeit</strong> (Art. 20 DSGVO): Sie haben das Recht, Ihre Daten in einem maschinenlesbaren Format zu erhalten.</li>
                <li><strong className="text-[#2A1F0E]">Widerspruchsrecht</strong> (Art. 21 DSGVO): Sie können der Verarbeitung Ihrer Daten jederzeit widersprechen.</li>
                <li><strong className="text-[#2A1F0E]">Recht auf Widerruf einer Einwilligung</strong> (Art. 7 Abs. 3 DSGVO): Eine erteilte Einwilligung kann jederzeit widerrufen werden.</li>
              </ul>
              <p>
                Zur Ausübung dieser Rechte wenden Sie sich an:{" "}
                <a href="mailto:boenke.sabine@gmx.de" className="text-[#B8922A] hover:underline">
                  boenke.sabine@gmx.de
                </a>
              </p>
            </SubSection>
            <SubSection title="Beschwerderecht bei der Aufsichtsbehörde">
              <p>
                Unbeschadet eines anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs
                steht Ihnen das Recht auf Beschwerde bei einer Aufsichtsbehörde zu, insbesondere in dem
                Mitgliedstaat Ihres Aufenthaltsorts, Ihres Arbeitsplatzes oder des Orts des mutmaßlichen
                Verstoßes, wenn Sie der Ansicht sind, dass die Verarbeitung der Sie betreffenden
                personenbezogenen Daten gegen die DSGVO verstößt.
              </p>
              <p>
                Zuständige Aufsichtsbehörde für Baden-Württemberg:
              </p>
              <p>
                Der Landesbeauftragte für den Datenschutz und die Informationsfreiheit Baden-Württemberg<br />
                Lautenschlagerstraße 20<br />
                70173 Stuttgart<br />
                Telefon: +49 (0)711 615541-0<br />
                E-Mail:{" "}
                <a href="mailto:poststelle@lfdi.bwl.de" className="text-[#B8922A] hover:underline">
                  poststelle@lfdi.bwl.de
                </a><br />
                Website:{" "}
                <a
                  href="https://www.baden-wuerttemberg.datenschutz.de"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#B8922A] hover:underline"
                >
                  www.baden-wuerttemberg.datenschutz.de
                </a>
              </p>
            </SubSection>
          </Section>

          <div className="h-px bg-[#E5D9C0] mb-10" />

          <p className="text-[#9A7D5A] text-sm">
            Diese Datenschutzerklärung wurde nach bestem Wissen und Gewissen erstellt und sollte vor
            Veröffentlichung auf einer echten Domain von einer rechtskundigen Person geprüft werden.
          </p>

        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
