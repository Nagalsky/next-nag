import { useSession } from 'next-auth/react'
import { useSelector } from 'react-redux'
import Counter from '../components/counter'
import TodoCreate from '../components/todo-create'
import TodoList from '../components/todo-list'
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

          <div className="break-all mb-6">
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(data, null, 2)}
            </pre>
          </div>

          <h2 className="mb-8">Todos</h2>

          <div className="space-y-6">
            <TodoCreate />

            <TodoList />
          </div>
        </div>
      </section>
    </>
  )
}
