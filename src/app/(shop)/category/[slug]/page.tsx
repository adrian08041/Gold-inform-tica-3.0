import { Badge } from "@/components/ui/badge";
import ProductItem from "@/components/ui/product-item";

import { prismaClient } from "@/lib/prisma";
import { CATEGORY_ICON } from "../../constants/category-icon";
import { computeProductTotalPrice } from "@/helpers/product";

const CategoryProducts = async ({ params }: any) => {
  const category = await prismaClient.category.findFirst({
    where: {
      slug: params.slug,
    },
    include: {
      products: true,
    },
  });
  if (!category) return null;

  return (
    <div className="flex flex-col gap-8 p-5 lg:p-10">
      <Badge className="w-fit gap-1 border-2 border-dourado px-3 py-[0.375rem] text-base uppercase">
        {CATEGORY_ICON[params.slug as keyof typeof CATEGORY_ICON]}
        {category.name}
      </Badge>
      <div className="grid grid-cols-2 gap-8 lg:flex lg:flex-wrap  ">
        {category.products.map((product) => (
          <ProductItem
            key={product.id}
            product={{
              ...product,
              totalPrice: computeProductTotalPrice(product),
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default CategoryProducts;
