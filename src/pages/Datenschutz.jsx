import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";

function Datenschutz() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 mx-auto px-6 py-8 max-w-3xl">
        <h1 className="mb-6 font-bold text-3xl">Datenschutzerklaerung</h1>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">Verantwortliche Stelle</h2>
          <p>Felix Behrens</p>
          <p>Deutschland</p>
          <p>E-Mail: info@felix-behrens.de</p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">
            Allgemeine Hinweise zur Datenverarbeitung
          </h2>
          <p>
            Wir verarbeiten personenbezogene Daten nur, soweit dies zur
            Bereitstellung dieser Website/App erforderlich ist, eine
            Einwilligung vorliegt oder eine gesetzliche Grundlage dies erlaubt.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">Zugriffsdaten</h2>
          <p>
            Beim Aufruf dieser Website/App werden technisch notwendige Daten
            verarbeitet (z.B. IP-Adresse, Datum und Uhrzeit des Zugriffs,
            aufgerufene Seite, Browser-Informationen). Diese Daten dienen der
            Stabilitaet und Sicherheit des Betriebs.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">
            Cookies / Local Storage
          </h2>
          <p>
            Wir setzen derzeit keine Tracking- oder Marketing-Cookies ein. Falls
            funktionale Cookies oder Local-Storage-Technologien genutzt werden,
            erfolgen diese zur Bereitstellung der App (Art. 6 Abs. 1 lit. f
            DSGVO).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">Kontaktaufnahme</h2>
          <p>
            Wenn Sie uns kontaktieren, verarbeiten wir die von Ihnen
            uebermittelten Daten zur Bearbeitung der Anfrage. Rechtsgrundlage
            ist Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Massnahmen) bzw.
            Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">
            Empfaenger und Auftragsverarbeiter
          </h2>
          <p>
            Zur Bereitstellung der App nutzen wir technische Dienstleister. Mit
            diesen sind Auftragsverarbeitungsvertraege abgeschlossen.
          </p>
          <p>
            Datenbank/Backend: Supabase (Supabase Inc., USA) fuer die
            Speicherung des App-Zustands. Rechtsgrundlage ist Art. 6 Abs. 1 lit.
            f DSGVO (berechtigtes Interesse an stabiler Bereitstellung).
          </p>
          <p>
            Sofern eine Verarbeitung in Drittlaendern erfolgt, geschieht dies
            auf Grundlage geeigneter Garantien (z.B. Standardvertragsklauseln).
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">Speicherdauer</h2>
          <p>
            Personenbezogene Daten werden nur so lange gespeichert, wie dies
            fuer die genannten Zwecke erforderlich ist oder gesetzliche
            Aufbewahrungsfristen bestehen.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">Ihre Rechte</h2>
          <p>
            Sie haben das Recht auf Auskunft, Berichtigung, Loeschung,
            Einschraenkung der Verarbeitung, Widerspruch gegen die Verarbeitung
            sowie Datenuebertragbarkeit gemaess Art. 15-21 DSGVO.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">
            Beschwerderecht bei der Aufsichtsbehoerde
          </h2>
          <p>
            Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehoerde zu
            beschweren, insbesondere in dem Mitgliedstaat Ihres Aufenthaltsorts,
            Ihres Arbeitsplatzes oder des Orts des mutmasslichen Verstosses.
          </p>
        </section>

        <section className="mb-6">
          <h2 className="mb-2 font-semibold text-xl">Stand</h2>
          <p>11.03.2026</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Datenschutz;
