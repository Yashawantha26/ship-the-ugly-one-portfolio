export default function LifeSaverAIPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white">
      <article className="mx-auto max-w-4xl">
        <a
          href="/projects"
          className="text-sm font-semibold text-cyan-400 hover:text-cyan-300"
        >
          ← Back to Projects
        </a>

        <p className="mt-10 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Case Study
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          LifeSaver AI
        </h1>

        <p className="mt-6 text-lg leading-8 text-slate-300">
          An AI-powered emergency assistance concept focused on helping users
          access useful emergency information quickly during critical
          situations.
        </p>

        <section className="mt-12">
          <h2 className="text-2xl font-semibold">The Problem</h2>

          <p className="mt-4 leading-8 text-slate-300">
            During an emergency, people may struggle to find the right
            information quickly. The idea behind LifeSaver AI is to create a
            simple interface that can guide users toward relevant emergency
            resources and actions.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">The Approach</h2>

          <p className="mt-4 leading-8 text-slate-300">
            The project explores how AI and web technologies can be combined
            to provide a focused and easy-to-use emergency assistance
            experience.
          </p>
        </section>

        <section className="mt-10">
          <h2 className="text-2xl font-semibold">Technologies</h2>

          <div className="mt-4 flex flex-wrap gap-3">
            {["AI", "Python", "Web Development"].map((item) => (
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
            This project helped me think about designing technology around a
            real user problem rather than focusing only on the technology
            itself.
          </p>
        </section>
      </article>
    </main>
  );
}