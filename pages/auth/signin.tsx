import { getProviders, signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

export default function SignIn({ providers }: { providers: any[] }) {
  const { data: session } = useSession()
  const router = useRouter()

  useEffect(() => {
    if (session) {
      router.push('/me')
    }
  }, [session])

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider?.name}>
          <button
            onClick={() =>
              signIn(provider?.id, { redirect: false, callbackUrl: '/me' })
            }
          >
            Sign in with {provider?.name}
          </button>
        </div>
      ))}
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
