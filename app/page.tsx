export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <div className="max-w-5xl mx-auto px-4 py-10 sm:py-12">
        {/* Header */}
        <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-10">
          <div>
            <h1 className="text-3xl sm:text-4xl font-bold">
              Sri Sai Sindhu Penmetsa
            </h1>
            <p className="text-slate-400 text-sm sm:text-base mt-1">
              Data Analyst · Data Science & Analytics
            </p>
            <p className="text-slate-500 text-xs sm:text-sm mt-1">
              Binghamton, NY · Master&apos;s in Information Systems (Data Science Track)
            </p>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-2 text-xs sm:text-sm">
            <a
              href="mailto:sindhuvarmaa2001@gmail.com"
              className="inline-flex items-center justify-center rounded-xl px-4 py-2 border border-slate-700 hover:bg-slate-900 transition"
            >
              Contact Me
            </a>
            <div className="flex gap-3 text-slate-400">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-100"
              >
                LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="hover:text-slate-100"
              >
                GitHub
              </a>
            </div>
          </div>
        </header>

        {/* About */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">About</h2>
          <p className="text-slate-300 text-sm leading-relaxed">
            I&apos;m a data-focused professional with experience in analytics, BI,
            and data science. I build automated data pipelines, predictive models,
            and interactive dashboards that turn raw data into clear, actionable
            insights for stakeholders. I work with Python, SQL, Tableau, Power BI,
            and Snowflake to solve real business problems.
          </p>
        </section>

        {/* Skills */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
            <div className="border border-slate-800 rounded-xl p-4">
              <p className="font-medium mb-2">Programming & ML</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'Python',
                  'SQL',
                  'pandas',
                  'NumPy',
                  'scikit-learn',
                  'XGBoost',
                  'Prophet',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
            <div className="border border-slate-800 rounded-xl p-4">
              <p className="font-medium mb-2">Data & BI</p>
              <div className="flex flex-wrap gap-2">
                {[
                  'ETL Pipelines',
                  'Snowflake',
                  'PostgreSQL',
                  'MySQL',
                  'Tableau',
                  'Power BI',
                  'Looker',
                  'Excel (Advanced)',
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-slate-700 px-3 py-1"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Experience</h2>
          <div className="space-y-4 text-sm">
            <div className="border border-slate-800 rounded-xl p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <p className="font-medium">
                  Data Analyst · Ulytics Inc
                </p>
                <p className="text-xs text-slate-400">May 2024 – May 2025</p>
              </div>
              <p className="text-slate-300 text-xs mt-2">
                Worked on ETL workflows, KPI dashboards, and churn prediction models
                using Python, SQL, Snowflake, and Tableau to improve reporting speed
                and decision-making.
              </p>
            </div>

            <div className="border border-slate-800 rounded-xl p-4">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                <p className="font-medium">
                  Data Analyst · Cognizant Technology Solutions
                </p>
                <p className="text-xs text-slate-400">Oct 2022 – Jul 2023</p>
              </div>
              <p className="text-slate-300 text-xs mt-2">
                Automated reporting, built Tableau dashboards, and standardized data
                models to improve reliability and reduce manual work.
              </p>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section className="mb-10">
          <h2 className="text-xl font-semibold mb-3">Projects</h2>
          <div className="space-y-4 text-sm">
            <div className="border border-slate-800 rounded-xl p-4">
              <h3 className="font-semibold">Financial Forecasting Model</h3>
              <p className="text-slate-300 text-xs mt-1">
                Built forecasting models using Python and time-series techniques
                to predict financial trends and support data-driven decisions.
              </p>
            </div>
            <div className="border border-slate-800 rounded-xl p-4">
              <h3 className="font-semibold">Marketing Analytics Dashboard</h3>
              <p className="text-slate-300 text-xs mt-1">
                Designed interactive dashboards in Tableau/Power BI to monitor
                campaign performance and key business KPIs.
              </p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="mt-8 text-xs text-slate-500">
          © {new Date().getFullYear()} Sri Sai Sindhu Penmetsa
        </footer>
      </div>
    </main>
  );
}
