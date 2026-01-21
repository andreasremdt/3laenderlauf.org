import Link from 'next/link'
import Details from '../ui/details'

export default function Faq() {
  return (
    <section className="max-w-6xl py-32 mx-auto px-4">
      <header className="text-center">
        <h2 className="text-5xl font-bold font-title uppercase mb-4 text-neutral-900">
          Häufig gestellte <span className="bg-amber-300 text-neutral-800">Fragen</span> und{' '}
          <span className="bg-amber-300 text-neutral-800">Antworten</span>
        </h2>
        <p className="text-balance text-lg max-w-2/3 mx-auto mb-16">
          Finden Sie hier häufig gestellte Fragen und Antworten zu unserem Lauf.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-8 items-start">
        <aside className="bg-linear-to-br from-amber-300 to-amber-400 p-8">
          <h3 className="text-2xl font-bold font-title uppercase mb-4 text-neutral-900">
            Haben Sie eine andere Frage und finden keine Antwort?
          </h3>
          <p className="mb-4">
            Wir stehen Ihnen gerne zur Verfügung. Kontaktieren Sie uns einfach per E-Mail oder
            Telefon.
          </p>
          <Link
            href="/kontakt"
            className="font-title uppercase font-bold bg-white text-neutral-800 px-4 py-2 hover:bg-neutral-50 focus-visible:bg-neutral-50 w-max"
          >
            Kontakt aufnehmen
          </Link>
        </aside>

        <div className="col-span-2">
          <Details title="Startnummern">
            <p>
              Startnummern werden per E-Mail versendet. Sie erhalten eine E-Mail mit Ihrer
              Startnummer und weiteren Informationen.
            </p>
          </Details>
          <Details title="Wertsachen">
            <p>
              Startnummern werden per E-Mail versendet. Sie erhalten eine E-Mail mit Ihrer
              Startnummer und weiteren Informationen.
            </p>
          </Details>
          <Details title="Garderoben">
            <p>
              Startnummern werden per E-Mail versendet. Sie erhalten eine E-Mail mit Ihrer
              Startnummer und weiteren Informationen.
            </p>
          </Details>
          <Details title="T-Shirts & Medaillen">
            <p>
              Startnummern werden per E-Mail versendet. Sie erhalten eine E-Mail mit Ihrer
              Startnummer und weiteren Informationen.
            </p>
          </Details>
          <Details title="Siegerehrung">
            <p>
              Startnummern werden per E-Mail versendet. Sie erhalten eine E-Mail mit Ihrer
              Startnummer und weiteren Informationen.
            </p>
          </Details>
          <Details title="Massage">
            <p>
              Startnummern werden per E-Mail versendet. Sie erhalten eine E-Mail mit Ihrer
              Startnummer und weiteren Informationen.
            </p>
          </Details>
          <Details title="Diplom">
            <p>
              Startnummern werden per E-Mail versendet. Sie erhalten eine E-Mail mit Ihrer
              Startnummer und weiteren Informationen.
            </p>
          </Details>
        </div>
      </div>
    </section>
  )
}
