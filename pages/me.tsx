import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import Counter from '../components/counter'
import { RootState } from '../store/store'

export default function MePage() {
  const { data } = useSession()

  const { count } = useSelector((state: RootState) => state.counter)

  return (
    <>
      <section className="py-6">
        <div className="container">
          <h2>Count: {count}</h2>

          <Counter />

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
