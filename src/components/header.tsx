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
          <button onClick={() => signOut()}>log out</button>
        </>
      ) : (
        <button onClick={() => signIn()}>sign in</button>
      )}
    </header>
  )
}
