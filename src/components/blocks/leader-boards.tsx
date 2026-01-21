import Image from 'next/image'
import Link from 'next/link'

export default function LeaderBoards() {
    return (
        <section className="py-32 max-w-6xl mx-auto px-4">
            <header className="text-center">
                <h2 className="text-5xl font-bold font-title uppercase mb-4 text-neutral-900">
                    <span className="bg-amber-300">Ranglisten</span> der vergangenen Jahre
                </h2>
                <p className="text-balance text-lg max-w-2/3 mx-auto mb-16">
                    Wir bieten eine Vielzahl von Kategorien für Anfänger bis zu Profis. Wir haben Kategorien
                    für Anfänger, für Profis und für alle in der Mitte.
                </p>
            </header>

            <ul className='grid grid-cols-3 gap-8 h-full'>
                <li>
                    <Link className="p-8 h-full bg-neutral-50 w-full font-title text-2xl text-center uppercase font-bold text-neutral-900 flex items-center justify-center flex-col" href="https://results.datasport.com/de/anlass/dreilaender-lauf-2025/ranking" target="_blank" rel="noopener noreferrer">
                        2025
                    </Link>
                </li>
                <li>
                    <Link className="p-8 h-full bg-neutral-50 w-full font-title text-2xl text-center uppercase font-bold text-neutral-900 flex items-center justify-center flex-col" href="https://results.datasport.com/de/anlass/dreilaender-lauf-2025/ranking" target="_blank" rel="noopener noreferrer">
                        2024
                    </Link>
                </li>
                <li>
                    <Link className="p-8 h-full bg-neutral-50 w-full font-title text-2xl text-center uppercase font-bold text-neutral-900 flex items-center justify-center flex-col" href="https://results.datasport.com/de/anlass/dreilaender-lauf-2025/ranking" target="_blank" rel="noopener noreferrer">
                        2023
                    </Link>
                </li>
                <li>
                    <Link className="p-8 h-full bg-neutral-50 w-full font-title text-2xl text-center uppercase font-bold text-neutral-900 flex items-center justify-center flex-col" href="https://results.datasport.com/de/anlass/dreilaender-lauf-2025/ranking" target="_blank" rel="noopener noreferrer">
                        2022
                    </Link>
                </li>
                <li>
                    <Link className="p-8 h-full bg-neutral-50 w-full font-title text-2xl text-center uppercase font-bold text-neutral-900 flex items-center justify-center flex-col" href="https://results.datasport.com/de/anlass/dreilaender-lauf-2025/ranking" target="_blank" rel="noopener noreferrer">
                        2021
                        <span className="text-sm text-neutral-500 block">Lauf wegen Covid abgesagt</span>
                    </Link>
                </li>
                <li>
                    <Link className="p-8 h-full bg-neutral-50 w-full font-title text-2xl text-center uppercase font-bold text-neutral-900 flex items-center justify-center flex-col" href="https://results.datasport.com/de/anlass/dreilaender-lauf-2025/ranking" target="_blank" rel="noopener noreferrer">
                        2020
                        <span className="text-sm text-neutral-500 block">Lauf wegen Covid abgesagt</span>
                    </Link>
                </li>
            </ul>
        </section>
    )
}
