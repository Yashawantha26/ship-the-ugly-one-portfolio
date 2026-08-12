export default function AIFrontendPage() {
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
          AI Frontend Projects
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          A collection of frontend experiments exploring AI-powered
          interfaces, structured tool results, accessibility, and modern
          application development.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The Goal</h2>

          <p className="mt-4 leading-8 text-slate-300">
            The goal was to understand how AI features can become useful
            product experiences instead of simply placing a chatbot inside a
            webpage.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">What I Built</h2>

          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• AI chat interface experiments</li>
            <li>• Structured tool-result components</li>
            <li>• Accessible interactive UI components</li>
            <li>• Responsive frontend layouts</li>
            <li>• AI-assisted development workflows</li>
          </ul>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Technologies</h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {["Next.js", "React", "TypeScript", "Tailwind CSS", "AI"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-slate-700 bg-slate-900 px-4 py-2 text-sm text-slate-300"
                >
                  {item}
                </span>
              )
            )}
          </div>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">What I Learned</h2>

          <p className="mt-4 leading-8 text-slate-300">
            These projects helped me understand component-based development,
            TypeScript, responsive UI design, accessibility, and how AI tools
            can support the development process.
          </p>
        </section>

        <section className="mt-10 rounded-2xl border border-cyan-400/20 bg-cyan-400/5 p-6">
          <h2 className="text-2xl font-semibold">Next Step</h2>

          <p className="mt-4 leading-8 text-slate-300">
            I plan to continue improving these experiments by connecting them
            to real data, improving user experience, and adding more useful
            AI-powered interactions.
          </p>
        </section>
      </article>
    </main>
  );
}