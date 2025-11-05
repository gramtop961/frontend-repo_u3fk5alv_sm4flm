import { Shield, Lock, Terminal } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "SOC Playbook Toolkit",
    description:
      "A curated set of scripts and workflows for triaging alerts, enriched with threat intel lookups and artifact parsing.",
    tags: ["Python", "Sigma", "YARA"],
    icon: Shield,
  },
  {
    title: "Blue Team Lab",
    description:
      "Home lab for detection engineering: Elastic stack pipelines, honeypots, and attack simulations.",
    tags: ["Elastic", "Suricata", "Docker"],
    icon: Terminal,
  },
  {
    title: "Hardening Baselines",
    description:
      "Opinionated, minimal baselines for securing Linux servers with auditd, SSH, and CIS-aligned controls.",
    tags: ["Linux", "Ansible", "CIS"],
    icon: Lock,
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-24 bg-gradient-to-b from-white to-slate-50 dark:from-black dark:to-slate-900/40">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 dark:text-white"
          >
            Featured Projects
          </motion.h2>
          <p className="mt-3 text-slate-600 dark:text-slate-300">
            A selection of defensive security work and learning projects.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map(({ title, description, tags, icon: Icon }) => (
            <motion.div
              key={title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.5 }}
              className="group relative rounded-2xl border border-slate-200/60 dark:border-white/10 bg-white/70 dark:bg-white/[0.03] backdrop-blur p-6 hover:shadow-xl hover:shadow-emerald-500/10 transition"
            >
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-emerald-400/90 to-cyan-500/90 grid place-items-center">
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="mt-4 text-lg font-semibold text-slate-900 dark:text-white">{title}</h3>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-300">{description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs px-2.5 py-1 rounded-full border border-emerald-400/40 text-emerald-700 dark:text-emerald-300 bg-emerald-50/60 dark:bg-emerald-500/10"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
