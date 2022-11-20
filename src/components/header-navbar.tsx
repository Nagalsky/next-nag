import Link from 'next/link'
import HeaderUserDropdown from './header-user-dropdown'
import { useState } from 'react'
import { useRouter } from 'next/router'

const navbar = [
  {
    url: '/dashboard',
    name: 'Dashboard',
  },
  {
    url: '/dashboard/test',
    name: 'Test',
  },
]

export default function HeaderNavbar() {
  const router = useRouter()

  const [isMobileMenuOpen, setIsMobileMenuOpened] = useState(false)

  return (
    <div className="grow flex items-center justify-end gap-4">
      <HeaderUserDropdown />

      <button
        onClick={() => setIsMobileMenuOpened((prev) => !prev)}
        className="text-white focus:ring-4 focus:ring-blue-300 focus:outline-none md:hidden"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </button>

      <nav
        className={`${
          isMobileMenuOpen ? 'flex' : 'hidden'
        } md:flex flex-col md:flex-row md:items-center grow md:justify-center gap-4 md:order-first md:static absolute left-0 top-full w-full z-50 bg-slate-900 py-3 md:py-0`}
      >
        {navbar.map((item, index) => {
          return (
            <Link
              href={item.url}
              key={index}
              className={`px-3 md:px-0 font-bold ${
                router.pathname === item.url && 'text-pink-600'
              }`}
              onClick={() => setIsMobileMenuOpened(false)}
            >
              {item.name}
            </Link>
          )
        })}
      </nav>
    </div>
  )
}
