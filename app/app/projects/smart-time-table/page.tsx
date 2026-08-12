export default function SmartTimeTablePage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white">
      <article className="mx-auto max-w-4xl">
        <a
          href="/projects"
          className="text-sm font-semibold text-cyan-400 transition hover:text-cyan-300"
        >
          ← Back to Projects
        </a>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Case Study
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Smart Time Table
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          A student-focused web application designed to make class schedules,
          attendance tracking, and examination information easier to manage.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The Problem</h2>

          <p className="mt-4 leading-8 text-slate-300">
            Students often need to check different sources for their daily
            timetable, attendance information, and examination schedules.
            Keeping everything organized in one simple application can make
            this information easier to access.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">The Solution</h2>

          <p className="mt-4 leading-8 text-slate-300">
            Smart Time Table brings important academic information into one
            interface. The project includes timetable management, attendance
            tracking, and examination timetable features.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Key Features</h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Daily class timetable</li>
            <li>• Attendance tracking</li>
            <li>• Examination timetable</li>
            <li>• Simple student-focused interface</li>
            <li>• Easy access to academic information</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Technologies</h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {["Python", "Flask", "HTML", "CSS"].map((item) => (
              <span
                key={item}
                className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
              >
                {item}
              </span>
            ))}
          </div>
        </section>

        <section className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <h2 className="text-2xl font-semibold">What I Learned</h2>

          <p className="mt-4 leading-8 text-slate-300">
            This project helped me understand how to turn a common student
            problem into a practical web application and strengthened my
            understanding of Flask, frontend development, and application
            structure.
          </p>
        </section>
      </article>
    </main>
  );
}