const SECTIONS = ["about", "skills", "projects", "experience", "contact"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />

      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5">
            <span className="text-2xl font-bold tracking-wide">
              Sri Sai Sindhu Penmetsa
            </span>

            <div className="hidden gap-6 text-xs sm:flex">
              {SECTIONS.map((id) => (
                <a
                  key={id}
                  href={`#${id}`}
                  className="uppercase tracking-[0.25em] text-slate-400 hover:text-cyan-300"
                >
                  {id}
                </a>
              ))}
            </div>

            <a
              href="mailto:sindhuvarmaa2001@gmail.com"
              className="rounded-full border border-cyan-400/70 px-5 py-2 text-xs font-medium hover:bg-cyan-500/10"
            >
              Contact
            </a>
          </div>
        </nav>

        {/* CONTENT */}
        <div className="mx-auto max-w-6xl px-4 pb-24 pt-14">
          {/* ABOUT */}
          <section
            id="about"
            className="mb-24 flex flex-col gap-14 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
                Data Analytics · Business Intelligence · Machine Learning
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight">
                I’m Sindhu. I work with data to support better decisions.
              </h1>

              <p className="mt-6 text-base leading-relaxed text-slate-300">
                I am a data analyst with experience across analytics, reporting,
                and applied data science. My work typically starts with unclear
                questions and messy data and ends with structured insights that
                help teams understand what is happening and what to do next.
              </p>

              <p className="mt-4 text-base leading-relaxed text-slate-300">
                I have worked on customer behavior analysis, churn prediction,
                marketing performance tracking, forecasting problems, and
                operational reporting. I enjoy breaking down complex problems,
                validating assumptions with data, and communicating results in a
                clear and practical way.
              </p>

              <div className="mt-6 flex flex-wrap gap-3 text-sm text-slate-400">
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  New York · Open to relocation
                </span>
                <a
                  href="https://www.linkedin.com/in/sri-sai-sindhu-penmetsa-03b1511ab"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-3 py-1 hover:text-cyan-300"
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/SindhuVarmaa"
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-slate-700 px-3 py-1 hover:text-cyan-300"
                >
                  GitHub
                </a>
              </div>
            </div>

            {/* INITIALS */}
            <div className="flex justify-center sm:block">
              <div className="h-44 w-44 rounded-3xl border border-cyan-400/40 bg-slate-900 shadow-[0_0_55px_rgba(8,47,73,0.7)] flex items-center justify-center">
                <span className="text-5xl font-semibold">SP</span>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mb-24">
            <h2 className="mb-6 text-2xl font-semibold">Skills</h2>

            <div className="grid gap-6 md:grid-cols-2">
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
                title="Business Intelligence and Visualization"
                items={[
                  "Power BI",
                  "Tableau",
                  "Excel (Advanced)",
                  "KPI Design",
                  "Data Storytelling",
                ]}
              />
              <SkillCard
                title="Data Platforms and Storage"
                items={[
                  "Snowflake",
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Data Modeling",
                ]}
              />
              <SkillCard
                title="Pipelines and Tools"
                items={["ETL", "dbt", "Airflow", "AWS", "Docker", "Git"]}
              />
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mb-24">
            <h2 className="mb-8 text-2xl font-semibold">Projects</h2>

            <div className="grid gap-10 md:grid-cols-2">
              <ProjectCard
                title="Financial Forecasting and Scenario Analysis"
                description="Built an end-to-end forecasting workflow using historical financial data. I explored trends, seasonality, and anomalies, compared baseline methods with time-series models, and validated results using time-based splits. The goal was not only accuracy, but also interpretability, so the outputs could support planning and discussion rather than act as black-box predictions."
                tags={[
                  "Python",
                  "Time Series",
                  "Prophet / ARIMA",
                  "Model Validation",
                  "Visualization",
                ]}
              />

              <ProjectCard
                title="Marketing Funnel and Campaign Performance Analytics"
                description="Developed dashboards to analyze marketing campaigns, acquisition funnels, and conversion drop-offs. I cleaned and unified data from multiple sources, standardized KPI definitions, and designed visuals that answered where users drop off, what changed over time, and which campaigns performed best."
                tags={[
                  "Power BI",
                  "Tableau",
                  "SQL",
                  "Funnel Analysis",
                  "KPI Design",
                ]}
              />

              <ProjectCard
                title="Customer Churn Prediction and Segmentation"
                description="Created a churn prediction model combined with customer segmentation to identify at-risk users and understand behavioral differences across cohorts. I focused on feature importance and segment-level patterns so the analysis could guide targeted retention strategies rather than only predicting outcomes."
                tags={[
                  "Python",
                  "scikit-learn",
                  "XGBoost",
                  "Segmentation",
                  "Model Interpretation",
                ]}
              />

              <ProjectCard
                title="University Enrollment and Academic Reporting"
                description="Analyzed enrollment and academic performance datasets to support institutional planning. I standardized metrics, automated recurring reports, and built dashboards that made it easier to compare trends across semesters and departments with minimal manual effort."
                tags={[
                  "SQL",
                  "Reporting",
                  "Dashboards",
                  "Education Analytics",
                ]}
              />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="mb-24">
            <h2 className="mb-8 text-2xl font-semibold">Experience</h2>

            <div className="space-y-10 border-l border-slate-800 pl-6">
              <ExperienceItem
                role="Research Intern, Data Science"
                company="Binghamton University"
                period="July 2025 – Present"
                bullets={[
                  "Analyzing academic and institutional datasets to identify trends related to student outcomes and skill gaps.",
                  "Building repeatable data preparation workflows to reduce manual effort and ensure consistency across analyses.",
                  "Communicating findings through visual summaries used in faculty and administrative discussions.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst"
                company="Ulytics Inc"
                period="May 2024 – May 2025"
                bullets={[
                  "Designed and maintained dashboards tracking customer behavior, churn indicators, and operational performance.",
                  "Improved ETL workflows to reduce reporting delays and manual refresh effort.",
                  "Worked closely with stakeholders to translate open-ended business questions into structured analysis and actionable insights.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst"
                company="Cognizant Technology Solutions"
                period="October 2022 – July 2023"
                bullets={[
                  "Standardized KPI definitions across teams to eliminate inconsistencies in reporting.",
                  "Optimized SQL queries and reporting logic to improve dashboard performance and reliability.",
                  "Collaborated with business users to refine dashboards so insights were easier to interpret and act on.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst Intern"
                company="Cognizant Technology Solutions"
                period="March 2022 – July 2022"
                bullets={[
                  "Supported senior analysts with data cleaning, exploratory analysis, and reporting tasks.",
                  "Wrote SQL queries to support recurring reports and ad hoc analysis needs.",
                  "Assisted with documentation of metrics and reporting logic to improve consistency.",
                ]}
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact">
            <h2 className="mb-4 text-2xl font-semibold">Get in touch</h2>
            <p className="max-w-xl text-base text-slate-300">
              I’m open to data analyst and data science roles where I can work on
              meaningful problems and collaborate closely with teams. If you’d
              like to connect or discuss opportunities, feel free to reach out.
            </p>

            <div className="mt-6">
              <a
                href="mailto:sindhuvarmaa2001@gmail.com"
                className="rounded-full bg-cyan-500 px-6 py-3 text-sm font-medium text-slate-950 hover:bg-cyan-400"
              >
                Email me
              </a>
            </div>
          </section>

          {/* FOOTER */}
          <footer className="mt-16 border-t border-slate-800 pt-4 text-xs text-slate-500">
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
    <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-6">
      <p className="mb-3 text-lg font-semibold">{title}</p>
      <div className="flex flex-wrap gap-3 text-sm">
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
    <div className="rounded-2xl border border-slate-800 bg-slate-900/70 p-6">
      <h3 className="mb-3 text-xl font-semibold">{title}</h3>
      <p className="text-base leading-relaxed text-slate-300">{description}</p>
      <div className="mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700 px-3 py-1 text-xs"
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
    <div>
      <p className="text-xl font-semibold">
        {role} · <span className="text-slate-300">{company}</span>
      </p>
      <p className="mb-3 text-sm text-slate-400">{period}</p>
      <ul className="list-disc pl-6 space-y-2 text-base text-slate-300">
        {bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
    </div>
  );
}
