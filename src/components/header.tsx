import { useSession, signIn, signOut } from 'next-auth/react'
import Link from 'next/link'

export default function Header() {
  const { data: session, status } = useSession()

  if (status === 'loading') return <p>Loading...</p>

  return (
    <header>
      <Link href="/">Im a logo</Link>

      <Link href="/dashboard">to dashboard</Link>

      {session ? (
        <>
          <p>Welcome, {session?.user?.email}</p>
          <button
            onClick={() => signOut()}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
          >
            log out
          </button>
        </>
      ) : (
        <button
          onClick={() => signIn()}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2  focus:outline-none"
        >
          sign in
        </button>
      )}
    </header>
  )
}
