import "./ProductCard.css";
import ReduxAddToCart from "../ReduxAddToCart";
import Rating from "../Rating";
function ProductCard({ product }) {
  console.log("ProductCard" + product.id);

  return (
    <div className="ProductCard">
      <h3>{product.title}</h3>
      <p>{product.price.value}</p>
      <Rating rating={product.rating.value} maxRating={5} size={1} />
      <ReduxAddToCart product={product} />
    </div>
  );
}
export default ProductCard;
