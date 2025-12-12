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
              className="rounded-full border border-cyan-400/70 px-4 py-1.5 text-xs font-medium text-cyan-100 shadow-sm hover:bg-cyan-500/10"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* MAIN WRAPPER */}
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-8 sm:pt-10">
          {/* HERO / ABOUT */}
          <section
            id="about"
            className="mb-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Data Analytics · Business Intelligence · Machine Learning
              </p>

              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                Hi, I&apos;m Sindhu. I like turning messy data into clear stories.
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                I am a data analyst and aspiring data scientist who enjoys finding
                patterns, understanding why things happen, and translating numbers
                into insights people can actually use. I work end to end, from data
                cleaning and SQL, to modeling, to dashboards that make decisions
                easier.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Recently I have worked on churn analysis, marketing performance,
                forecasting, and operational analytics. I care about clarity,
                communication, and building work that teams can trust.
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
                className="rounded-full object-cover border border-cyan-400/40 shadow-[0_0_50px_rgba(8,47,73,0.7)]"
              />
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mb-14">
            <h2 className="mb-4 text-xl font-semibold">Skills</h2>
            <p className="mb-4 text-sm text-slate-300">
              I enjoy working across the whole data lifecycle, from raw files and
              SQL queries to polished dashboards and models that support real
              decisions.
            </p>

            <div className="grid gap-4 md:grid-cols-2">
              <SkillCard
                title="Programming and Machine Learning"
                items={[
                  "Python",
                  "SQL",
                  "pandas",
                  "NumPy",
                  "scikit-learn",
                  "XGBoost",
                  "Prophet",
                ]}
              />
              <SkillCard
                title="Data and Business Intelligence"
                items={[
                  "Snowflake",
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Tableau",
                  "Power BI",
                  "Looker",
                  "Excel (advanced)",
                ]}
              />
              <SkillCard
                title="Data Engineering and Cloud"
                items={[
                  "ETL pipelines",
                  "dbt",
                  "Airflow",
                  "AWS",
                  "Docker",
                  "Git",
                ]}
              />
              <SkillCard
                title="How I Work"
                items={[
                  "KPI design and reporting",
                  "Exploratory analysis",
                  "Experimentation and A/B testing",
                  "Explaining insights to stakeholders",
                  "Agile",
                  "JIRA",
                ]}
              />
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mb-14">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h2 className="text-xl font-semibold">Projects</h2>
              <span className="text-xs text-slate-400">
                A few things I have built or explored
              </span>
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              <ProjectCard
                title="Financial Forecasting Model"
                description="An end to end forecasting workflow using time series models to study trends and generate forecasts. Focused on clean preprocessing, explainable outputs, and clear visuals."
                tags={["Python", "Time series", "Prophet / ARIMA", "Visualization"]}
              />

              <ProjectCard
                title="Marketing Insights Dashboard"
                description="Dashboards to track campaign performance, conversion behavior, and funnel KPIs. Helped replace scattered spreadsheets with a single view teams could trust."
                tags={["Power BI", "Tableau", "SQL", "KPI design"]}
              />

              <ProjectCard
                title="Churn Prediction and Segmentation"
                description="A churn model and segmentation analysis to identify at risk users and understand behavior by cohort. Supported retention prioritization with interpretable results."
                tags={["Python", "scikit-learn", "XGBoost", "Segmentation"]}
              />

              <ProjectCard
                title="University Data Insights"
                description="Analytics on enrollment and academic data to support planning and reporting. Defined metrics, improved data structure, and made reporting more repeatable."
                tags={["SQL", "Reporting", "Dashboards", "Education data"]}
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
                  "Analyzed academic datasets to surface skill gaps and support program decisions.",
                  "Built repeatable workflows to reduce manual analysis time and improve consistency.",
                  "Created visuals and summaries that made results easy to discuss with faculty.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst"
                company="Ulytics Inc"
                period="2024 to 2025"
                bullets={[
                  "Automated reporting workflows and delivered dashboards used in daily decision making.",
                  "Built churn and performance analyses to help teams understand customer behavior.",
                  "Translated open ended questions into structured analysis with clear next steps.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst"
                company="Cognizant Technology Solutions"
                period="2022 to 2023"
                bullets={[
                  "Standardized KPI definitions across teams to reduce inconsistencies in reporting.",
                  "Optimized SQL queries and reporting logic for reliability and speed.",
                  "Partnered with non technical stakeholders to keep dashboards simple and usable.",
                ]}
              />

              <ExperienceItem
                role="Analytics and Reporting Projects"
                company="Academic and Internship Work"
                period="Earlier experience"
                bullets={[
                  "Worked on data cleaning, exploratory analysis, and dashboard building for real questions.",
                  "Developed habits around documentation, reproducibility, and communicating results.",
                  "Used this phase to build strong foundations in Python, SQL, and BI tools.",
                ]}
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mb-4">
            <h2 className="mb-3 text-xl font-semibold">Get in touch</h2>

            <p className="text-sm text-slate-300">
              I am open to full time roles, internships, and collaborations. If you
              are looking for someone who enjoys both the technical work and the
              storytelling side of data, feel free to reach out.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <a
                href="mailto:sindhuvarmaa2001@gmail.com"
                className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-medium text-slate-950 shadow hover:bg-cyan-400"
              >
                Email me
              </a>

              <span className="text-xs text-slate-400">
                Or connect on{" "}
                <a
                  href="https://www.linkedin.com/in/sri-sai-sindhu-penmetsa-03b1511ab"
                  target="_blank"
                  rel="noreferrer"
                  className="text-cyan-300 underline-offset-2 hover:underline"
                >
                  LinkedIn
                </a>
                .
              </span>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-8 border-t border-slate-800 pt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Sri Sai Sindhu Penmetsa · Built with
            Next.js and Tailwind CSS.
          </footer>
        </div>
      </div>
    </main>
  );
}

/* Reusable components */

function SkillCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-sm">
      <p className="mb-2 text-sm font-semibold text-slate-100">{title}</p>
      <div className="flex flex-wrap gap-2 text-[11px] text-slate-200">
        {items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-slate-700 bg-slate-900 px-3 py-1"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({
  title,
  description,
  tags,
}: {
  title: string;
  description: string;
  tags: string[];
}) {
  return (
    <div className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/70 p-4 shadow-sm hover:border-cyan-400/60 hover:shadow-cyan-500/10">
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>

      <p className="mt-2 text-xs leading-relaxed text-slate-300">
        {description}
      </p>

      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-200">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700 bg-slate-950 px-3 py-1"
          >
            {tag}
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

      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <p className="text-sm font-semibold text-slate-100">
          {role} · <span className="text-slate-300">{company}</span>
        </p>
        <p className="text-[11px] text-slate-400">{period}</p>
      </div>

      <ul className="mt-2 list-disc space-y-1 pl-4 text-[11px] text-slate-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
