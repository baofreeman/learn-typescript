import { useContext } from "react";
import ProductContext, {
  UseProductContextType,
} from "../context/ProductProvider";

const useProduct = (): UseProductContextType => {
  return useContext(ProductContext);
};

export default useProduct;
