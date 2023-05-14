import { useQuery } from "react-query";
import { QueryKeys, fetcher } from "../api/fetcher";
import { Product } from "../../types";
import ProductItem from "../../components/productItem";

const ProductsList = () => {
  const { data } = useQuery<Product[]>(QueryKeys.PRODUCTS, () =>
    fetcher({
      method: "GET",
      path: "/products",
    })
  );

  return (
    <div>
      <ul className="products">
        {data?.map((product: Product) => (
          <ProductItem {...product} key={product.id} />
        ))}
      </ul>
    </div>
  );
};

export default ProductsList;
