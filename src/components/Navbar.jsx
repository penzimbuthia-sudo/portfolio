import { useState } from 'react'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <nav className="px-6 py-6">
      <div className="max-w-6xl mx-auto">

        <div className="flex items-center justify-between">

          {/* Logo */}
          <a
            href="#"
            className="text-lg md:text-xl font-semibold tracking-tight hover:text-[#7A8F7B] transition-colors"
          >
            Penzi Mbuthia
          </a>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">

            <a
              href="#about"
              className="hover:text-[#7A8F7B] transition-colors"
            >
              About
            </a>

            <a
              href="#skills"
              className="hover:text-[#7A8F7B] transition-colors"
            >
              Skills
            </a>

            <a
              href="#projects"
              className="hover:text-[#7A8F7B] transition-colors"
            >
              Projects
            </a>

            <a
              href="#contact"
              className="hover:text-[#7A8F7B] transition-colors"
            >
              Contact
            </a>

          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-[#F1EBE2] transition-colors"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>

        </div>

        {/* Mobile navigation */}
        {isOpen && (
          <div className="md:hidden mt-6 pt-5 border-t border-[#E2D9CD]">

            <div className="flex flex-col gap-5 text-sm font-medium">

              <a
                href="#about"
                onClick={closeMenu}
                className="hover:text-[#7A8F7B] transition-colors"
              >
                About
              </a>

              <a
                href="#skills"
                onClick={closeMenu}
                className="hover:text-[#7A8F7B] transition-colors"
              >
                Skills
              </a>

              <a
                href="#projects"
                onClick={closeMenu}
                className="hover:text-[#7A8F7B] transition-colors"
              >
                Projects
              </a>

              <a
                href="#contact"
                onClick={closeMenu}
                className="hover:text-[#7A8F7B] transition-colors"
              >
                Contact
              </a>

            </div>

          </div>
        )}

      </div>
    </nav>
  )
}

export default Navbar