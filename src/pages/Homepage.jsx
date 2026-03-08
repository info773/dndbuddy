import Footer from "../components/shared/Footer";
import NavBar from "../components/shared/NavBar";

function Homepage() {
  return (
    <div className="flex flex-col min-w-screen min-h-screen">
      <NavBar />
      <div className="flex flex-col flex-1 justify-center items-center">
        <img
          src="/logo_unicorn.png"
          alt="Unicorn Logo"
          className="h-150 hover:rotate-3600 transition-transform duration-20000"
        />
        <p className="my-8 font-rpg text-7xl">RPG-Buddy</p>
      </div>
      <div className="mt-auto">
        <Footer />
      </div>
    </div>
  );
}

export default Homepage;
