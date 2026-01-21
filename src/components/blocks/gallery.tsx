import Image from 'next/image'

export default function Gallery() {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4">
        <header className="text-center">
          <h2 className="text-5xl text-balance font-bold font-title uppercase mb-4 text-neutral-900">
            Schauen Sie sich unsere <span className="bg-amber-300">Galerie</span> an
          </h2>

          <p className="text-balance text-lg max-w-2/3 mx-auto mb-16">
            Each image captures runners’ energy and spirit on challenging courses worldwide.
          </p>
        </header>

        <figure className="grid grid-cols-3 gap-8 auto-rows-[300px]">
          <Image
            src="/image-1.jpg"
            alt="Marathon 42 km"
            width={600}
            height={500}
            className="w-full h-full object-cover col-span-2"
          />
          <Image
            src="/image-2.jpg"
            alt="Marathon 42 km"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src="/image-3.jpg"
            alt="Marathon 42 km"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src="/image-1.jpg"
            alt="Marathon 42 km"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src="/image-2.jpg"
            alt="Marathon 42 km"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src="/image-3.jpg"
            alt="Marathon 42 km"
            width={600}
            height={500}
            className="w-full h-full object-cover"
          />
          <Image
            src="/image-3.jpg"
            alt="Marathon 42 km"
            width={600}
            height={500}
            className="w-full h-full object-cover col-span-2"
          />
        </figure>
      </div>
    </section>
  )
}
