function Logo() {
  return (
    <div className="flex items-center gap-4 font-rpg text-3xl">
      <img
        src="../public/logo_unicorn.png"
        alt="Logo of a Unicorn"
        className="px-2 h-12 hover:rotate-160 transition-transform duration-300"
      />
      <p className="hover:rotate-4 transition-transform duration-200">
        RPG-Buddy
      </p>
    </div>
  );
}

export default Logo;
