import Head from 'next/head'

export default function Home() {
  return (
    <>
      <Head>
        <title>Why I Want to Join Cursor</title>
        <meta name="description" content="A dev’s pitch to join Cursor." />
      </Head>
      <main className="min-h-screen bg-black text-white p-8 font-mono">
        <div className="max-w-2xl mx-auto space-y-10">
          <h1 className="text-4xl font-bold">// why I want to join cursor</h1>

          <section>
            <h2 className="text-2xl mb-2">// my story</h2>
            <p>
              I discovered Cursor while searching for AI tools that feel native to how I code.  
              Most tools felt clunky. Cursor felt like it was designed by devs who actually code.
            </p>
          </section>

          <section>
            <h2 className="text-2xl mb-2">// what it gets right</h2>
            <ul className="list-disc pl-6 space-y-1">
              <li>Context‑aware inline suggestions</li>
              <li>No tab‑switching — everything stays in flow</li>
              <li>Feels like a tool made by devs for devs</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl mb-2">// what I'd love to build</h2>
            <p>
              Cursor is already great — I’d love to work on “timeline mode”: a way to rewind your dev session  
              and see how your code evolved, with LLM insight layered on top.
            </p>
          </section>

          <footer className="pt-10 border-t border-gray-700">
            <p>Thanks for reading. I’d love to build with you.</p>
            <p className="text-sm text-gray-500 mt-2">Built with Next.js + Tailwind by [Your Name]</p>
          </footer>
        </div>
      </main>
    </>
  )
}
