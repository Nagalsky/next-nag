import { useDispatch } from 'react-redux'
import {
  decrement,
  increment,
  incrementByAmount,
} from '../store/slices/counterSlice'

const Counter = () => {
  const dispatch = useDispatch()
  return (
    <div className="flex flex-wrap gap-4 py-6">
      <button
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        onClick={() => {
          dispatch(increment())
        }}
      >
        Increase
      </button>

      <button
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        onClick={() => {
          dispatch(decrement())
        }}
      >
        Decrease
      </button>

      <button
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-300 font-bold rounded-lg text-sm px-5 py-2.5 focus:outline-none"
        onClick={() => {
          dispatch(incrementByAmount(10))
        }}
      >
        IncrementBy 10
      </button>
    </div>
  )
}
export default Counter
