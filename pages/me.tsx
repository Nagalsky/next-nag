import { useSession } from 'next-auth/react'

export default function MePage() {
  const { data } = useSession()

  return (
    <>
      <section className="py-6">
        <div className="container">
          <div className="break-all">
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>
        </div>
      </section>
    </>
  )
}
