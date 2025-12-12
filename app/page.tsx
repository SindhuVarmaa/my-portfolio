"use client";

import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
  FaPython,
  FaDatabase,
  FaAws,
  FaSnowflake,
  FaChartBar,
  FaChartLine,
  FaFileExcel,
  FaCogs,
  FaCode,
  FaTable,
  FaRobot,
  FaDocker,
  FaGitAlt,
  FaStream,
} from "react-icons/fa";

/* -------------------- CONFIG -------------------- */

const SECTIONS = ["home", "about", "education", "skills", "experience", "projects", "contact"];

const STATS = [
  { value: "2+", label: "Years of Experience" },
  { value: "10+", label: "Dashboards & Reports" },
  { value: "5+", label: "End-to-End Projects" },
];

const EDUCATION = [
  {
    degree: "Master’s in Information Systems (Data Science Track)",
    school: "Binghamton University, SUNY",
    period: "Aug 2023 – May 2025",
    location: "Binghamton, NY",
    highlights: [
      "Focused on data analytics, machine learning, and business intelligence for real-world decision making.",
      "Hands-on projects involving forecasting, churn analysis, KPI dashboards, and data pipelines.",
      "Relevant coursework: Data Mining, Machine Learning, Database Systems, Business Analytics, Data Visualization.",
    ],
  },
  {
    degree: "Bachelor’s in Electrical and Electronics Engineering",
    school: "Jawaharlal Nehru Technological University",
    period: "Jul 2018 – Jun 2022",
    location: "Hyderabad, India",
    highlights: [
      "Built strong analytical and problem-solving foundations through engineering coursework.",
      "Early exposure to programming, databases, reporting, and structured data analysis.",
    ],
  },
];

const SKILL_CARDS: Array<{ title: string; icon: React.ReactNode; items: string[] }> = [
  { title: "Programming", icon: <FaCode />, items: ["Python", "SQL", "R"] },
  { title: "Databases", icon: <FaDatabase />, items: ["PostgreSQL", "MySQL", "Snowflake", "Data Modeling"] },
  { title: "Cloud", icon: <FaAws />, items: ["AWS (Basics)", "Cloud Storage", "Data Warehousing"] },
  { title: "BI & Analytics", icon: <FaChartBar />, items: ["Tableau", "Power BI", "KPI Reporting", "Dashboard Design"] },
  { title: "Data Science / ML", icon: <FaRobot />, items: ["scikit-learn", "XGBoost", "Pandas", "NumPy"] },
  { title: "Workflow & Tools", icon: <FaCogs />, items: ["ETL Pipelines", "Automation", "Git", "Docker", "Airflow/dbt (Exposure)"] },
];

const EXPERIENCE = [
  {
    period: "Jul 2025 – Present",
    role: "Research Intern, Data Science",
    company: "Binghamton University",
    location: "Binghamton, NY",
    badge: "Curriculum & analytics research",
    impact: "Improved data reliability and enabled curriculum insights for academic planning.",
    bullets: [
      "Designed Python and SQL based ETL workflows to process academic and program datasets, reducing manual analysis effort by about 30 percent.",
      "Performed TF-IDF and KMeans based skill-gap analysis across 200+ courses to identify curriculum improvement opportunities.",
      "Built Tableau and Power BI dashboards that presented trends in enrollment, outcomes, and course coverage for faculty and administrators.",
      "Standardized data definitions and validation checks to ensure analysis remained consistent across semesters.",
    ],
    stack: ["Python", "SQL", "ETL", "TF-IDF", "KMeans", "Tableau", "Power BI"],
  },
  {
    period: "May 2024 – May 2025",
    role: "Data Analyst",
    company: "Ulytics Inc",
    location: "USA",
    badge: "Automation & churn analytics",
    impact: "Faster reporting and improved customer targeting through ML-driven insights.",
    bullets: [
      "Automated ETL workflows using Python, SQL, and Snowflake, cutting manual reporting effort by about 40 percent.",
      "Built churn prediction models using XGBoost to identify at-risk customers and support targeted retention strategies.",
      "Developed KPI dashboards in Tableau that reduced reporting turnaround from hours to minutes.",
      "Worked closely with stakeholders to convert business questions into measurable metrics and clear recommendations.",
    ],
    stack: ["Python", "SQL", "Snowflake", "XGBoost", "Tableau"],
  },
  {
    period: "Oct 2022 – Jul 2023",
    role: "Data Analyst",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    badge: "Enterprise reporting",
    impact: "Improved speed, accuracy, and consistency of cross-team reporting.",
    bullets: [
      "Automated cross-department reporting pipelines using SQL and Python, reducing preparation time by about 40 percent.",
      "Built Tableau dashboards tracking KPIs across multiple business units for leadership reviews.",
      "Standardized KPI definitions and reporting logic to eliminate conflicting metrics across teams.",
      "Partnered with non-technical stakeholders to ensure insights were clear, actionable, and trusted.",
    ],
    stack: ["SQL", "Python", "Tableau", "Data Modeling"],
  },
  {
    period: "Mar 2022 – Jul 2022",
    role: "Data Analyst Intern",
    company: "Cognizant Technology Solutions",
    location: "Hyderabad, India",
    badge: "Analytics foundations",
    impact: "Supported reporting delivery and data quality improvements.",
    bullets: [
      "Assisted with data cleaning, exploratory analysis, and preparing datasets for dashboards.",
      "Wrote SQL queries for ad hoc analysis and recurring reports.",
      "Helped document metric definitions and reporting assumptions to maintain consistency.",
    ],
    stack: ["SQL", "Excel", "Reporting"],
  },
];

