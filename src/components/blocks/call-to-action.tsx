import Link from 'next/link'
import Image from 'next/image'

export default function CallToAction() {
  return (
    <section className="py-32 bg-neutral-900 relative">
      <Image
        src="/image-2.jpg"
        alt="3Länderlauf 2026"
        width={1920}
        height={1080}
        className="w-full h-full object-cover absolute inset-0 opacity-50"
        priority
      />

      <div className="max-w-6xl mx-auto px-4 text-white relative z-10 text-center">
        <h2 className="text-5xl text-balance font-bold font-title uppercase mb-4">
          Register Today and Start Your{' '}
          <span className="bg-amber-300 text-neutral-800">Marathon</span> Journey!
        </h2>
        <p className="text-balance text-lg max-w-2/3 mx-auto mb-8">
          Registrieren Sie sich heute und starten Sie Ihre Marathon-Reise!
        </p>

        <Link
          href="https://onreg.datasport.com/en/dreilaender-lauf-2026"
          target="_blank"
          rel="noopener noreferrer"
          className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 hover:bg-amber-400 focus-visible:bg-amber-400 w-max"
        >
          Registrierung
        </Link>
      </div>
    </section>
  )
}
