import Image from 'next/image'

export default function Directions() {
    return (
        <section className="py-32 max-w-6xl mx-auto px-4">
            <header className="text-center">
                <h2 className="text-5xl text-balance font-bold font-title uppercase mb-4 text-neutral-900">
                    Ihre <span className="bg-amber-300">Anreise</span> zum 3Länderlauf
                </h2>

                <p className="text-balance text-lg max-w-2/3 mx-auto mb-16">
                    Hier finden Sie alle wichtigen Details zur Anreise.
                </p>
            </header>

            <div className="grid grid-cols-2 gap-8">
                <figure>
                    <Image
                        src="/nahverkehr.png"
                        alt="Marathon 42 km"
                        width={600}
                        height={500}
                        className="w-full h-full object-cover"
                    />
                </figure>

                <div>
                    <article className="mb-16">
                        <h3 className="text-2xl font-bold font-title uppercase mb-2 text-neutral-900">
                            Adresse
                        </h3>

                        <p>Marktplatz 1, 4001 Basel, Schweiz</p>
                    </article>

                    <article className="mb-16">
                        <h3 className="text-2xl font-bold font-title uppercase mb-2 text-neutral-900">
                            Anreise mit dem Auto
                        </h3>

                        <p>Die Parkhäuser „Storchen” und „Basel City” (Universitätsspital Basel) befinden sich nur wenige
                            Gehminuten vom Marktplatz entfernt.</p>
                    </article>
                    <article>
                        <h3 className="text-2xl font-bold font-title uppercase mb-2 text-neutral-900">
                            Anreise mit dem öffentlichen Verkehr
                        </h3>

                        <p className='mb-4'>Alle Läufer erhalten per Mail von Datasport ein Gratis-Ticket für den Nahverkehr (siehe
                            untenstehenden Plan).
                            Das Ticket wird ca. 1 Woche vor dem Lauf verschickt, bitte auch im Spam-Ordner kontrollieren.</p>

                        <a href="https://www.tnw.ch/assets/files/content/Plan-RVL-Abo-G%C3%BCltigkeit-ab-15.-Dez.-2019-inkl.-Zonen-10-40.pdf" target="_blank" rel="noopener noreferrer" className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 ml-auto hover:bg-amber-400 focus-visible:bg-amber-400">
                            Fahrplan herunterladen
                        </a>
                    </article>
                </div>
            </div >
        </section >
    )
}