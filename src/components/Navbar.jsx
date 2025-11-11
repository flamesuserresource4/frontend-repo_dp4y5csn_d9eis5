import { Link, NavLink } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { useState } from 'react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const linkBase = 'px-4 py-2 rounded-md text-sm font-medium transition-colors'
  const inactive = 'text-neutral-300 hover:text-neon hover:bg-neutral-900/60'
  const active = 'text-black bg-neon'

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-neutral-800/80 backdrop-blur supports-[backdrop-filter]:bg-black/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <Link to="/" className="text-neon font-bold tracking-wider text-lg">
            AK
          </Link>

          <nav className="hidden md:flex items-center gap-2">
            <NavLink to="/" end className={({isActive}) => `${linkBase} ${isActive ? active : inactive}`}>
              Home
            </NavLink>
            <NavLink to="/about" className={({isActive}) => `${linkBase} ${isActive ? active : inactive}`}>
              About
            </NavLink>
            <NavLink to="/portfolio" className={({isActive}) => `${linkBase} ${isActive ? active : inactive}`}>
              Portfolio
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => `${linkBase} ${isActive ? active : inactive}`}>
              Contact
            </NavLink>
          </nav>

          <button className="md:hidden text-neutral-200" onClick={() => setOpen(!open)} aria-label="Toggle Menu">
            {open ? <X size={22}/> : <Menu size={22}/>}          
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden border-t border-neutral-800 bg-black/90">
          <div className="px-4 py-3 space-y-2">
            <NavLink onClick={() => setOpen(false)} to="/" end className={({isActive}) => `${linkBase} block ${isActive ? active : inactive}`}>
              Home
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/about" className={({isActive}) => `${linkBase} block ${isActive ? active : inactive}`}>
              About
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/portfolio" className={({isActive}) => `${linkBase} block ${isActive ? active : inactive}`}>
              Portfolio
            </NavLink>
            <NavLink onClick={() => setOpen(false)} to="/contact" className={({isActive}) => `${linkBase} block ${isActive ? active : inactive}`}>
              Contact
            </NavLink>
          </div>
        </div>
      )}
    </header>
  )
}
