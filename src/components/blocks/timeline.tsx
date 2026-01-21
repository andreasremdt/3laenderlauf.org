import Link from 'next/link'
import Icon from '../ui/icon'

export default function Timeline() {
  return (
    <section className="py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-3 gap-8">
        <header className="flex flex-col">
          <h2 className="text-5xl text-balance font-bold font-title uppercase mb-4 text-neutral-900">
            Wichtige Daten für Ihre <span className="bg-amber-300">Anmeldung</span>
          </h2>

          <p className="font-title uppercase font-bold text-xl mb-4 mt-auto">
            Folgen Sie uns und bleiben Sie informiert
          </p>

          <ul className="flex gap-2">
            <li>
              <Link href="/" aria-label="Facebook">
                <span className="border border-neutral-900 rounded-full p-2 block">
                  <Icon name="facebook" className="size-4 text-neutral-900" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/" aria-label="Instagram">
                <span className="border border-neutral-900 rounded-full p-2 block">
                  <Icon name="instagram" className="size-4 text-neutral-900" />
                </span>
              </Link>
            </li>
          </ul>
        </header>

        <div className="col-span-2 justify-self-end">
          <ol className="space-y-8 relative before:absolute before:left-[calc(var(--spacing)*40+6px)] before:translate-x-1/2 before:-top-2 before:-bottom-2 before:w-0.5 before:bg-amber-500">
            <li className="flex items-center gap-16 relative before:absolute before:left-40 before:-top-6 before:size-4 before:bg-amber-500 before:rounded-full">
              <span className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 text-lg absolute">
                Aug 01, 2025
              </span>
              <p className="font-title uppercase font-bold text-2xl ml-52">Registrierung öffnet</p>
            </li>
            <li className="flex items-center gap-16 relative before:absolute before:left-40 before:-top-6 before:size-4 before:bg-amber-500 before:rounded-full">
              <span className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 text-lg absolute">
                Sep 01, 2025
              </span>
              <p className="font-title uppercase font-bold text-2xl ml-52">Eintrag #1</p>
            </li>
            <li className="flex items-center gap-16 relative before:absolute before:left-40 before:-top-6 before:size-4 before:bg-amber-500 before:rounded-full">
              <span className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 text-lg absolute">
                Okt 01, 2025
              </span>
              <p className="font-title uppercase font-bold text-2xl ml-52">Eintrag #2</p>
            </li>
            <li className="flex items-center gap-16 relative before:absolute before:left-40 before:-top-6 before:size-4 before:bg-amber-500 before:rounded-full">
              <span className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 text-lg absolute">
                Nov 01, 2025
              </span>
              <p className="font-title uppercase font-bold text-2xl ml-52">Anmeldung schließt</p>
            </li>
            <li className="flex items-center gap-16 relative before:absolute before:left-40 before:-top-6 before:size-4 before:bg-amber-500 before:rounded-full after:absolute after:left-40 after:-bottom-6 after:size-4 after:bg-amber-500 after:rounded-full">
              <span className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 text-lg absolute">
                Dez 01, 2025
              </span>
              <p className="font-title uppercase font-bold text-2xl ml-52">Tag des Laufs</p>
            </li>
          </ol>
        </div>
      </div>
    </section>
  )
}
