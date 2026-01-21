import Link from 'next/link'

export default function Details() {
  return (
    <section className="py-32 max-w-6xl mx-auto px-4">
      <header className="text-center">
        <h2 className="text-5xl text-balance font-bold font-title uppercase mb-4 text-neutral-900">
          Details zum <span className="bg-amber-300">Marathon</span>
        </h2>

        <p className="text-balance text-lg max-w-2/3 mx-auto mb-16">
          Hier finden Sie alle wichtigen Details zum Marathon.
        </p>
      </header>

      <div className="grid grid-cols-3 gap-8">
        <article className="p-8 bg-neutral-50">
          <h3 className="text-2xl font-bold font-title uppercase mb-2 text-neutral-900">Distanz</h3>
          <p>
            Der Marathon führt über eine Distanz von 42 km über die Schweiz, Deutschland und
            Frankreich.
          </p>
        </article>

        <article className="p-8 bg-neutral-50">
          <h3 className="text-2xl font-bold font-title uppercase mb-2 text-neutral-900">Kosten</h3>
          <p className="mb-2">Die Teilnahmegebüren sind wie folgt:</p>
          <ul className="list-disc list-inside">
            <li>80 CHF bis 28.02.26</li>
            <li>90 CHF von 01.03.26 bis 30.04.26</li>
            <li>100 CHF ab 01.05.26</li>
          </ul>
        </article>

        <article className="p-8 bg-neutral-50">
          <h3 className="text-2xl font-bold font-title uppercase mb-2 text-neutral-900">
            Anmeldung
          </h3>
          <p>
            Die Anmeldungen erfolgen über Datasport. Klicken Sie auf den{' '}
            <Link className="underline" href="/">
              hier um sich anzumelden
            </Link>
            .
          </p>
        </article>

        <article className="p-8 bg-neutral-50">
          <h3 className="text-2xl font-bold font-title uppercase mb-2 text-neutral-900">
            Rückerstattung
          </h3>
          <p>
            Eine Rückerstattung des Startgeldes ist nicht möglich. Bei den Online-Anmeldungen
            besteht die Möglichkeit, eine{' '}
            <Link className="underline" href="https://www.datasport.com/de/erv/">
              Annullationskosten-Versicherung
            </Link>{' '}
            bei Datasport abzuschliessen.
          </p>
        </article>

        <article className="p-8 bg-neutral-50">
          <h3 className="text-2xl font-bold font-title uppercase mb-2 text-neutral-900">
            Anmeldefrist
          </h3>
          <p>
            Die Anmeldungen enden am 16.05.26. Ab dem 1. Mai 2026 kann die Starterliste nicht mehr
            verändert werden. Nachmeldungen sind nicht möglich.
          </p>
        </article>

        <article className="p-8 bg-neutral-50">
          <h3 className="text-2xl font-bold font-title uppercase mb-2 text-neutral-900">
            Verpflegungsposten
          </h3>
          <ul className="list-disc list-inside">
            <li>5 / 26 km</li>
            <li>8,4 / 29,4 km</li>
            <li>13,2 / 28,3 km</li>
            <li>17,2 / 38,3 km</li>
            <li>Ziel / arrivée</li>
          </ul>
        </article>
      </div>

      <Link
        href="/registration"
        className="font-title uppercase font-bold w-max mx-auto mt-16 text-center bg-amber-300 text-neutral-800 px-4 py-2 hover:bg-amber-400 block focus-visible:bg-amber-400"
      >
        Jetzt registrieren
      </Link>
    </section>
  )
}
