import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from '../store/slices/todoSlice'
import { AppDispatch } from '../store/store'

const TodoCreate = () => {
  const dispatch = useDispatch<AppDispatch>()

  const [todoDescription, setTodoDescription] = useState('')

  const handleClick = () => {
    dispatch(addTodo(todoDescription))
    setTodoDescription('')
  }

  const handleKeyDown = (event: {
    key: string
    preventDefault: () => void
  }) => {
    if (event.key === 'Enter' && todoDescription) {
      event.preventDefault()

      dispatch(addTodo(todoDescription))
      setTodoDescription('')
    }
  }

  return (
    <div className="flex gap-4">
      <input
        className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-500 focus:border-purple-500"
        placeholder="Add Todo Item"
        onChange={(e) => setTodoDescription(e.target.value.trimStart())}
        value={todoDescription}
        onKeyDown={handleKeyDown}
      />
      <button
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-sm px-10 py-2.5 focus:outline-none shrink-0 disabled:bg-purple-700/70 disabled:cursor-not-allowed"
        onClick={handleClick}
        disabled={!todoDescription}
      >
        Add Item
      </button>
    </div>
  )
}
export default TodoCreate