const PROJECTS = [
  {
    title: "Marketing Insights Dashboard",
    subtitle: "CRM to Tableau reporting pipeline",
    desc:
      "Built an end-to-end analytics pipeline from CRM exports to dashboards. Defined seven core KPIs to monitor campaign performance and customer behavior. Automated refresh so reporting cycles dropped from days to about one hour.",
    tags: ["Tableau", "SQL", "Python", "ETL", "KPI Reporting"],
    github: "https://github.com/SindhuVarmaa",
  },
  {
    title: "Financial Forecasting Platform",
    subtitle: "Time-series forecasting for planning",
    desc:
      "Developed forecasting pipelines to generate projections and integrate results into dashboards for scenario analysis, reducing manual Excel forecasting effort by about 75 percent.",
    tags: ["Python", "Time Series", "Power BI", "Visualization"],
    github: "https://github.com/SindhuVarmaa",
  },
  {
    title: "Customer Churn Prediction",
    subtitle: "ML-based retention insights",
    desc:
      "Built churn prediction models and combined modeling with cohort + driver analysis to explain churn reasons and help teams focus retention efforts where they matter most.",
    tags: ["Python", "XGBoost", "scikit-learn", "Customer Analytics"],
    github: "https://github.com/SindhuVarmaa",
  },
];

