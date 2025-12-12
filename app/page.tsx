import Image from "next/image";

const SECTIONS = ["about", "skills", "projects", "experience", "contact"];

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.18),_transparent_55%)]" />

      <div className="relative z-10">
        {/* NAVBAR */}
        <nav className="sticky top-0 z-20 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
          <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
            {/* BIGGER NAME */}
            <span className="text-lg font-bold tracking-wide sm:text-xl">
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

        {/* CONTENT */}
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-10">
          {/* ABOUT */}
          <section
            id="about"
            className="mb-16 flex flex-col gap-10 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Data Analytics · Business Intelligence · Machine Learning
              </p>

              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                Hi, I’m Sindhu. I help teams make sense of data.
              </h1>

              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                I’m a data analyst with a strong interest in data science, focused on
                understanding how data reflects real-world behavior. I enjoy taking
                messy, fragmented data and turning it into clear insights that
                support thoughtful decisions.
              </p>

              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                My experience spans customer analytics, forecasting, marketing
                performance, and operational reporting. I value clarity, accuracy,
                and communication just as much as technical depth.
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

            {/* PHOTO */}
            <div className="flex justify-center sm:block">
              <Image
                src="/sindhu-portfolio.jpg"
                alt="Sri Sai Sindhu Penmetsa"
                width={150}
                height={150}
                priority
                className="rounded-full object-cover border border-cyan-400/40 shadow-[0_0_45px_rgba(8,47,73,0.7)]"
              />
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mb-16">
            <h2 className="mb-4 text-xl font-semibold">Skills</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <SkillCard
                title="Programming & Analysis"
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
                title="Data Platforms & BI"
                items={[
                  "Snowflake",
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Power BI",
                  "Tableau",
                  "Excel",
                ]}
              />
              <SkillCard
                title="Data Engineering & Cloud"
                items={["ETL pipelines", "dbt", "Airflow", "AWS", "Docker", "Git"]}
              />
              <SkillCard
                title="Ways of Working"
                items={[
                  "Exploratory analysis",
                  "KPI definition",
                  "Stakeholder communication",
                  "Agile environments",
                ]}
              />
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mb-16">
            <h2 className="mb-6 text-xl font-semibold">Projects</h2>

            <div className="grid gap-5 md:grid-cols-2">
              <ProjectCard
                title="Financial Forecasting and Trend Analysis"
                description="Designed a full forecasting pipeline to analyze historical financial data, identify seasonality and long-term trends, and generate forward-looking projections. Compared multiple time-series approaches and focused on producing interpretable results that could support planning rather than black-box predictions."
                tags={[
                  "Python",
                  "Time series",
                  "Prophet",
                  "ARIMA",
                  "Visualization",
                ]}
              />

              <ProjectCard
                title="Marketing Performance and Funnel Analytics"
                description="Built interactive dashboards to track campaign performance, customer acquisition funnels, and conversion behavior. Centralized data from multiple sources and replaced spreadsheet-based reporting with a consistent, repeatable analytics workflow used by marketing teams."
                tags={["Power BI", "Tableau", "SQL", "KPI design"]}
              />

              <ProjectCard
                title="Customer Churn Prediction and Segmentation"
                description="Developed a churn prediction model combined with customer segmentation to understand which users were most at risk and why. Focused on feature interpretability and segment-level insights so results could directly inform retention strategies."
                tags={[
                  "Python",
                  "scikit-learn",
                  "XGBoost",
                  "Segmentation",
                ]}
              />

              <ProjectCard
                title="University Enrollment and Academic Insights"
                description="Analyzed academic and enrollment datasets to support institutional planning. Defined key metrics, improved data structure, and created dashboards that made trends easier to monitor across semesters and departments."
                tags={["SQL", "Reporting", "Dashboards", "Education data"]}
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
                period="2025"
                bullets={[
                  "Worked with academic datasets to analyze skill gaps and program outcomes, supporting data-driven discussions around curriculum improvement.",
                  "Built repeatable data processing workflows that reduced manual analysis and improved consistency across research iterations.",
                  "Presented findings through visual summaries that faculty could easily interpret and act on.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst"
                company="Ulytics Inc"
                period="2024 – 2025"
                bullets={[
                  "Designed and maintained analytics dashboards used by business teams to track customer behavior, churn, and operational performance.",
                  "Automated ETL workflows to improve data reliability and reduce turnaround time for reporting.",
                  "Translated ambiguous business questions into structured analyses with clear insights and recommendations.",
                ]}
              />

              <ExperienceItem
                role="Data Analyst"
                company="Cognizant Technology Solutions"
                period="2022 – 2023"
                bullets={[
                  "Supported enterprise reporting initiatives by standardizing KPIs and improving data quality across teams.",
                  "Optimized SQL queries and reporting logic to improve performance and reduce inconsistencies.",
                  "Collaborated closely with non-technical stakeholders to ensure dashboards were intuitive and actionable.",
                ]}
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact">
            <h2 className="mb-3 text-xl font-semibold">Get in touch</h2>
            <p className="text-sm text-slate-300">
              I’m open to data analyst and data science opportunities, as well as
              collaborative projects. If you’re looking for someone who values both
              analytical rigor and clear communication, feel free to reach out.
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
      <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
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
