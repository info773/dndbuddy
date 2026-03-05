function Footer() {
  return (
    <div className="flex items-center gap-3 bg-slate-500 p-1">
      <p>&copy; Felix Behrens {new Date().getFullYear()}</p>
      <img className="opacity-70 h-4" src="/logo_unicorn.png" alt="" />
    </div>
  );
}

export default Footer;
