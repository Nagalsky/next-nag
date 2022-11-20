import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import HeaderNavbar from './header-navbar'

export default function Header() {
  const { data: session } = useSession()

  const router = useRouter()

  const [isMobileMenuOpen, setIsMobileMenuOpened] = useState(false)

  return (
    <header className="shadow-xl bg-slate-900 py-3 relative">
      <div className="container flex items-center justify-between gap-4">
        <Link href="/" className="font-bold shrink-0">
          Logo
        </Link>

        {session ? (
          <HeaderNavbar />
        ) : (
          <button
            onClick={() => signIn()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm px-5 py-2.5 focus:outline-none"
          >
            Login
          </button>
        )}
      </div>
    </header>
  )
}
