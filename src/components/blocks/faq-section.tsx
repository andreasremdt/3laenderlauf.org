import Link from 'next/link'

export default function FaqSection() {
  return (
    <section className="py-32 bg-linear-to-br from-amber-300 to-amber-400">
      <div className="max-w-6xl mx-auto px-4 text-neutral-800 flex gap-8 justify-between items-center">
        <h2 className="text-5xl text-balance font-bold font-title uppercase mb-4">
          Haben Sie <span className="bg-neutral-900 text-amber-300">Fragen?</span>
          <br />
          Wir haben die <span className="bg-neutral-900 text-amber-300">Antworten!</span>
        </h2>
        <Link
          href="/faq"
          className="font-title uppercase font-bold bg-white text-neutral-800 px-4 py-2 hover:bg-neutral-50 focus-visible:bg-neutral-50 w-max"
        >
          FAQ öffnen
        </Link>
      </div>
    </section>
  )
}
