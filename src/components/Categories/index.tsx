import { categories } from "../../mocks/categories";
import { Button } from "../Button";
import { useRouter } from "@tanstack/react-router";

export const Categories = () => {
  const router = useRouter();

  return (
    <section className="container flex gap-2.5 md:grid md:grid-cols-2 lg:grid lg:grid-cols-4 lg:gap-4 mb-10 overflow-x-auto scrollbar-hide snap-x snap-mandatory">
      {categories.map((category, index) => {
        return (
          <div
            key={index}
            style={{ backgroundImage: `url(${category.image})` }}
            className="h-125 bg-cover bg-center rounded-[20px] relative overflow-hidden flex items-center justify-center shrink-0 w-[95%] md:w-full snap-center"
          >
            <div className="absolute inset-0 bg-black/30"></div>

            <div className="relative text-white">
              <Button
                variant="secondary"
                onClick={() =>
                  router.navigate({
                    to: `/products/category/${category.name.toLowerCase()}`,
                  })
                }
              >
                {category.name}
              </Button>
            </div>
          </div>
        );
      })}
    </section>
  );
};