/* -------------------- PAGE -------------------- */

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%)]" />

      <nav className="sticky top-0 z-30 border-b border-slate-800 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="#home" className="text-xl font-bold">
            Sri Sai Sindhu Penmetsa
          </a>

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
            className="rounded-full border border-cyan-400/70 px-4 py-2 text-xs font-medium hover:bg-cyan-500/10"
          >
            Contact
          </a>
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10">
        <section id="home" className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">
              Hello, my name is
            </p>

            <h1 className="mt-3 text-4xl font-extrabold leading-tight sm:text-5xl">
              Sri Sai Sindhu Penmetsa
            </h1>

            <div className="mt-4 text-lg text-slate-300">
              I’m a{" "}
              <span className="font-semibold text-cyan-300">
                <TypeAnimation
                  sequence={["Data Analyst", 1200, "BI Developer", 1200, "Aspiring Data Scientist", 1200]}
                  speed={55}
                  repeat={Infinity}
                />
              </span>
            </div>

            <p className="mt-5 text-base leading-relaxed text-slate-300">
              I specialize in turning complex data into clear insights through analytics, reporting, and practical machine
              learning. I focus on clean metrics, clear storytelling, and dashboards teams trust.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="rounded-full bg-cyan-500 px-5 py-2 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
              >
                View Projects
              </a>

              <a
                href="https://github.com/SindhuVarmaa"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2 text-sm hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaGithub /> GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/sri-sai-sindhu-penmetsa-03b1511ab"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-5 py-2 text-sm hover:border-cyan-400 hover:text-cyan-300"
              >
                <FaLinkedin /> LinkedIn
              </a>
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6 shadow-[0_0_60px_rgba(8,47,73,0.55)]">
            <div className="flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-cyan-400/40 bg-slate-950 text-2xl font-bold">
                SP
              </div>
              <div>
                <p className="flex items-center gap-2 text-sm text-slate-300">
                  <FaMapMarkerAlt /> New York, USA
                </p>
                <p className="mt-1 flex items-center gap-2 text-sm text-slate-300">
                  <FaEnvelope /> sindhuvarmaa2001@gmail.com
                </p>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-800 bg-slate-950/30 p-3 text-center">
                  <p className="text-2xl font-bold text-cyan-300">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="about" className="mt-20">
          <SectionTitle
            eyebrow="Professional summary"
            title="About"
            subtitle="I enjoy building analytics that are both accurate and easy to use."
          />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-base leading-relaxed text-slate-300">
                I work across the full data lifecycle: understanding the business question, cleaning and shaping data,
                defining the right metrics, and presenting results through dashboards and analysis.
              </p>
            </Card>
            <Card>
              <p className="text-base leading-relaxed text-slate-300">
                My approach blends technical execution with communication. I care about making insights actionable, not
                just “interesting,” and helping teams trust the numbers.
              </p>
            </Card>
          </div>
        </section>

        <section id="education" className="mt-20">
          <SectionTitle
            eyebrow="Academic foundation"
            title="Education"
            subtitle="Programs and coursework that shaped my analytics and data science skills."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {EDUCATION.map((e) => (
              <Card key={e.degree}>
                <div className="flex items-start gap-3">
                  <div className="mt-1 text-cyan-300">
                    <FaGraduationCap />
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-slate-100">{e.degree}</p>
                    <p className="text-sm text-slate-300">{e.school}</p>
                    <p className="mt-1 text-sm text-slate-400">
                      {e.period} · {e.location}
                    </p>
                  </div>
                </div>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-slate-300">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        <section id="skills" className="mt-20">
          <SectionTitle
            eyebrow="Technical toolkit"
            title="Skills"
            subtitle="A visual snapshot of my core tools and strengths."
          />

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SKILL_CARDS.map((card) => (
              <div
                key={card.title}
                className="group rounded-3xl border border-slate-800 bg-slate-900/50 p-6 transition hover:border-cyan-400/60 hover:bg-slate-900/70"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-800 bg-slate-950/40 text-cyan-300 text-xl">
                    {card.icon}
                  </div>
                  <p className="text-lg font-semibold text-slate-100">{card.title}</p>
                </div>

                <div className="mt-4 flex flex-wrap gap-2">
                  {card.items.map((i) => (
                    <span
                      key={i}
                      className="rounded-full border border-slate-700 bg-slate-950/30 px-3 py-1 text-sm text-slate-200"
                    >
                      {i}
                    </span>
                  ))}
                </div>

                <div className="mt-5 h-px w-full bg-slate-800/70" />
                <div className="mt-4 flex flex-wrap items-center gap-3 text-slate-400">
                  <MiniIconRow title={card.title} />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="mt-20">
          <SectionTitle
            eyebrow="Career journey"
            title="Experience"
            subtitle="Roles focused on reporting, automation, analytics, and machine learning."
          />
          <div className="mt-8 space-y-6">
            {EXPERIENCE.map((e) => (
              <Card key={e.role + e.period}>
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <p className="text-xl font-bold text-slate-100">
                      {e.role} <span className="text-slate-300">· {e.company}</span>
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      {e.period} · {e.location}
                    </p>
                  </div>

                  <span className="rounded-full border border-cyan-400/40 bg-slate-950/40 px-4 py-1 text-xs text-cyan-200">
                    {e.badge}
                  </span>
                </div>

                <p className="mt-4 text-sm text-slate-300">{e.impact}</p>

                <ul className="mt-4 list-disc space-y-2 pl-5 text-base text-slate-300">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {e.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-700 bg-slate-950/30 px-3 py-1 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        <section id="projects" className="mt-20">
          <SectionTitle
            eyebrow="Featured work"
            title="Projects"
            subtitle="Selected projects showing end-to-end analysis, modeling, and dashboarding."
          />
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <Card key={p.title}>
                <p className="text-2xl font-bold text-slate-100">{p.title}</p>
                <p className="mt-1 text-sm text-slate-300">{p.subtitle}</p>
                <p className="mt-4 text-base leading-relaxed text-slate-300">{p.desc}</p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {p.tags.map((t) => (
                    <span
                      key={t}
                      className="rounded-full border border-slate-700 bg-slate-950/30 px-3 py-1 text-xs text-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-5 inline-flex items-center gap-2 text-cyan-300 hover:underline"
                >
                  <FaGithub /> View on GitHub
                </a>
              </Card>
            ))}
          </div>
        </section>

        <section id="contact" className="mt-20">
          <SectionTitle
            eyebrow="Let’s connect"
            title="Contact"
            subtitle="Reach out for roles, collaborations, or project discussions."
          />

          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <Card>
              <p className="text-lg font-semibold text-slate-100">
                Let’s talk data, dashboards, and impactful analytics.
              </p>

              <p className="mt-3 text-base leading-relaxed text-slate-300">
                I’m currently open to Data Analyst, BI, and entry level Data Science roles. If you have an opportunity or
                want to collaborate on a project, feel free to reach out.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:sindhuvarmaa2001@gmail.com?subject=Opportunity%20for%20Sindhu%20Penmetsa"
                  className="inline-flex items-center gap-2 rounded-full bg-cyan-500 px-6 py-3 text-sm font-semibold text-slate-950 hover:bg-cyan-400"
                >
                  <FaEnvelope />
                  Email Me
                </a>

                <a
                  href="https://www.linkedin.com/in/sri-sai-sindhu-penmetsa-03b1511ab"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-300"
                >
                  <FaLinkedin />
                  LinkedIn
                </a>

                <a
                  href="https://github.com/SindhuVarmaa"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-slate-700 px-6 py-3 text-sm font-semibold text-slate-100 hover:border-cyan-400 hover:text-cyan-300"
                >
                  <FaGithub />
                  GitHub
                </a>
              </div>
            </Card>

            <Card>
              <p className="text-lg font-semibold text-slate-100">Quick details</p>

              <div className="mt-4 space-y-3 text-base text-slate-300">
                <p className="flex items-center gap-3">
                  <FaMapMarkerAlt className="text-cyan-300" />
                  New York, USA (open to relocation)
                </p>

                <p className="flex items-center gap-3">
                  <FaEnvelope className="text-cyan-300" />
                  <a href="mailto:sindhuvarmaa2001@gmail.com" className="hover:text-cyan-300">
                    sindhuvarmaa2001@gmail.com
                  </a>
                </p>
              </div>

              <div className="mt-6 rounded-2xl border border-slate-800 bg-slate-950/40 p-4">
                <p className="text-sm font-semibold text-slate-200">Available for</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {["Data Analyst", "BI Developer", "Analytics", "Data Science"].map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-700 bg-slate-950/40 px-3 py-1 text-sm text-slate-200"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          </div>

          <footer className="mt-16 border-t border-slate-800 pt-6 text-sm text-slate-500">
            © {new Date().getFullYear()} Sri Sai Sindhu Penmetsa
          </footer>
        </section>
      </div>
    </main>
  );
}

/* -------------------- UI -------------------- */

function SectionTitle({
  eyebrow,
  title,
  subtitle,
}: {
  eyebrow: string;
  title: string;
  subtitle: string;
}) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-cyan-300">{eyebrow}</p>
      <h2 className="mt-2 text-3xl font-bold text-slate-100">{title}</h2>
      <p className="mt-3 text-base text-slate-300">{subtitle}</p>
    </div>
  );
}

function Card({ children }: { children: React.ReactNode }) {
  return <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">{children}</div>;
}

function MiniIconRow({ title }: { title: string }) {
  if (title === "Programming") {
    return (
      <>
        <FaPython className="text-lg" />
        <FaCode className="text-lg" />
        <FaStream className="text-lg" />
      </>
    );
  }
  if (title === "Databases") {
    return (
      <>
        <FaDatabase className="text-lg" />
        <FaTable className="text-lg" />
        <FaSnowflake className="text-lg" />
      </>
    );
  }
  if (title === "Cloud") {
    return (
      <>
        <FaAws className="text-lg" />
      </>
    );
  }
  if (title === "BI & Analytics") {
    return (
      <>
        <FaChartBar className="text-lg" />
        <FaChartLine className="text-lg" />
        <FaFileExcel className="text-lg" />
      </>
    );
  }
  if (title === "Data Science / ML") {
    return (
      <>
        <FaRobot className="text-lg" />
      </>
    );
  }
  return (
    <>
      <FaGitAlt className="text-lg" />
      <FaDocker className="text-lg" />
      <FaCogs className="text-lg" />
    </>
  );
}
