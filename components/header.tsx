import Link from 'next/link'
import Image from 'next/image'
import { signIn, signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

const navbarUrls = [
  {
    url: '/',
    name: 'Home',
  },
  {
    url: '/me',
    name: 'Me',
  },
]

export default function Header() {
  const { data: session } = useSession()

  const router = useRouter()

  const [isMobileMenuOpen, setIsMobileMenuOpened] = useState(false)

  const ref = useRef(null)

  const [opened, setOpened] = useState(false)

  const handleClickOpen = () => {
    setOpened((prev) => !prev)
  }

  const handleClickOutside = () => {
    setOpened(false)
  }

  useOnClickOutside(ref, handleClickOutside)

  return (
    <header className="py-3 bg-purple-400 text-white">
      <div className="container flex md:gap-6 items-center flex-wrap">
        <Link href="/" className="font-bold shrink-0 text-xl">
          Logo
        </Link>

        <div className="md:order-last ml-auto">
          {!session && (
            <>
              <button
                onClick={() => signIn()}
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Sign in
              </button>
            </>
          )}
          {session?.user && (
            <div className="flex gap-4 items-center">
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

              <div className="relative flex items-center gap-4" ref={ref}>
                <Image
                  src={session?.user?.image || 'https://via.placeholder.com/40'}
                  width={40}
                  height={40}
                  alt="Avatar"
                  placeholder="blur"
                  blurDataURL={`${session?.user?.image}?auto=format,compress&q=1&blur=500&w=2`}
                  priority
                  className="rounded-full cursor-pointer"
                  onClick={handleClickOpen}
                />

                {opened && (
                  <div className="absolute right-0 top-full z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <div className="p-2">
                      <button
                        onClick={() =>
                          signOut({
                            callbackUrl: `${window.location.origin}`,
                          })
                        }
                        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none w-full"
                      >
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {session?.user && (
          <nav
            className={`${
              isMobileMenuOpen ? 'flex' : 'hidden'
            } md:flex flex-col md:flex-row gap-4 w-full md:w-auto md:grow md:items-center md:justify-end md:gap-6 mt-5 md:mt-0`}
          >
            {navbarUrls.map((item, index) => {
              return (
                <Link
                  href={item.url}
                  key={index}
                  className={`font-bold ${
                    router.pathname === item.url && 'text-purple-900'
                  }`}
                  onClick={() => setIsMobileMenuOpened(false)}
                >
                  {item.name}
                </Link>
              )
            })}
          </nav>
        )}
      </div>
    </header>
  )
}
