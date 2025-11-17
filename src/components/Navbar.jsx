import { useState } from 'react'
import { Menu, X, Gem } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const links = [
    { name: 'Scents', href: '#collections' },
    { name: 'Story', href: '#story' },
    { name: 'Craft', href: '#craft' },
    { name: 'Contact', href: '#contact' },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/20 bg-white/50 backdrop-blur supports-[backdrop-filter]:bg-white/40">
          <div className="flex items-center justify-between px-4 py-3 sm:px-6">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-indigo-500 text-white shadow-lg">
                <Gem className="h-5 w-5" />
              </span>
              <span className="text-lg font-semibold tracking-wide text-gray-900">Éclat Parfums</span>
            </a>

            <nav className="hidden gap-8 md:flex">
              {links.map((l) => (
                <a key={l.name} href={l.href} className="text-sm font-medium text-gray-700 hover:text-gray-900">
                  {l.name}
                </a>
              ))}
            </nav>

            <div className="md:hidden">
              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-white/60"
              >
                {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
          {open && (
            <div className="border-t border-white/30 px-4 py-3 sm:px-6 md:hidden">
              <div className="grid gap-3">
                {links.map((l) => (
                  <a key={l.name} href={l.href} className="rounded-md px-2 py-2 text-sm font-medium text-gray-800 hover:bg-white/70">
                    {l.name}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
