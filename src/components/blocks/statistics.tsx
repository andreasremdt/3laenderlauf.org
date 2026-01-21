export default function Statistics() {
  return (
    <section className="py-32 bg-neutral-800">
      <div className="max-w-6xl mx-auto px-4">
        <ul className="grid grid-cols-4 gap-8">
          <li className="text-center flex flex-col items-center gap-1">
            <span className="text-4xl flex items-center font-bold font-title uppercase text-white gap-1">
              273 <span className="text-amber-300 text-2xl">k</span>
            </span>
            <span className="font-title uppercase text-neutral-500 font-medium text-sm tracking-wider">
              Läufer
            </span>
          </li>
          <li className="text-center flex flex-col items-center gap-1">
            <span className="text-4xl flex items-center font-bold font-title uppercase text-white gap-1">
              500 <span className="text-amber-300 text-2xl">+</span>
            </span>
            <span className="font-title uppercase text-neutral-500 font-medium text-sm tracking-wider">
              Sponsoren
            </span>
          </li>
          <li className="text-center flex flex-col items-center gap-1">
            <span className="text-4xl flex items-center font-bold font-title uppercase text-white gap-1">
              750 <span className="text-amber-300 text-2xl">km</span>
            </span>
            <span className="font-title uppercase text-neutral-500 font-medium text-sm tracking-wider">
              Gesamtstrecke
            </span>
          </li>
          <li className="text-center flex flex-col items-center gap-1">
            <span className="text-4xl flex items-center font-bold font-title uppercase text-white gap-1">
              165 <span className="text-amber-300 text-2xl">+</span>
            </span>
            <span className="font-title uppercase text-neutral-500 font-medium text-sm tracking-wider">
              Länder
            </span>
          </li>
        </ul>
      </div>
    </section>
  )
}
