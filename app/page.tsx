const SECTIONS = ["about", "skills", "projects", "experience", "contact"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      {/* soft gradient background */}
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />

      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            <span className="text-xl font-bold tracking-wide sm:text-2xl">
              Sri Sai Sindhu Penmetsa
            </span>

            <div className="hidden gap-5 text-xs sm:flex">
              {SECTIONS.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="uppercase tracking-[0.2em] text-slate-400 hover:text-cyan-300"
                >
                  {id}
                </a>
              ))}
            </div>

            <a
              href="mailto:sindhuvarmaa2001@gmail.com"
              className="rounded-full border border-cyan-400/70 px-4 py-2 text-xs font-medium text-cyan-100 hover:bg-cyan-500/10"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* MAIN WRAPPER */}
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
          {/* ABOUT / HERO */}
          <section
            id="about"
            className="mb-16 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Data Analytics · Business Intelligence · Machine Learning
              </p>

              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                Hi, I’m Sindhu. I turn raw data into decisions people can trust.
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                I’m a data analyst with a strong interest in data science. I enjoy
                working with messy datasets, cleaning and structuring them, and
                turning the results into dashboards, forecasts, and insights that
                teams can actually use.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                My experience includes customer analytics, churn analysis,
                marketing performance, and operational reporting. I focus on
                clarity, accuracy, and making sure analysis answers real business
                questions.
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

            {/* INITIALS CARD */}
            <div className="flex justify-center sm:block">
              <div className="relative h-40 w-40 rounded-3xl border border-cyan-400/40 bg-slate-900 shadow-[0_0_50px_rgba(8,47,73,0.7)]">
                <div className="flex h-full w-full items-center justify-center text-4xl font-semibold tracking-tight">
                  SP
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mb-16">
            <h2 className="mb-4 text-xl font-semibold">Skills</h2>

            <div className="grid gap-4 md:grid-cols-2">
              <SkillCard
                title="Programming and Analysis"
                items={[
                  "Python",
                  "SQL",
                  "pandas",
                  "NumPy",
                  "scikit-learn",
                  "XGBoost",
                ]}
              />
              <SkillCard
                title="BI and Visualization"
                items={[
                  "Power BI",
                  "Tableau",
                  "Excel (Advanced)",
                  "KPI Design",
                  "Storytelling",
                ]}
              />
              <SkillCard
                title="Data Platforms"
                items={[
                  "Snowflake",
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Data Modeling",
                ]}
              />
              <SkillCard
                title="Workflow and Tools"
                items={["ETL", "dbt", "Airflow", "AWS", "Docker", "Git"]}
              />
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mb-16">
            <h2 className="mb-6 text-xl font-semibold">Projects</h2>

            <div className="grid gap-5 md:grid-cols-2">
              <ProjectCard
                title="Financial Forecasting and Scenario Planning"
                description="Built a forecasting workflow to analyze historical financial data, identify trends and seasonality, and generate forward-looking projections. Compared multiple modeling approaches and focused on producing interpretable results that could support planning decisions."
                tags={[
                  "Python",
                  "Time series",
                  "Prophet / ARIMA",
                  "Visualization",
                ]}
              />

              <ProjectCard
                title="Marketing Performance and Funnel Analytics"
                description="Designed dashboards to track campaign performance, acquisition funnels, and conversion drop-offs. Consolidated data sources and standardized KPIs so teams could rely on one consistent view of performance."
                tags={["Power BI", "Tableau", "SQL", "KPI Design"]}
              />

              <ProjectCard
                title="Customer Churn Prediction and Segmentation"
                description="Developed a churn prediction model paired with customer segmentation to identify at-risk users and explain behavioral differences across cohorts. Focused on interpretability to guide retention strategies."
                tags={[
                  "Python",
                  "scikit-learn",
                  "XGBoost",
                  "Segmentation",
                ]}
              />

              <ProjectCard
                title="University Enrollment and Academic Reporting"
                description="Analyzed enrollment and academic datasets to support institutional planning. Defined repeatable metrics and created dashboards that made trends easier to track across semesters."
                tags={["SQL", "Reporting", "Dashboards"]}
              />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="mb-16">
            <h2 className="mb-6 text-xl font-semibold">Experience</h2>

            <div className="space-y-5 border-l border-slate-800 pl-4">
              <ExperienceItem
                role="Research Intern, Data Science"
                company="Binghamton University"
                period="July 2025 – Present"
                bullets={[
                  "Analyzed academic datasets to support research around outcomes and skill gaps.",
                  "Built repeatable data preparation workflows to reduce manual analysis.",
                  "Presented insights using clear visual summaries for faculty discussions.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst"
                company="Ulytics Inc"
                period="May 2024 – May 2025"
                bullets={[
                  "Built dashboards for customer behavior, churn indicators, and operational metrics.",
                  "Improved ETL workflows to make reporting faster and more reliable.",
                  "Translated business questions into structured analysis with actionable insights.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst"
                company="Cognizant Technology Solutions"
                period="October 2022 – July 2023"
                bullets={[
                  "Standardized KPIs across teams to reduce reporting inconsistencies.",
                  "Optimized SQL queries to improve performance and stability.",
                  "Worked closely with business stakeholders to refine dashboard usability.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst Intern"
                company="Cognizant Technology Solutions"
                period="March 2022 – July 2022"
                bullets={[
                  "Assisted senior analysts with data cleaning and ad hoc analysis.",
                  "Wrote SQL queries to support reporting and reduce spreadsheet work.",
                  "Helped document metrics and reporting logic for consistency.",
                ]}
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact">
            <h2 className="mb-3 text-xl font-semibold">Get in touch</h2>
            <p className="text-sm text-slate-300">
              I’m open to data analyst and data science opportunities. If you’re
              looking for someone who values strong analysis and clear
              communication, feel free to reach out.
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
          <footer className="mt-10 border-t border-slate-800 pt-4 text-xs text-slate-500">
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
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-4 hover:border-cyan-400/60">
      <h3 className="text-sm font-semibold">{title}</h3>
      <p className="mt-2 text-xs leading-relaxed text-slate-300">
        {description}
      </p>
      <div className="mt-3 flex flex-wrap gap-2 text-[11px]">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700 px-3 py-1"
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
      <p className="text-sm font-semibold">
        {role} · <span className="text-slate-300">{company}</span>
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
