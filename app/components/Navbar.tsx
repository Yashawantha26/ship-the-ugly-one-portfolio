import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed left-0 right-0 top-0 z-50 border-b border-slate-800 bg-slate-950/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-xl font-bold text-white transition hover:text-cyan-400"
        >
          Yashawantha<span className="text-cyan-400">.</span>
        </Link>

        <div className="hidden items-center gap-8 sm:flex">
          <Link
            href="/"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Home
          </Link>

          <Link
            href="/about"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            About
          </Link>

          <Link
            href="/projects"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Projects
          </Link>

          <Link
            href="/contact"
            className="text-sm text-slate-300 transition hover:text-cyan-400"
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}