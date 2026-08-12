export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-950 px-6 pb-20 pt-32 text-white">
      <section className="mx-auto max-w-4xl">
        <p className="text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
          Contact
        </p>

        <h1 className="mt-4 text-4xl font-bold sm:text-5xl">
          Let&apos;s connect.
        </h1>

        <p className="mt-5 max-w-2xl leading-8 text-slate-300">
          I&apos;m always interested in connecting with people interested in
          technology, software development, AI, and learning.
        </p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <a
            href="mailto:yashuhmy@gmail.com"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/50"
          >
            <p className="text-sm text-slate-400">Email</p>
            <p className="mt-2 font-semibold text-cyan-400">
              yashuhmy@gmail.com
            </p>
          </a>

          <a
            href="https://github.com/Yashawantha26"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/50"
          >
            <p className="text-sm text-slate-400">GitHub</p>
            <p className="mt-2 font-semibold text-cyan-400">
              github.com/Yashawantha26
            </p>
          </a>

          <a
            href="https://www.linkedin.com/in/yashawantha-h-m-48813833a/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-slate-800 bg-slate-900 p-6 transition hover:border-cyan-400/50"
          >
            <p className="text-sm text-slate-400">LinkedIn</p>
            <p className="mt-2 font-semibold text-cyan-400">
              Yashawantha H M
            </p>
          </a>

          <div className="rounded-2xl border border-slate-800 bg-slate-900 p-6">
            <p className="text-sm text-slate-400">Focus</p>
            <p className="mt-2 font-semibold text-white">
              Web Development & AI
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}