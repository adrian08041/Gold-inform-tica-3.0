import { prismaClient } from "@/lib/prisma";
import CategoryItem from "./category-item";

const Categories = () => {
  // const categories = await prismaClient.category.findMany({});
  return (
    <div className="grid grid-cols-2 gap-x-16 gap-y-2 lg:grid-cols-6">
      {/* {categories.map((category) => (
                <CategoryItem key={category.id} category={category} />
            ))} */}
    </div>
  );
};

export default Categories;
