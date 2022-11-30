import { useDispatch, useSelector } from 'react-redux'
import { removeTodo, setTodoStatus } from '../store/slices/todoSlice'
import { AppDispatch, RootState } from '../store/store'

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todos)
  const dispatch = useDispatch<AppDispatch>()

  return (
    <>
      <div className="space-y-4">
        {todoList.map((todo) => (
          <div className="flex gap-4" key={todo.id}>
            <div className="flex grow items-center gap-4 border border-gray-300 rounded-lg bg-gray-50 p-4">
              <input
                className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 focus:ring-2 shrink-0"
                type="checkbox"
                defaultChecked={todo.completed}
                onChange={() => {
                  dispatch(
                    setTodoStatus({ completed: !todo.completed, id: todo.id }),
                  )
                }}
              />

              <p className={`${todo.completed ? 'line-through' : ''} grow`}>
                {todo.description}
              </p>
            </div>

            <button
              className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-sm px-6 py-2.5 focus:outline-none shrink-0"
              onClick={() => {
                dispatch(removeTodo(todo.id))
              }}
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
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            </button>
          </div>
        ))}
      </div>
    </>
  )
}
export default TodoList
