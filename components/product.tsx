import { FC } from 'react'
import Image from 'next/image'
import { IProduct } from '../store/product/product.types'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'

const Product: FC<{ product: IProduct }> = ({ product }) => {
  const { addItem } = useActions()

  const { cart } = useTypedSelector((state) => state)

  const isExistingInCart = cart.some((p) => p.id === product.id)

  return (
    <div className="bg-purple-300 rounded p-4 text-white space-y-4 flex flex-col">
      <Image
        src={product.image}
        alt={product.title}
        width={500}
        height={500}
        className="aspect-[3/2] object-contain"
        priority={true}
      />
      <h4 className="font-semibold">{product.title}</h4>
      <p className="font-bold text-purple-900 grow">${product.price}</p>
      <button
        className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none w-full"
        onClick={() => !isExistingInCart && addItem(product)}
      >
        {isExistingInCart ? 'Already in cart' : 'Add to cart'}
      </button>
    </div>
  )
}
export default Product
