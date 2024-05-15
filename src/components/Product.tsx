import { ProductType } from "../context/ProductProvider";
import { ReducerActionType, ReducerAction } from "../context/CartProvider";
import { ReactElement, memo } from "react";

type PropsType = {
  product: ProductType;
  dispatch: React.Dispatch<ReducerAction>;
  REDUCER_ACTIONS: ReducerActionType;
  inCart: boolean;
};

const Product = ({
  product,
  dispatch,
  REDUCER_ACTIONS,
  inCart,
}: PropsType): ReactElement => {
  const img = new URL(`../images/${product.sku}.jpg`, import.meta.url).href;
  console.log(img);
  const onAddToCart = () =>
    dispatch({ type: REDUCER_ACTIONS.ADD, payload: { ...product, qty: 1 } });
  const itemCart = inCart ? "Item in Cart" : null;
  const content = (
    <article>
      <h3>{product.name}</h3>
      <img src={img} alt={product.name} />
      <p>
        {new Intl.NumberFormat("en-US", {
          style: "currency",
          currency: "USD",
        }).format(product.price)}
        {itemCart}
      </p>
      <button onClick={onAddToCart}>Add to Cart</button>
    </article>
  );
  return content;
};

function areProductsEqual(
  { product: prevProduct, inCart: prevIncart }: PropsType,
  { product: nextProduct, inCart: nextIncart }: PropsType
) {
  return (
    Object.keys(prevProduct).every((key) => {
      return (
        prevProduct[key as keyof ProductType] ===
        nextProduct[key as keyof ProductType]
      );
    }) && prevIncart === nextIncart
  );
}

const MemoizedProduct = memo<typeof Product>(Product, areProductsEqual);

export default MemoizedProduct;
