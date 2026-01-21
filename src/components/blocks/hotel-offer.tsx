export default function HotelOffer() {
    return (
        <section className="bg-neutral-800 text-white py-32">
            <div className="max-w-6xl mx-auto px-4">
                <header className="text-center">
                    <h2 className="text-5xl text-balance font-bold font-title uppercase mb-4">
                        Wir haben <span className="bg-amber-300 text-neutral-800">Hotelangebote</span> für Sie
                    </h2>
                    <p className="text-balance text-lg max-w-2/3 mx-auto mb-16">
                        Unser Partnerhotel, das <a href="http://www.welcomehotels.ch/de/stuecki/angebote/?details=1360" className="underline" target="_blank" rel="noopener noreferrer">Essential by Dorint Basel City</a> bietet den Teilnehmer*Innen des 3Laenderlaufes, Sonderkonditionen mit Late Check-out (auf Anfrage und nach Verfügbarkeit).
                    </p>
                </header>

                <dl className="grid grid-cols-3 gap-8">
                    <div className="p-4 bg-linear-to-br from-neutral-700 to-neutral-600 border border-neutral-600">
                        <dt className="font-title uppercase font-bold text-xl mb-2">Anreise</dt>
                        <dd>Samstag, 16. Mai 2026 ab 15:00 Uhr</dd>
                    </div>
                    <div className="p-4 bg-linear-to-br from-neutral-700 to-neutral-600 border border-neutral-600">
                        <dt className="font-title uppercase font-bold text-xl mb-2">Abreise</dt>
                        <dd>Sonntag, 17. Mai 2026 bis 12:00 Uhr</dd>
                    </div>
                    <div className="p-4 bg-linear-to-br from-neutral-700 to-neutral-600 border border-neutral-600">
                        <dt className="font-title uppercase font-bold text-xl mb-2">Leistungsumfang</dt>
                        <dd>Frühstücksbuffet, WLAN, Fitnessbereich, BaslerCard, Wasserflasche und mehr</dd>
                    </div>
                    <div className="p-4 bg-linear-to-br from-neutral-700 to-neutral-600 border border-neutral-600">
                        <dt className="font-title uppercase font-bold text-xl mb-2">Zimmer Essential</dt>
                        <dd>
                            Rate Einzelbelegung: CHF 179.00<br />
                            Rate Doppelbelegung: CHF 199.00<br />
                            City Tax: CHF 4.00 pro/Pers. und Nacht
                        </dd>
                    </div>
                    <div className="p-4 bg-linear-to-br from-neutral-700 to-neutral-600 border border-neutral-600">
                        <dt className="font-title uppercase font-bold text-xl mb-2">Zimmer Superior</dt>
                        <dd>
                            Rate Einzelbelegung: CHF 179.00<br />
                            Rate Doppelbelegung: CHF 199.00<br />
                            City Tax: CHF 4.00 pro/Pers. und Nacht
                        </dd>
                    </div>
                    <div className="p-4 bg-linear-to-br from-neutral-700 to-neutral-600 border border-neutral-600">
                        <dt className="font-title uppercase font-bold text-xl mb-2">Kontakt</dt>
                        <dd>
                            Essential by Dorint Basel City<br />
                            Schönaustrasse 10, 4058 Basel<br />
                            <a href="tel:+41448081065" className="underline">+41 44 808 10 65</a> oder <a href="mailto:reservierung.basel@dorint.com" className="underline">reservierung.basel@dorint.com</a>
                        </dd>
                    </div>
                    <div className="p-4 bg-linear-to-br from-neutral-700 to-neutral-600 border border-neutral-600 col-span-2">
                        <dt className="font-title uppercase font-bold text-xl mb-2">Extras</dt>
                        <dd>
                            Garagenplätze für CHF 15.00 pro Tag (anstatt CHF 25.00) <br />
                            Pasta-Gerichte am Vorabend ab CHF 24.00 pro Person (bitte reservieren)<br />
                            Folgenacht nur auf Anfrage und bei Verfügbarkeit buchbar.
                        </dd>
                    </div>
                    <div className="p-4 bg-linear-to-br from-neutral-700 to-neutral-600 border border-neutral-600">
                        <dt className="font-title uppercase font-bold text-xl mb-2">Weitere Unterkünfte</dt>
                        <dd>
                            <ul>
                                <li><a href="https://basel.com" className="underline" target="_blank" rel="noopener noreferrer">basel.com</a></li>
                                <li><a href="https://weil-am-rhein.de" className="underline" target="_blank" rel="noopener noreferrer">weil-am-rhein.de</a></li>
                                <li><a href="http://www.saintlouis-tourisme.fr/" className="underline" target="_blank" rel="noopener noreferrer">http://www.saintlouis-tourisme.fr/</a></li>
                            </ul>
                        </dd>
                    </div>
                </dl>
            </div>
        </section>
    )
}