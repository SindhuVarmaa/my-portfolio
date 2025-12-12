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
                Data Analytics · Business Intelligence · Machine Learning
              </p>
              <h1 className="mt-3 text-3xl font-bold sm:text-4xl">
                Hi, I&apos;m Sindhu. I like turning messy data into clear stories.
              </h1>
              <p className="mt-4 text-sm leading-relaxed text-slate-300">
                I am a data analyst and future-facing data scientist who enjoys
                finding patterns, asking why things happen, and turning numbers
                into decisions that actually help people. I work end to end, from
                cleaning and joining data, to building models, to creating dashboards
                that non technical teams are comfortable using.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                Recently I have worked on churn, marketing performance, forecasting,
                and operational analytics. I care a lot about clarity, honest
                communication, and making data useful instead of just complicated.
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

           {/* profile photo */}
           <div className="flex justify-center sm:block">
              <img
                src="/sindhu-portfolio.jpg"
                alt="Sindhu profile photo"
                className="h-32 w-32 rounded-full object-cover border border-cyan-400/40 shadow-[0_0_50px_rgba(8,47,73,0.7)]"
              />
            </div>
          </section>

          {/* SKILLS */}
          <section id="skills" className="mb-14">
            <h2 className="mb-4 text-xl font-semibold">Skills</h2>
            <p className="mb-4 text-sm text-slate-300">
              I enjoy working across the whole data lifecycle, from raw files and SQL
              queries to polished dashboards and models that support real decisions.
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
                  "AWS (S3, EC2)",
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
                description="An end to end forecasting pipeline where I used time series models to understand how key financial variables move over time. The goal was not only accuracy, but also simple explanations of trends and scenarios for people who are not deep into statistics."
                tags={["Python", "Time series", "Prophet or ARIMA", "Visualization"]}
              />
              <ProjectCard
                title="Marketing Insights Dashboard"
                description="A set of dashboards that show campaign performance, customer behavior, and funnel metrics in one place. This replaced scattered spreadsheets and gave marketing teams a single source of truth for their KPIs."
                tags={["Tableau", "Power BI", "ETL", "KPI design"]}
              />
              <ProjectCard
                title="Churn Prediction and Segmentation"
                description="A machine learning project that highlights users who are likely to leave and shows how different customer groups behave. It helped focus retention work on the customers who needed the most attention."
                tags={["Python", "scikit-learn", "XGBoost", "Segmentation"]}
              />
              <ProjectCard
                title="University Data Insights"
                description="Analytics around academic and enrollment data to support planning and reporting. I worked on structuring the data, defining useful metrics, and making recurring reports faster and more reliable."
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
                  "Worked on research that used analytics to answer real academic questions, focusing on skill gaps and how course and program data is interpreted.",
                  "Designed simple and repeatable ways to process and explore data so the team could spend less time on manual work and more time on understanding results.",
                  "Helped turn complex datasets into visuals that faculty and administrators could use in conversations about curriculum and planning.",
                ]}
              />
              <ExperienceItem
                role="Data Analyst"
                company="Ulytics Inc"
                period="2024 to 2025"
                bullets={[
                  "Helped teams understand customer and performance data by automating workflows, building churn and performance analytics, and designing dashboards that were part of daily decision making.",
                  "Improved ETL processes so reporting moved from slow, manual work to a more automated and reliable flow, giving stakeholders faster access to the numbers they needed.",
                  "Turned open ended business questions into structured analytics that answered what happened and what might be a sensible next step.",
                ]}
              />
              <ExperienceItem
                role="Data Analyst"
                company="Cognizant Technology Solutions"
                period="2022 to 2023"
                bullets={[
                  "Supported enterprise clients by building reporting layers and standardizing KPIs so different teams used the same definitions and trusted the data.",
                  "Optimized SQL and reporting logic to reduce duplicate work and confusion about which numbers were correct.",
                  "Worked with non technical stakeholders to make dashboards and reports feel approachable and easy to use.",
                ]}
              />
              <ExperienceItem
                role="Analytics and Reporting Projects"
                company="Academic and Internship Work"
                period="Earlier experience"
                bullets={[
                  "Got hands on with the basics, including cleaning noisy datasets, running exploratory analysis, and creating simple dashboards to answer specific questions.",
                  "Learned the value of documentation, reproducible work, and clear explanations, not only writing code or queries.",
                  "Used this phase to build confidence with tools like Python, SQL, and BI platforms before moving into more complex projects.",
                ]}
              />
            </div>
          </section>

          {/* CONTACT */}
          <section id="contact" className="mb-4">
            <h2 className="mb-3 text-xl font-semibold">Get in touch</h2>
            <p className="text-sm text-slate-300">
              I am open to data roles, analytics projects, and collaborations. If you
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
                Or connect with me on{" "}
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
