"use client";

import { TypeAnimation } from "react-type-animation";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGraduationCap,
} from "react-icons/fa";

/* -------------------- CONFIG -------------------- */

const SECTIONS = [
  "home",
  "about",
  "education",
  "skills",
  "experience",
  "projects",
  "contact",
];

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

const SKILLS = [
  { group: "Programming", items: ["Python", "SQL", "R"] },
  {
    group: "Databases & Cloud",
    items: ["Snowflake", "PostgreSQL", "MySQL", "AWS"],
  },
  {
    group: "BI & Analytics",
    items: ["Power BI", "Tableau", "Excel (Advanced)", "Google Analytics"],
  },
  {
    group: "Machine Learning",
    items: ["scikit-learn", "XGBoost", "Pandas", "NumPy"],
  },
  {
    group: "Workflow & Tools",
    items: ["ETL Pipelines", "dbt", "Airflow", "Docker", "Git"],
  },
];

const EXPERIENCE = [
  {
    period: "Jul 2025 – Present",
    role: "Research Intern, Data Science",
    company: "Binghamton University",
    location: "Binghamton, NY",
    badge: "Curriculum & analytics research",
    impact:
      "Improved data reliability and enabled curriculum insights for academic planning.",
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
    impact:
      "Faster reporting and improved customer targeting through ML-driven insights.",
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
    impact:
      "Improved speed, accuracy, and consistency of cross-team reporting.",
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
    impact:
      "Supported reporting delivery and data quality improvements.",
    bullets: [
      "Assisted with data cleaning, exploratory analysis, and preparing datasets for dashboards.",
      "Wrote SQL queries for ad-hoc analysis and recurring reports.",
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
      "Built an end-to-end analytics pipeline from CRM exports to Tableau dashboards. Defined seven core KPIs to monitor campaign performance and customer behavior. Automated data refresh so reporting cycles dropped from days to about one hour.",
    tags: ["Tableau", "SQL", "Python", "ETL", "KPI Reporting"],
    github: "https://github.com/SindhuVarmaa",
  },
  {
    title: "Financial Forecasting Platform",
    subtitle: "Time-series forecasting for planning",
    desc:
      "Developed forecasting pipelines using Prophet to generate currency and financial projections. Integrated results into Power BI for interactive scenario analysis, reducing manual Excel forecasting effort by about 75 percent.",
    tags: ["Python", "Prophet", "Power BI", "Time Series"],
    github: "https://github.com/SindhuVarmaa",
  },
  {
    title: "Customer Churn Prediction",
    subtitle: "ML-based retention insights",
    desc:
      "Built churn prediction models using scikit-learn and XGBoost. Combined modeling with cohort and feature analysis to explain why customers churn and help teams focus retention efforts where they matter most.",
    tags: ["Python", "XGBoost", "scikit-learn", "Customer Analytics"],
    github: "https://github.com/SindhuVarmaa",
  },
];

/* -------------------- PAGE -------------------- */

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_top,_rgba(56,189,248,0.16),_transparent_55%)]" />

      {/* NAV */}
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
        </div>
      </nav>

      <div className="mx-auto max-w-6xl px-4 pb-20 pt-10">
        {/* HERO */}
        <section id="home" className="grid gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold sm:text-5xl">
              Sri Sai Sindhu Penmetsa
            </h1>
            <div className="mt-4 text-lg text-slate-300">
              <TypeAnimation
                sequence={[
                  "Data Analyst",
                  1200,
                  "BI Developer",
                  1200,
                  "Aspiring Data Scientist",
                  1200,
                ]}
                speed={55}
                repeat={Infinity}
              />
            </div>
            <p className="mt-5 text-base text-slate-300">
              I specialize in turning complex data into clear insights through
              analytics, reporting, and practical machine learning.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
            <div className="flex items-center gap-4">
              <div className="h-16 w-16 rounded-2xl border border-cyan-400/40 bg-slate-950 flex items-center justify-center text-2xl font-bold">
                SP
              </div>
              <div>
                <p className="text-sm">New York, USA</p>
                <p className="text-sm">sindhuvarmaa2001@gmail.com</p>
              </div>
            </div>
            <div className="mt-6 grid grid-cols-3 gap-3">
              {STATS.map((s) => (
                <div key={s.label} className="rounded-xl border border-slate-800 p-3 text-center">
                  <p className="text-2xl font-bold text-cyan-300">{s.value}</p>
                  <p className="text-xs text-slate-400">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* EDUCATION */}
        <section id="education" className="mt-20">
          <SectionTitle title="Education" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {EDUCATION.map((e) => (
              <Card key={e.degree}>
                <p className="text-lg font-semibold">{e.degree}</p>
                <p className="text-sm text-slate-300">{e.school}</p>
                <p className="text-sm text-slate-400">{e.period}</p>
                <ul className="mt-3 list-disc pl-5 text-base text-slate-300">
                  {e.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* EXPERIENCE */}
        <section id="experience" className="mt-20">
          <SectionTitle title="Experience" />
          <div className="mt-6 space-y-6">
            {EXPERIENCE.map((e) => (
              <Card key={e.role}>
                <p className="text-xl font-bold">
                  {e.role} · <span className="text-slate-300">{e.company}</span>
                </p>
                <p className="text-sm text-slate-400">{e.period}</p>
                <ul className="mt-4 list-disc pl-5 text-base text-slate-300">
                  {e.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section id="projects" className="mt-20">
          <SectionTitle title="Projects" />
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            {PROJECTS.map((p) => (
              <Card key={p.title}>
                <p className="text-xl font-bold">{p.title}</p>
                <p className="text-sm text-slate-300">{p.subtitle}</p>
                <p className="mt-3 text-base text-slate-300">{p.desc}</p>
                <a
                  href={p.github}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-cyan-300"
                >
                  View on GitHub →
                </a>
              </Card>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="mt-20">
          <SectionTitle title="Contact" />
          <p className="text-base text-slate-300">
            Open to data analyst and data science opportunities.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="mailto:sindhuvarmaa2001@gmail.com"><FaEnvelope /></a>
            <a href="https://github.com/SindhuVarmaa"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/sri-sai-sindhu-penmetsa-03b1511ab"><FaLinkedin /></a>
          </div>
        </section>
      </div>
    </main>
  );
}

/* -------------------- UI -------------------- */

function SectionTitle({ title }: { title: string }) {
  return <h2 className="text-3xl font-bold">{title}</h2>;
}

function Card({ children }: { children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-slate-800 bg-slate-900/50 p-6">
      {children}
    </div>
  );
}
