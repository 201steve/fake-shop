import { Product } from "../../types/types";

const detail = ({
  item: {
    category,
    title,
    description,
    image,
    price,
    rating: { rate },
  },
}: {
  item: Product;
}) => {
  return (
    <div className="product-item">
      <p className="product-item__category">{category}</p>
      <p className="product-item__title">{title}</p>
      <p className="product-item__description">{description}</p>
      <img className="product-item__image" src={image} />
      <span className="product-item__price">{price}</span>
      <span className="product-item__rating">{rate}</span>
    </div>
  );
};

export default detail;
