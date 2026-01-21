import Image from 'next/image'
import Link from 'next/link'

export default function Categories() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-4">
      <header className="text-center">
        <h2 className="text-5xl font-bold font-title uppercase mb-4 text-neutral-900">
          Kategorien für <span className="bg-amber-300">Anfänger</span> bis zu{' '}
          <span className="bg-amber-300">Profis</span>
        </h2>
        <p className="text-balance text-lg max-w-2/3 mx-auto mb-16">
          Wir bieten eine Vielzahl von Kategorien für Anfänger bis zu Profis. Wir haben Kategorien
          für Anfänger, für Profis und für alle in der Mitte.
        </p>
      </header>

      <div className="grid grid-cols-2 gap-8">
        <article className="p-8 bg-neutral-50 row-span-2 relative">
          <Image
            src="/image-2.jpg"
            alt="Marathon 42 km"
            width={600}
            height={500}
            className="w-full object-cover mb-8"
          />
          <h3 className="text-4xl font-bold font-title uppercase mb-4 text-neutral-900">
            Marathon 42 km
          </h3>
          <p>Start um 9:00 Uhr</p>
          <Link
            href="/marathon"
            className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 hover:bg-amber-400 block focus-visible:bg-amber-400 w-max absolute bottom-8 right-8"
          >
            Mehr erfahren
          </Link>
        </article>

        <article className="p-8 bg-neutral-50 flex gap-8 relative">
          <Image
            src="/image-1.jpg"
            alt="Marathon 42 km"
            width={600}
            height={500}
            className="w-1/3 object-cover"
          />
          <div className="w-2/3">
            <h3 className="text-4xl font-bold font-title uppercase mb-8 text-neutral-900">
              Halbmarathon 21 km
            </h3>
            <p>Start um 9:10 Uhr</p>
            <Link
              href="/halb-marathon"
              className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 hover:bg-amber-400 block focus-visible:bg-amber-400 w-max absolute bottom-8 right-8"
            >
              Mehr erfahren
            </Link>
          </div>
        </article>

        <article className="p-8 bg-neutral-50 flex gap-8 relative">
          <Image
            src="/image-3.jpg"
            alt="Marathon 42 km"
            width={600}
            height={500}
            className="w-1/3 object-cover"
          />
          <div className="w-2/3">
            <h3 className="text-4xl font-bold font-title uppercase mb-8 text-neutral-900">
              10 km-Lauf
            </h3>
            <p>Start um 9:20 Uhr</p>
            <Link
              href="/10km-lauf"
              className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 hover:bg-amber-400 block focus-visible:bg-amber-400 w-max absolute bottom-8 right-8"
            >
              Mehr erfahren
            </Link>
          </div>
        </article>
      </div>
    </section>
  )
}
