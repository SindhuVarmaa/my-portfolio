import Image from "next/image";

const SECTIONS = ["about", "skills", "projects", "experience", "contact"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* soft gradient background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />

      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
            <span className="text-sm font-semibold tracking-wide">
              Sri Sai Sindhu Penmetsa
            </span>
            <div className="hidden gap-4 text-xs sm:flex">
              {SECTIONS.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="uppercase tracking-[0.18em] text-slate-400 hover:text-cyan-300"
                >
                  {id}
                </a>
              ))}
            </div>
            <a
              href="mailto:sindhuvarmaa2001@gmail.com"
              className="rounded-full border border-cyan-400/70 px-4 py-1.5 text-xs font-medium text-cyan-100 hover:bg-cyan-500/10"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* MAIN */}
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
          {/* HERO */}
          <section
            id="about"
            className="mb-14 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Data Analytics · Business Intelligence · Machine Learning
              </p>

              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                Hi, I&apos;m Sindhu. I turn messy data into clear stories.
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                I am a data analyst and aspiring data scientist who enjoys finding
                patterns, understanding why things happen, and translating numbers
                into insights people can actually use.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                I have worked on churn analysis, marketing performance, forecasting,
                and operational analytics. I care about clarity, communication, and
                building solutions that support real decisions.
              </p>

              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  New York · Open to relocation
                </span>

                <a
                  href="https://www.linkedin.com/in/sri-sai-sindhu-penmetsa-03b1511ab"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-3 py-1 hover:border-cyan-400 hover:text-cyan-300"
                >
                  LinkedIn
                </a>

                <a
                  href="https://github.com/SindhuVarmaa"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-3 py-1 hover:border-cyan-400 hover:text-cyan-300"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* PROFILE PHOTO */}
            <div className="flex justify-center sm:block">
              <Image
                src="/sindhu-portfolio.jpg"
                alt="Sindhu profile photo"
                width={140}
                height={140}
                priority
                className="rounded-full object-cover border border-cyan-400/40 shadow-[0_0_40px_rgba(8,47,73,0.7)]"
              />
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mb-14">
            <h2 className="mb-4 text-xl font-semibold">Skills</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <SkillCard
                title="Programming and Machine Learning"
                items={["Python", "SQL", "pandas", "NumPy", "scikit-learn", "XGBoost"]}
              />
              <SkillCard
                title="Data and BI"
                items={[
                  "Snowflake",
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Tableau",
                  "Power BI",
                ]}
              />
              <SkillCard
                title="Data Engineering and Cloud"
                items={["ETL pipelines", "dbt", "Airflow", "AWS", "Docker", "Git"]}
              />
              <SkillCard
                title="How I Work"
                items={[
                  "KPI design",
                  "Exploratory analysis",
                  "Stakeholder communication",
                  "Agile",
                ]}
              />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="mb-14">
            <h2 className="mb-4 text-xl font-semibold">Experience</h2>
            <div className="space-y-4 border-l border-slate-800 pl-4">
              <ExperienceItem
                role="Research Intern, Data Science"
                company="Binghamton University"
                period="2025"
                bullets={[
                  "Analyzed academic data to identify skill gaps and support curriculum decisions.",
                  "Built repeatable data workflows to reduce manual effort.",
                  "Created visual insights for faculty and administrators.",
                ]}
              />
              <ExperienceItem
                role="Data Analyst"
                company="Ulytics Inc"
                period="2024–2025"
                bullets={[
                  "Automated reporting workflows and built dashboards used in daily decisions.",
                  "Developed churn and performance analytics for business teams.",
                  "Translated open-ended questions into structured analysis.",
                ]}
              />
              <ExperienceItem
                role="Data Analyst"
                company="Cognizant Technology Solutions"
                period="2022–2023"
                bullets={[
                  "Standardized KPIs across teams for consistent reporting.",
                  "Optimized SQL queries and reporting pipelines.",
                  "Worked closely with non-technical stakeholders.",
                ]}
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mb-6">
            <h2 className="mb-3 text-xl font-semibold">Get in touch</h2>
            <p className="text-sm text-slate-300">
              I am open to data roles, analytics projects, and collaborations.
            </p>
            <div className="mt-4">
              <a
                href="mailto:sindhuvarmaa2001@gmail.com"
                className="rounded-full bg-cyan-500 px-5 py-2 text-xs font-medium text-slate-950 hover:bg-cyan-400"
              >
                Email me
              </a>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-8 border-t border-slate-800 pt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Sri Sai Sindhu Penmetsa
          </footer>
        </div>
      </div>
    </main>
  );
}

/* COMPONENTS */

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4">
      <p className="mb-2 text-sm font-semibold">{title}</p>
      <div className="flex flex-wrap gap-2 text-[11px]">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 px-3 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ExperienceItem({
  role,
  company,
  period,
  bullets,
}: {
  role: string;
  company: string;
  period: string;
  bullets: string[];
}) {
  return (
    <div className="relative pl-4">
      <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border border-cyan-300 bg-slate-950" />
      <p className="text-sm font-semibold">
        {role} <span className="text-slate-300">· {company}</span>
      </p>
      <p className="text-[11px] text-slate-400">{period}</p>
      <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
