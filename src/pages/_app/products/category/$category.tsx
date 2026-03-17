import { createFileRoute } from "@tanstack/react-router";
import { ProductList } from "../../../../components/ProductList";
import { products } from "../../../../mocks/products";

export const Route = createFileRoute("/_app/products/category/$category")({
  component: RouteComponent,
});

function RouteComponent() {

    const { category } = Route.useParams();

    const filteredProducts = products.filter(product => (product.category?.name ?? "").toLowerCase() === category.toLowerCase());

  return (
    <section className="container pt-40 md:pt-50 md:px-10 lg:min-h-[80vh]">
      <h1 className="text-3xl text-center mb-3">Lista de Produtos</h1>

      <h2 className="text-center mb-10">
        Conforto excepcional para suas aventuras do dia-a-dia
      </h2>

      {filteredProducts.length === 0 ? (
        <p className="text-center text-gray-500">Nenhum produto encontrado para a categoria.</p>
      ) : (
        <ProductList products={filteredProducts} />
      )}

    </section>
  );
}
