import Product from '../components/product'
import ProductsCart from '../components/products-cart'
import { useGetProductsQuery } from '../store/product/product.api'
import { IProduct } from '../store/product/product.types'

export default function Shop() {
  const { data, isLoading, error } = useGetProductsQuery(6)

  if (error) {
    if ('status' in error) {
      // you can access all properties of `FetchBaseQueryError` here
      const errMsg = 'error' in error ? error.error : JSON.stringify(error.data)

      return (
        <div>
          <div>An error has occurred:</div>
          <div>{errMsg}</div>
        </div>
      )
    } else {
      // you can access all properties of `SerializedError` here
      return <div>{error.message}</div>
    }
  }
  return (
    <>
      <section className="py-6">
        <div className="container">
          <div className="space-y-6">
            <h1 className="font-bold text-xl">Shop</h1>

            <ProductsCart />

            {isLoading ? (
              'Loading...'
            ) : (
              <div className="grid gap-4 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                {data?.map((product: IProduct) => {
                  return <Product key={product.id} product={product} />
                })}
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  )
}
