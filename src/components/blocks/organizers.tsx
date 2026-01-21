import Image from 'next/image'

export default function Organizers() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-4 grid grid-cols-3 gap-x-8 gap-y-16">
      <article className="text-center">
        <Image src="/image-1.jpg" alt="Organizer" width={500} height={600} className="mb-4" />
        <h3 className="text-2xl font-bold font-title uppercase text-neutral-900">
          Martin Lichtenthaler (CH)
        </h3>
        <p>Präsident</p>
      </article>
      <article className="text-center">
        <Image src="/image-2.jpg" alt="Organizer" width={600} height={500} className="mb-4" />
        <h3 className="text-2xl font-bold font-title uppercase text-neutral-900">
          David Eckes (FR)
        </h3>
        <p>Vize-Präsident</p>
      </article>
      <article className="text-center">
        <Image src="/image-3.jpg" alt="Organizer" width={600} height={500} className="mb-4" />
        <h3 className="text-2xl font-bold font-title uppercase text-neutral-900">
          Sascha Senger (DE)
        </h3>
        <p>Vize-Präsident</p>
      </article>
      <article className="text-center">
        <Image src="/image-1.jpg" alt="Organizer" width={600} height={500} className="mb-4" />
        <h3 className="text-2xl font-bold font-title uppercase text-neutral-900">
          Pascal Flury (CH)
        </h3>
        <p>Speaker</p>
      </article>
      <article className="text-center">
        <Image src="/image-2.jpg" alt="Organizer" width={600} height={500} className="mb-4" />
        <h3 className="text-2xl font-bold font-title uppercase text-neutral-900">
          Michaela Dix (DE)
        </h3>
        <p>Finanzen</p>
      </article>
      <article className="text-center">
        <Image src="/image-3.jpg" alt="Organizer" width={600} height={500} className="mb-4" />
        <h3 className="text-2xl font-bold font-title uppercase text-neutral-900">
          Seppi Passamani (CH)
        </h3>
        <p>Technik</p>
      </article>
    </section>
  )
}
