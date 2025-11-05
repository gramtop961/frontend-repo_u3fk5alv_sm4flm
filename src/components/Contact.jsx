import { Mail } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Get in touch
          </motion.h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            Open to internships, collaborations, and blue-team focused projects.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6 }}
          className="mt-10 rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-xl font-semibold text-slate-900 dark:text-white">Let's build secure systems together</h3>
              <p className="mt-2 text-slate-600 dark:text-slate-300">Email me and I'll respond within 24 hours.</p>
            </div>
            <a
              href="mailto:lukas.rafaelluce@example.com"
              className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white px-5 py-3 font-medium shadow-lg shadow-emerald-500/25 transition"
            >
              <Mail className="h-5 w-5" />
              Email Lukas
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
