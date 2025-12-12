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
          {/* HERO / ABOUT SHORT */}
          <section
            id="about"
            className="mb-14 flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between"
          >
            <div className="max-w-xl">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-cyan-300">
                Data Analytics · BI · Machine Learning
              </p>
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                Hi, I&apos;m Sindhu — I turn messy data into clear stories.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                I&apos;m a data analyst and aspiring data scientist who enjoys
                finding patterns, asking &quot;why?&quot;, and turning numbers
                into decisions people can actually use. I work end-to-end — from
                cleaning and stitching data together, to building models, to
                designing dashboards that non-technical teams feel comfortable
                using.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Over the last few years I&apos;ve worked on churn, marketing
                performance, forecasting, and operational analytics. What I care
                about most is clarity, good communication, and making data
                useful rather than just impressive.
              </p>
              <div className="mt-5 flex flex-wrap items-center gap-3 text-xs text-slate-400">
                <span className="rounded-full border border-slate-700 px-3 py-1">
                  Binghamton, NY · Open to relocation
                </span>
                <a
                  href="www.linkedin.com/in/sri-sai-sindhu-penmetsa-03b1511ab"
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

            {/* avatar style initials */}
            <div className="flex justify-center sm:block">
              <div className="relative h-32 w-32 rounded-3xl border border-cyan-400/40 bg-slate-900 shadow-[0_0_50px_rgba(8,47,73,0.7)]">
                <div className="flex h-full w-full items-center justify-center text-3xl font-semibold tracking-tight">
                  SP
                </div>
              </div>
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mb-14">
            <h2 className="mb-4 text-xl font-semibold">Skills</h2>
            <p className="mb-4 text-sm text-slate-300">
              I like working across the whole data lifecycle — from raw files
              and SQL queries to polished dashboards and models.
            </p>
            <div className="grid gap-4 md:grid-cols-2">
              <SkillCard
                title="Programming & ML"
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
                title="Data & BI"
                items={[
                  "Snowflake",
                  "PostgreSQL",
                  "MySQL",
                  "MongoDB",
                  "Tableau",
                  "Power BI",
                  "Looker",
                  "Excel (Advanced)",
                ]}
              />
              <SkillCard
                title="Data Engineering & Cloud"
                items={[
                  "ETL Pipelines",
                  "dbt",
                  "Airflow",
                  "AWS (S3, EC2)",
                  "Docker",
                  "Git",
                ]}
              />
              <SkillCard
                title="How I Work"
                items={[
                  "KPI design & reporting",
                  "Exploratory analysis",
                  "Experimentation / A/B testing",
                  "Stakeholder storytelling",
                  "Agile · JIRA",
                ]}
              />
            </div>
          </section>

          {/* PROJECTS */}
          <section id="projects" className="mb-14">
            <div className="mb-4 flex items-center justify-between gap-2">
              <h2 className="text-xl font-semibold">Projects</h2>
              <span className="text-xs text-slate-400">
                A few things I&apos;ve built or explored
              </span>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <ProjectCard
                title="Financial Forecasting Model"
                description="An end-to-end forecasting pipeline where I experimented with time-series models to understand how key financial variables move over time. The focus wasn’t just accuracy, but also explaining trends and scenarios to non-technical stakeholders."
                tags={["Python", "Time Series", "Prophet / ARIMA", "Visualization"]}
              />
              <ProjectCard
                title="Marketing Insights Dashboard"
                description="A set of dashboards that highlight campaign performance, conversion behavior, and key funnel metrics. The goal was to replace scattered spreadsheets with one place marketing teams could visit to see what’s working."
                tags={["Tableau", "Power BI", "ETL", "KPI Design"]}
              />
              <ProjectCard
                title="Churn Prediction & Segmentation"
                description="A machine learning project built to flag users likely to churn and understand how different segments behave. It helped direct retention efforts toward the customers who needed attention the most."
                tags={["Python", "scikit-learn", "XGBoost", "Segmentation"]}
              />
              <ProjectCard
                title="University Data Insights"
                description="Analytics around academic and enrollment data built to support academic planning. I worked on structuring data, defining useful metrics, and making reporting faster and more repeatable."
                tags={["SQL", "Reporting", "Dashboards", "Education Data"]}
              />
            </div>
          </section>

          {/* EXPERIENCE */}
          <section id="experience" className="mb-14">
            <h2 className="mb-4 text-xl font-semibold">Experience</h2>
            <div className="space-y-4 border-l border-slate-800 pl-4">
              <ExperienceItem
                role="Research Intern — Data Science"
                company="Binghamton University"
                period="2025"
                bullets={[
                  "Worked on research that combined analytics with real academic impact, focusing on understanding skill gaps and improving how course and program data is analyzed.",
                  "Designed automated ways to process and explore data so the team spent less time on manual work and more time on interpretation.",
                  "Helped turn complex datasets into visual stories that faculty and administrators could easily explore.",
                ]}
              />
              <ExperienceItem
                role="Data Analyst"
                company="Ulytics Inc"
                period="2024 – 2025"
                bullets={[
                  "Helped teams understand their customers better by automating data workflows, building churn and performance analyses, and designing dashboards used in day-to-day decision making.",
                  "Streamlined ETL processes so reporting went from slow and manual to fast and mostly automated, giving stakeholders quicker access to the metrics they cared about.",
                  "Focused on turning loose business questions into clear, structured analytics that answered not just 'what happened' but also 'what should we do next?'.",
                ]}
              />
              <ExperienceItem
                role="Data Analyst"
                company="Cognizant Technology Solutions"
                period="2022 – 2023"
                bullets={[
                  "Supported enterprise clients by building reliable reporting layers and standardizing KPIs across teams so everyone was working from the same numbers.",
                  "Optimized SQL and reporting logic to reduce confusion, duplicate work, and conflicting versions of the truth.",
                  "Collaborated with non-technical stakeholders to make dashboards and reports feel approachable, not intimidating.",
                ]}
              />
              <ExperienceItem
                role="Early Analytics & Reporting Work"
                company="Academic & Internship Projects"
                period="Earlier Experience"
                bullets={[
                  "Got hands-on with the basics: cleaning noisy datasets, running exploratory analysis, and creating simple dashboards to answer concrete questions.",
                  "Learned the importance of documentation, reproducibility, and communication, not just code or queries.",
                  "Used this phase to build confidence with tools like Python, SQL, and BI platforms before taking on more complex projects.",
                ]}
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mb-4">
            <h2 className="mb-3 text-xl font-semibold">Get in Touch</h2>
            <p className="text-sm text-slate-300">
              I&apos;m always happy to talk about data roles, analytics projects,
              or collaborations. If you&apos;re looking for someone who enjoys
              both the technical side and the storytelling side of data, feel
              free to reach out.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-3 text-sm">
              <a
                href="mailto:sindhuvarmaa2001@gmail.com"
                className="rounded-full bg-cyan-500 px-4 py-2 text-xs font-medium text-slate-950 shadow hover:bg-cyan-400"
              >
                Email me
              </a>
              <span className="text-xs text-slate-400">
                Or connect with me on{" "}
                <a
                  href="https://www.linkedin.com/"
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
            Next.js &amp; Tailwind CSS.
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
