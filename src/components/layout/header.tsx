'use client'

import Link from 'next/link'
import { useDropdown } from '@/hooks/use-dropdown'
import Icon from '../ui/icon'
import { cn } from '@/lib/utils'

const menuItems = [
  { href: '/marathon', label: 'Marathon' },
  { href: '/halb-marathon', label: 'Halbmarathon' },
  { href: '/10km-lauf', label: '10km-Lauf' },
]

const languages = [
  { code: 'de', label: 'Deutsch' },
  { code: 'fr', label: 'Français' },
  { code: 'en', label: 'English' },
]

export default function Header() {
  const categoriesDropdown = useDropdown<HTMLAnchorElement>({ itemCount: menuItems.length })
  const languageDropdown = useDropdown<HTMLButtonElement>({ itemCount: languages.length })

  return (
    <header className="bg-neutral-800 sticky top-0 z-20">
      <div className="container mx-auto p-4 flex items-center">
        <p className="text-2xl font-bold font-title uppercase text-white mr-16">3Länderlauf 2026</p>

        <nav className="flex gap-8 flex-1 items-center">
          <Link
            className="font-title uppercase font-bold text-neutral-200 hover:text-white focus-visible:text-white"
            href="/"
            prefetch
          >
            Home
          </Link>

          <div className="relative" ref={categoriesDropdown.containerRef}>
            <button
              ref={categoriesDropdown.triggerRef}
              type="button"
              onClick={categoriesDropdown.toggle}
              onKeyDown={categoriesDropdown.handleTriggerKeyDown}
              aria-expanded={categoriesDropdown.isOpen}
              aria-haspopup="true"
              aria-controls="runs-menu"
              className="font-title cursor-pointer uppercase font-bold text-neutral-200 hover:text-white focus-visible:text-white flex items-center gap-1"
            >
              Kategorien
              <Icon name="chevron-down" className={cn('size-4 transition-transform', categoriesDropdown.isOpen ? 'rotate-180' : '')} />
            </button>

            {categoriesDropdown.isOpen && (
              <div
                id="runs-menu"
                role="menu"
                aria-label="Läufe"
                onKeyDown={categoriesDropdown.handleMenuKeyDown}
                className="absolute top-full -left-4 mt-2 bg-neutral-800 shadow-lg py-2 min-w-40"
              >
                {menuItems.map((item, index) => (
                  <Link
                    key={item.href}
                    role="menuitem"
                    className="block px-4 py-2 font-title uppercase font-bold text-neutral-200 hover:text-white focus-visible:text-white"
                    href={item.href}
                    prefetch
                    {...categoriesDropdown.getItemProps(index)}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            className="font-title uppercase font-bold text-neutral-200 hover:text-white focus-visible:text-white"
            href="/kontakt"
            prefetch
          >
            Kontakt
          </Link>
          <Link
            className="font-title uppercase font-bold bg-amber-300 text-neutral-800 px-4 py-2 ml-auto hover:bg-amber-400 focus-visible:bg-amber-400"
            href="https://onreg.datasport.com/en/dreilaender-lauf-2026"
            target="_blank"
            rel="noopener noreferrer"
          >
            Registrierung
          </Link>

          <div className="relative" ref={languageDropdown.containerRef}>
            <button
              ref={languageDropdown.triggerRef}
              type="button"
              onClick={languageDropdown.toggle}
              onKeyDown={languageDropdown.handleTriggerKeyDown}
              aria-expanded={languageDropdown.isOpen}
              aria-haspopup="true"
              aria-controls="language-menu"
              className="font-title cursor-pointer uppercase font-bold text-neutral-200 hover:text-white focus-visible:text-white flex items-center gap-1"
            >
              DE
              <Icon name="chevron-down" className={cn('size-4 transition-transform', languageDropdown.isOpen ? 'rotate-180' : '')} />
            </button>

            {languageDropdown.isOpen && (
              <div
                id="language-menu"
                role="menu"
                aria-label="Sprache wählen"
                onKeyDown={languageDropdown.handleMenuKeyDown}
                className="absolute top-full right-0 mt-2 bg-neutral-800 shadow-lg py-2 min-w-32"
              >
                {languages.map((lang, index) => (
                  <button
                    key={lang.code}
                    type="button"
                    role="menuitem"
                    className="block w-full text-right px-4 py-2 font-title uppercase font-bold text-neutral-200 hover:text-white focus-visible:text-white outline-none cursor-pointer"
                    {...languageDropdown.getItemProps(index)}
                  >
                    {lang.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  )
}
