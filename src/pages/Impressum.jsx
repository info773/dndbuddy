import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";

function Impressum() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBar />
      <main className="flex-1 px-6 py-8 max-w-3xl mx-auto">
        <h1 className="text-3xl font-bold mb-6">Impressum</h1>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">
            Angaben gemaess § 5 TMG
          </h2>
          <p>Felix Behrens</p>
          <p>Deutschland</p>
        </section>

        <section className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Kontakt</h2>
          <p>E-Mail: info@felix-behrens.de</p>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Impressum;
