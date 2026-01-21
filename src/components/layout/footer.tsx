import Link from 'next/link'
import Icon from '../ui/icon'

export default function Footer() {
  return (
    <footer className="bg-neutral-800">
      <div className="container mx-auto px-4 py-16 grid grid-cols-3 gap-8">
        <div>
          <p className="text-white font-title uppercase font-bold text-3xl mb-2">
            3Länderlauf 2026
          </p>
          <p className="text-neutral-400 mb-8">Grenzüberschreitender Marathon über 3 Länder</p>

          <h3 className="text-white font-title uppercase font-bold text-xl mb-4">Folgen Sie uns</h3>

          <ul className="flex gap-2">
            <li>
              <Link href="/" aria-label="Facebook">
                <span className="border border-neutral-200 rounded-full p-2 block">
                  <Icon name="facebook" className="size-4 text-white" />
                </span>
              </Link>
            </li>
            <li>
              <Link href="/" aria-label="Instagram">
                <span className="border border-neutral-200 rounded-full p-2 block">
                  <Icon name="instagram" className="size-4 text-white" />
                </span>
              </Link>
            </li>
          </ul>
        </div>

        <div className="col-span-2 grid grid-cols-3 gap-4">
          <div>
            <h3 className="text-white font-title uppercase font-bold text-xl mb-4">Der Lauf</h3>

            <ul className="space-y-2">
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/marathon">
                  Marathon
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/halb-marathon">
                  Halbmarathon
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/10km-lauf">
                  10km-Lauf
                </Link>
              </li>
              <li>
                <Link
                  className="text-neutral-400 hover:text-white"
                  href="https://onreg.datasport.com/en/dreilaender-lauf-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Registrierung
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/reglement">
                  Reglement
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/faq">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-title uppercase font-bold text-xl mb-4">
              Informationen
            </h3>

            <ul className="space-y-2">
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/organisatoren">
                  Organisatoren
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/ranglisten">
                  Ranglisten
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/sponsoren">
                  Sponsoren
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/datenschutz">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/impressum">
                  Impressum
                </Link>
              </li>
              <li>
                <Link className="text-neutral-400 hover:text-white" href="/kontakt">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-title uppercase font-bold text-xl mb-4">Kontakt</h3>

            <ul className="space-y-4">
              <li>
                <Link className="text-white relative block" href="/">
                  <span className="font-title uppercase font-bold block">E-Mail</span>
                  <span className="text-neutral-400 text-xl">info@3laenderlauf.de</span>
                  <span className="bg-amber-300 rounded-full p-2 inline-block absolute right-0 top-1/2 -translate-y-1/2">
                    <Icon name="email" className="size-5 text-neutral-800" />
                  </span>
                </Link>
              </li>
              <li>
                <Link className="text-white relative block" href="/">
                  <span className="font-title uppercase font-bold block">Telefon</span>
                  <span className="text-neutral-400 text-xl">+41 79 123 45 67</span>
                  <span className="bg-amber-300 rounded-full p-2 inline-block absolute right-0 top-1/2 -translate-y-1/2">
                    <Icon name="phone" className="size-5 text-neutral-800" />
                  </span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto p-4 text-center text-neutral-400 text-sm border-t border-neutral-700">
        <p>© {new Date().getFullYear()} 3Länderlauf. Alle Rechte vorbehalten.</p>
      </div>
    </footer>
  )
}
