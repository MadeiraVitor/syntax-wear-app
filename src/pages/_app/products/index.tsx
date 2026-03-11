import { createFileRoute } from '@tanstack/react-router'
import { ProductList } from '../../../components/ProductList'
import { products } from '../../../mocks/products'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container pt-40 md:pt-50 pb-10 md:px-10">
        <h1 className='text-3xl text-center mb-3'>Lista de Produtos</h1>

        <h2 className='text-center mb-10'>Conforto excepcional para suas aventuras do dia-a-dia</h2>

        <ProductList products={products} />
    </div>
  )
}
