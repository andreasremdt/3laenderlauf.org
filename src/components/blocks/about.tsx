import Image from 'next/image'

export default function About() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-4 grid grid-cols-2 gap-8">
      <figure>
        <Image
          src="/image-2.jpg"
          alt="Marathon 42 km"
          width={600}
          height={500}
          className="w-full h-full object-cover"
        />
      </figure>

      <div>
        <h2 className="text-5xl font-bold font-title uppercase mb-4 text-neutral-900">
          Jeder Schritt bringt dich näher ans <span className="bg-amber-300">Ziel</span>
        </h2>
        <p className="text-lg mb-8">
          Der 3Länderlauf is an exhilarating marathon designed to challenge runners of all levels,
          from beginners to seasoned athletes.
        </p>

        <article className="p-8 bg-neutral-50 flex gap-8 mb-4">
          <h3 className="text-4xl font-bold font-title uppercase text-neutral-900 shrink-0">
            273 k+ <span className="text-base font-medium block text-neutral-600">Läufer</span>
          </h3>
          <p>
            Die Community rundet sich um den Lauf. Wir freuen uns, dich dabei begrüssen zu dürfen.
          </p>
        </article>

        <article className="p-8 bg-neutral-50 flex gap-8">
          <h3 className="text-4xl font-bold font-title uppercase text-neutral-900 shrink-0">
            164 + <span className="text-base font-medium block text-neutral-600">Länder</span>
          </h3>
          <p>
            Die Community rundet sich um den Lauf. Wir freuen uns, dich dabei begrüssen zu dürfen.
          </p>
        </article>
      </div>
    </section>
  )
}
