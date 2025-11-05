import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

function Footer() {
  return (
    <footer className="py-8 border-t border-white/20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center text-sm text-slate-600 dark:text-slate-400">
        © {new Date().getFullYear()} Lukas Rafaelluce · Built with modern web tech
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black selection:bg-emerald-300 selection:text-emerald-900">
      <Navbar />
      <main>
        <Hero />
        <section id="about" className="py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-10 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white">About Lukas</h2>
                <p className="mt-4 text-slate-700 dark:text-slate-300 leading-relaxed">
                  I’m a Cyber Security student obsessed with defensive security—building detection, reducing attack surface, and responding fast. I love experimenting with SIEM pipelines, network telemetry, and practical hardening.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {["Threat Detection", "Incident Response", "Linux Hardening", "Network Monitoring"].map((skill) => (
                  <div key={skill} className="rounded-xl border border-emerald-400/40 bg-emerald-50/60 dark:bg-emerald-500/10 p-4 text-emerald-800 dark:text-emerald-200 text-sm font-medium">
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        <Projects />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
