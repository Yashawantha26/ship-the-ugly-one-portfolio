export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white">
      <section className="mx-auto max-w-5xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          About Me
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Student. Developer. Builder.
        </h1>

        <div className="mt-8 grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">Who I Am</h2>

            <p className="mt-4 leading-8 text-slate-300">
              I&apos;m Yashawantha H M, a Computer Science Engineering student
              interested in software development, AI, and modern web
              technologies.
            </p>

            <p className="mt-4 leading-8 text-slate-300">
              I enjoy learning by building projects and turning ideas into
              useful applications.
            </p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <h2 className="text-2xl font-semibold">What I&apos;m Learning</h2>

            <ul className="mt-4 space-y-3 text-slate-300">
              <li>• React & Next.js</li>
              <li>• TypeScript & JavaScript</li>
              <li>• Python & Java</li>
              <li>• AI-assisted development</li>
              <li>• Git & GitHub</li>
              <li>• Full-stack web development</li>
            </ul>
          </div>
        </div>

        <div className="mt-8 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <h2 className="text-2xl font-semibold">My Approach</h2>

          <p className="mt-4 leading-8 text-slate-300">
            I&apos;m focused on shipping real projects, understanding the
            technology behind them, learning from feedback, and improving
            through continuous practice.
          </p>
        </div>
      </section>
    </main>
  );
}