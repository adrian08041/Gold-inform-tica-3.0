import { Category } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";


interface CategoryItemProps {
  category: Category;
}

const CategoryItem = ({ category }: CategoryItemProps) => {
  return (
    <Link href={`/category/${category.slug}`}>
      <div className="flex flex-col">
        <div className="bg-category-item-gradient flex h-[150px] w-full items-center justify-center rounded-tl-lg rounded-tr-lg bg-dourado">
          {/* IMAGEM */}
          <Image
            src={category.imageUrl}
            alt={category.name}
            width={0}
            height={0}
            sizes="100vw"
            className="h-auto max-h-[70%] w-auto max-w-[80%] object-contain"
          />
        </div>
        <div className="rounded-bl-lg rounded-br-lg bg-backgroundItems py-3 text-white">
          {/* TEXTO */}
          <p className="text-center text-sm font-semibold">{category.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryItem;
