import Link from 'next/link'
import Image from 'next/image'
import Icon from '../ui/icon'
import Countdown from './countdown'

export default function Hero() {
  return (
    <section className="bg-neutral-900 relative mb-32">
      <Image
        src="/image-2.jpg"
        alt="3Länderlauf 2026"
        width={1920}
        height={1080}
        className="w-full h-full object-cover absolute inset-0 opacity-50"
        priority
      />

      <div className="max-w-6xl mx-auto px-4 h-[50vh] flex flex-col justify-center relative z-10 text-white">
        <h1 className="font-title uppercase mb-4 font-medium tracking-wider">3Länderlauf 2026</h1>
        <p className="font-title text-5xl uppercase font-bold max-w-1/2 mb-4 text-balance leading-14">
          Grenzüberschreitender <span className="bg-amber-300 text-neutral-800">Marathon</span> über
          3 Länder
        </p>
        <p className="text-lg mb-8">
          Rennen Sie einen Halbmarathon, Marathon oder ein 10km-Rennen durch Deutschland, Frankreich
          und die Schweiz.
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

      <div className="text-neutral-900 max-w-6xl bg-linear-to-br from-amber-300 to-amber-400 relative mx-auto grid grid-cols-2 gap-4 translate-y-1/2 p-4">
        <Countdown />

        <ul>
          <li className="flex items-center gap-2 mb-2 font-title uppercase font-medium">
            <span className="border border-neutral-800 rounded-full p-2">
              <Icon name="flag" className="size-4" />
            </span>{' '}
            16. Mai 2026
          </li>
          <li className="flex items-center gap-2  mb-2 font-title uppercase font-medium">
            <span className="border border-neutral-800 rounded-full p-2">
              <Icon name="map" className="size-4" />
            </span>{' '}
            Marktplatz Basel, Schweiz
          </li>
          <li className="flex items-center gap-2 font-title uppercase font-medium">
            <span className="border border-neutral-800 rounded-full p-2">
              <Icon name="users" className="size-4" />
            </span>{' '}
            3.000 Läufer
          </li>
        </ul>
      </div>
    </section>
  )
}
