import { Shield, Github, Linkedin } from "lucide-react";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-white/60 bg-white/50 dark:bg-black/40 border-b border-white/20">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="h-9 w-9 rounded-lg bg-gradient-to-br from-emerald-400 to-cyan-500 grid place-items-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <span className="font-semibold tracking-tight text-slate-900 dark:text-white">Lukas Rafaelluce</span>
        </div>
        <div className="hidden md:flex items-center gap-6 text-sm">
          <a href="#about" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">About</a>
          <a href="#projects" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">Projects</a>
          <a href="#contact" className="text-slate-600 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white transition">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="https://github.com/" target="_blank" rel="noreferrer" aria-label="GitHub" className="p-2 rounded-lg border border-white/30 hover:bg-white/60 dark:hover:bg-white/10 transition">
            <Github className="h-5 w-5 text-slate-800 dark:text-slate-200" />
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="p-2 rounded-lg border border-white/30 hover:bg-white/60 dark:hover:bg-white/10 transition">
            <Linkedin className="h-5 w-5 text-slate-800 dark:text-slate-200" />
          </a>
        </div>
      </nav>
    </header>
  );
}
