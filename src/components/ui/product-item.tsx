import { ProductWithTotalPrice } from "@/helpers/product";

import Image from "next/image";
import { Badge } from "./badge";
import { ArrowDown, ArrowDownIcon } from "lucide-react";

interface ProductItemProps {
  product: ProductWithTotalPrice;
}

const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex max-w-[156px] flex-col gap-4">
      <div className="relative flex h-[170px] w-[156px] items-center justify-center rounded-lg bg-backgroundItems">
        {/* imagem */}
        <Image
          src={product.imageUrls[0]}
          height={0}
          width={0}
          sizes="100vw"
          className="max-w-[80%]: h-auto max-h-[70%] w-auto"
          style={{ objectFit: "contain" }}
          alt={product.name}
        />
        {product.discountPercentage > 0 && (
          <Badge   variant={"secondary"} className=" absolute  px-2 py-[2] left-1 top-1">
            <ArrowDownIcon  size={14}/> {product.discountPercentage}%
          </Badge>
        )}
      </div>

      <div>
        {/* texto */}

        <p className="overflow-hidden text-ellipsis whitespace-nowrap text-sm text-white">
          {product.name}
        </p>

        <div className="flex items-center gap-2 text-white">
          {product.discountPercentage > 0 ? (
            <>
              <p className="  font-semibold">
                {" "}
                R$ {product.totalPrice.toFixed(2)}{" "}
              </p>
              <p className="text-xs line-through opacity-75">
                R$ {Number(product.basePrice).toFixed(2)}
              </p>
            </>
          ) : (
            <p className="text-sm font-semibold">
              R$ {product.basePrice.toFixed(2)}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
