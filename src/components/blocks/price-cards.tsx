import Link from 'next/link'

export default function PriceCards() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-4">
      <header className="text-center">
        <h2 className="text-5xl text-balance font-bold font-title uppercase mb-4 text-neutral-900">
          Sichern Sie sich jetzt Ihr <span className="bg-amber-300">Ticket</span>
        </h2>

        <p className="text-balance text-lg max-w-2/3 mx-auto mb-16">
          Take advantage of our early bird pricing and save on your marathon ticket! Enjoy the
          benefits of registering early while guaranteeing your participation.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-8">
        <article className="p-8 bg-neutral-50">
          <h3 className="text-5xl font-bold font-title uppercase mb-2 text-neutral-900">41 km</h3>
          <p className="text-xl mb-8">Marathon</p>

          <dl className="grid grid-cols-2 gap-4 border-y border-neutral-200 py-8 mb-8">
            <div>
              <dt className="font-title uppercase font-medium mb-2">Early Bird</dt>
              <dd className="font-title uppercase font-bold text-3xl">100 €</dd>
            </div>
            <div>
              <dt className="font-title uppercase font-medium mb-2 text-neutral-400">Normal</dt>
              <dd className="font-title uppercase font-bold text-3xl text-neutral-400 line-through">
                120 €
              </dd>
            </div>
          </dl>

          <Link
            href="https://onreg.datasport.com/en/dreilaender-lauf-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="font-title uppercase font-bold w-full text-center bg-amber-300 text-neutral-800 px-4 py-2 hover:bg-amber-400 block focus-visible:bg-amber-400"
          >
            Tickets kaufen
          </Link>
        </article>

        <article className="p-8 bg-neutral-50">
          <h3 className="text-5xl font-bold font-title uppercase mb-2 text-neutral-900">20 km</h3>
          <p className="text-xl mb-8">Halbmarathon</p>

          <dl className="grid grid-cols-2 gap-4 border-y border-neutral-200 py-8 mb-8">
            <div>
              <dt className="font-title uppercase font-medium mb-2">Early Bird</dt>
              <dd className="font-title uppercase font-bold text-3xl">100 €</dd>
            </div>
            <div>
              <dt className="font-title uppercase font-medium mb-2 text-neutral-400">Normal</dt>
              <dd className="font-title uppercase font-bold text-3xl text-neutral-400 line-through">
                120 €
              </dd>
            </div>
          </dl>

          <Link
            href="https://onreg.datasport.com/en/dreilaender-lauf-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="font-title uppercase font-bold w-full text-center bg-amber-300 text-neutral-800 px-4 py-2 hover:bg-amber-400 block focus-visible:bg-amber-400"
          >
            Tickets kaufen
          </Link>
        </article>

        <article className="p-8 bg-neutral-50">
          <h3 className="text-5xl font-bold font-title uppercase mb-2 text-neutral-900">10 km</h3>
          <p className="text-xl mb-8">Lauf</p>

          <dl className="grid grid-cols-2 gap-4 border-y border-neutral-200 py-8 mb-8">
            <div>
              <dt className="font-title uppercase font-medium mb-2">Early Bird</dt>
              <dd className="font-title uppercase font-bold text-3xl">100 €</dd>
            </div>
            <div>
              <dt className="font-title uppercase font-medium mb-2 text-neutral-400">Normal</dt>
              <dd className="font-title uppercase font-bold text-3xl text-neutral-400 line-through">
                120 €
              </dd>
            </div>
          </dl>

          <Link
            href="https://onreg.datasport.com/en/dreilaender-lauf-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="font-title uppercase font-bold w-full text-center bg-amber-300 text-neutral-800 px-4 py-2 hover:bg-amber-400 block focus-visible:bg-amber-400"
          >
            Tickets kaufen
          </Link>
        </article>
      </div>
    </section>
  )
}
