import { useSelector } from 'react-redux'
import Counter from '../components/counter'
import { RootState } from '../store/store'

export default function IndexPage() {
  const { count } = useSelector((state: RootState) => state.counter)
  return (
    <>
      <section className="py-6">
        <div className="container">
          <h1 className="font-bold text-red-500">NextAuth.js Example</h1>
          <h2>Count: {count}</h2>

          <Counter />
        </div>
      </section>
    </>
  )
}
