import Image from 'next/image'

type Props = {
  title: string
}

export default function SmallHero({ title }: Props) {
  return (
    <section className="bg-neutral-900 relative">
      <Image
        src="/image-2.jpg"
        alt="3Länderlauf 2026"
        width={1920}
        height={1080}
        className="w-full h-full object-cover absolute inset-0 opacity-50"
        priority
      />

      <div className="max-w-6xl mx-auto px-4 h-80 flex flex-col justify-center items-center relative z-10 text-white">
        <h1 className="font-title text-5xl uppercase font-bold max-w-1/2 mb-4 text-balance leading-14">
          {title}
        </h1>
      </div>
    </section>
  )
}
