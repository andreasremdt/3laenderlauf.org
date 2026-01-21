import Image from 'next/image'

export default function Sponsors() {
    return (
        <section className="py-32 bg-neutral-800 text-white">
            <div className="max-w-6xl mx-auto px-4">
                <header>
                    <h2 className="text-5xl font-bold font-title uppercase mb-4">
                        Entdecken Sie unsere <span className="bg-amber-300 text-neutral-800">Sponsoren</span>
                    </h2>
                    <p className="text-lg mb-8 text-neutral-400">
                        Der 3Länderlauf is an exhilarating marathon designed to challenge runners of all levels,
                        from beginners to seasoned athletes.
                    </p>
                </header>

                <div className="grid grid-cols-3 gap-8">
                    <figure className="p-4 bg-neutral-700 border border-neutral-600">
                        <a href="https://www.swica.ch" target="_blank" rel="noopener noreferrer">
                            <Image src="/sponsor-1.jpg" alt="Sponsor 1" width={300} height={300} className="w-full h-full object-cover" />
                        </a>
                    </figure>
                    <figure className="p-4 bg-neutral-700 border border-neutral-600">
                        <a href="https://www.swica.ch" target="_blank" rel="noopener noreferrer">
                            <Image src="/sponsor-2.png" alt="Sponsor 1" width={300} height={300} className="w-full h-full object-cover" />
                        </a>
                    </figure>
                    <figure className="p-4 bg-neutral-700 border border-neutral-600">
                        <a href="https://www.swica.ch" target="_blank" rel="noopener noreferrer">
                            <Image src="/sponsor-3.jpg" alt="Sponsor 1" width={300} height={300} className="w-full h-full object-cover" />
                        </a>
                    </figure>
                </div>
            </div>
        </section>
    )
}