import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/products/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
    <div className="container">
        <h1>Products</h1>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto quam repellendus doloremque rerum temporibus necessitatibus ipsa minima, iste assumenda ratione nemo facilis consequatur quod inventore numquam adipisci perspiciatis. Nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto quam repellendus doloremque rerum temporibus necessitatibus ipsa minima, iste assumenda ratione nemo facilis consequatur quod inventore numquam adipisci perspiciatis. Nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto quam repellendus doloremque rerum temporibus necessitatibus ipsa minima, iste assumenda ratione nemo facilis consequatur quod inventore numquam adipisci perspiciatis. Nulla.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem iusto quam repellendus doloremque rerum temporibus necessitatibus ipsa minima, iste assumenda ratione nemo facilis consequatur quod inventore numquam adipisci perspiciatis. Nulla.</p>
    </div>
  )
}
