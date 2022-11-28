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
      <section className="py-6 min-h-screen bg-purple-100 flex justify-center items-center">
        <div className="container">
          <div className="space-y-5 mx-auto max-w-[400px]">
            {Object.values(providers).map((provider) => (
              <button
                key={provider?.name}
                onClick={() =>
                  signIn(provider?.id, { redirect: false, callbackUrl: '/me' })
                }
                className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-sm px-5 py-3 focus:outline-none w-full flex items-center justify-center gap-4"
              >
                Sign in with {provider?.name}
              </button>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export async function getServerSideProps() {
  const providers = await getProviders()
  return {
    props: { providers },
  }
}
