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
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            {/* Bigger name */}
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
              className="rounded-full border border-cyan-400/70 px-4 py-2 text-xs font-medium text-cyan-100 shadow-sm hover:bg-cyan-500/10"
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
                taking messy datasets, cleaning and shaping them, and turning the
                results into dashboards, forecasts, and insights that are easy for
                teams to use.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                My work has focused on customer behavior, churn, marketing
                performance, and operational reporting. I care about accuracy,
                clarity, and making sure the analysis connects back to real
                business questions.
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
                alt="Sri Sai Sindhu Penmetsa"
                width={160}
                height={160}
                priority
                className="rounded-full object-cover border border-cyan-400/40 shadow-[0_0_50px_rgba(8,47,73,0.7)]"
              />
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mb-16">
            <h2 className="mb-4 text-xl font-semibold">Skills</h2>
            <p className="mb-4 text-sm text-slate-300">
              Tools I use most often for analysis, reporting, and building
              repeatable workflows.
            </p>

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
                  "Storytelling with Data",
                ]}
              />
              <SkillCard
                title="Data and Platforms"
                items={[
                  "Snowflake",
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Data Modeling",
                ]}
              />
              <SkillCard
                title="Pipelines and Workflow"
                items={["ETL", "dbt", "Airflow", "AWS", "Docker", "Git"]}
              />
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mb-16">
            <div className="mb-5 flex items-center justify-between gap-2">
              <h2 className="text-xl font-semibold">Projects</h2>
              <span className="text-xs text-slate-400">
                Selected work (end-to-end)
              </span>
            </div>

            <div className="grid gap-5 md:grid-cols-2">
              <ProjectCard
                title="Financial Forecasting and Scenario Planning"
                description="Built a forecasting workflow to study historical trends, seasonality, and anomalies in financial time-series data. I compared multiple approaches (baseline + time-series models), validated performance using time-based splits, and created scenario-style outputs so the results were useful for planning. The final output included clear visuals and plain-language takeaways for non-technical audiences."
                tags={[
                  "Python",
                  "Time series",
                  "Prophet / ARIMA",
                  "Feature engineering",
                  "Visualization",
                ]}
              />

              <ProjectCard
                title="Marketing Performance Dashboard and Funnel Insights"
                description="Designed dashboards to track campaign performance, acquisition funnels, and conversion drop-offs. I consolidated data sources, cleaned metrics for consistency, and defined KPIs so teams didn’t have conflicting numbers across spreadsheets. The dashboards focused on what changed, why it changed, and where teams should look next."
                tags={["Power BI / Tableau", "SQL", "KPI Design", "Funnel analysis"]}
              />

              <ProjectCard
                title="Customer Churn Prediction with Segment-Level Insights"
                description="Created a churn model to flag at-risk customers and paired it with segmentation to explain differences in behavior across cohorts. I focused on interpretability (top drivers, segment patterns), not just accuracy, so the output could guide targeted retention actions. The project also included a repeatable scoring workflow for new data."
                tags={[
                  "Python",
                  "scikit-learn",
                  "XGBoost",
                  "Segmentation",
                  "Interpretability",
                ]}
              />

              <ProjectCard
                title="University Enrollment and Academic Trend Reporting"
                description="Analyzed academic and enrollment datasets to support planning across terms. I defined repeatable metrics, standardized reporting logic, and built summaries that made it easy to compare trends by semester and department. The goal was faster reporting with fewer manual steps and clearer visibility into changes over time."
                tags={["SQL", "Reporting", "Dashboards", "Education analytics"]}
              />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="mb-16">
            <h2 className="mb-5 text-xl font-semibold">Experience</h2>

            <div className="space-y-5 border-l border-slate-800 pl-4">
              <ExperienceItem
                role="Research Intern, Data Science"
                company="Binghamton University"
                period="Jan 2025 – May 2025"
                bullets={[
                  "Worked with academic datasets to analyze outcomes and surface skill gaps that supported curriculum-related discussions.",
                  "Built repeatable data preparation workflows to reduce manual effort and keep analysis consistent across iterations.",
                  "Summarized results using visual explanations that faculty and administrators could quickly interpret.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst"
                company="Ulytics Inc"
                period="Aug 2024 – Dec 2024"
                bullets={[
                  "Built and maintained dashboards used for tracking customer behavior, churn signals, and operational performance.",
                  "Automated reporting steps by improving ETL logic and reducing manual refresh work for recurring metrics.",
                  "Turned open-ended business questions into structured analysis, with clear recommendations and next steps.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst"
                company="Cognizant Technology Solutions"
                period="Jul 2022 – Dec 2023"
                bullets={[
                  "Standardized KPI definitions across stakeholders to reduce mismatched reporting and improve trust in numbers.",
                  "Optimized SQL queries and reporting logic to improve performance and stability for recurring dashboards.",
                  "Partnered with business teams to refine dashboards so insights were direct, usable, and not overcomplicated.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst Intern"
                company="Cognizant Technology Solutions"
                period="Jan 2022 – Jun 2022"
                bullets={[
                  "Supported senior analysts with data cleaning, ad hoc analysis, and building initial dashboard views.",
                  "Wrote and improved SQL queries for reporting needs, helping reduce manual spreadsheet work.",
                  "Assisted in documentation and metric definitions to keep reporting consistent across updates.",
                ]}
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mb-4">
            <h2 className="mb-3 text-xl font-semibold">Get in touch</h2>
            <p className="text-sm text-slate-300">
              I’m open to data analyst and data science opportunities. If you’re
              looking for someone who values strong analysis and clear
              communication, feel free to reach out.
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
          <footer className="mt-10 border-t border-slate-800 pt-4 text-xs text-slate-500">
            © {new Date().getFullYear()} Sri Sai Sindhu Penmetsa · Built with
            Next.js and Tailwind CSS.
          </footer>
        </div>
      </div>
    </main>
  );
}

/* Components */

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
