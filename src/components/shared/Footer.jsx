import { Link } from "react-router-dom";

function Footer() {
  return (
    <div className="flex items-center justify-between gap-3 bg-slate-500 p-2">
      <div className="flex items-center gap-3">
        <p>&copy; Felix Behrens {new Date().getFullYear()}</p>
        <img
          className="opacity-70 h-4 hover:rotate-1800 transition-transform duration-3000"
          src="/logo_unicorn.png"
          alt=""
        />
      </div>
      <div className="flex items-center gap-4 text-sm">
        <Link className="underline hover:opacity-80" to="/impressum">
          Impressum
        </Link>
        <Link className="underline hover:opacity-80" to="/datenschutz">
          Datenschutz
        </Link>
      </div>
    </div>
  );
}

export default Footer;
