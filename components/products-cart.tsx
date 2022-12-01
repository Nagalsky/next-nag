import { FC } from 'react'
import { useTypedSelector } from '../hooks/useTypedSelector'
import Image from 'next/image'
import { IProduct } from '../store/product/product.types'
import { useActions } from '../hooks/useActions'

const ProductsCart: FC = () => {
  const { cart } = useTypedSelector((state) => state)

  const { removeItem } = useActions()

  return (
    <>
      <p>Im a cart:</p>

      <div>
        {cart.length ? (
          <>
            <div className="flex flex-col gap-4">
              {cart.map((product) => (
                <div
                  className="bg-purple-300 rounded p-4 text-white space-y-4"
                  key={product.id}
                >
                  <div className="flex items-center gap-4">
                    <Image
                      src={product.image}
                      alt={product.title}
                      width={100}
                      height={80}
                      priority={true}
                    />
                    <div className="grow">
                      <h4 className="font-semibold">{product.title}</h4>
                      <p className="font-bold text-purple-900">
                        ${product.price}
                      </p>
                    </div>
                  </div>

                  <button
                    className="text-white bg-purple-700 hover:bg-purple-800 focus:ring-4 focus:ring-purple-500 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
                    onClick={() => removeItem({ id: product.id })}
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </>
        ) : (
          <p>Cart is empty</p>
        )}
      </div>
    </>
  )
}

export default ProductsCart
