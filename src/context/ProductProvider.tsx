import { ReactElement, createContext, useEffect, useState } from "react";

export type ProductType = {
  sku: string;
  name: string;
  price: number;
};

// const initState: ProductType[] = [];

const initState: ProductType[] = [
  {
    sku: "item0001",
    name: "Wiget",
    price: 9.99,
  },
  {
    sku: "item0002",
    name: "Premium Wiget",
    price: 9.99,
  },
  {
    sku: "item0003",
    name: "Deluxe Wiget",
    price: 9.99,
  },
];

export type UseProductContextType = { products: ProductType[] };

const initContextState: UseProductContextType = { products: [] };

const ProductContext = createContext<UseProductContextType>(initContextState);

type ChildrenType = { children?: ReactElement | ReactElement[] };
export const ProductProvider = ({ children }: ChildrenType): ReactElement => {
  const [products, setProducts] = useState<ProductType[]>(initState);

  // useEffect(() => {
  //   const fecthProducts = async (): Promise<ProductType[]> => {
  //     const data = await fetch("http://localhost:3500/products")
  //       .then((res) => {
  //         return res.json();
  //       })
  //       .catch((err) => {
  //         if (err instanceof Error) console.log(err.message);
  //       });
  //     return data;
  //   };

  //   fecthProducts().then((products) => setProducts(products));
  // }, []);
  return (
    <ProductContext.Provider value={{ products }}>
      {children}
    </ProductContext.Provider>
  );
};

export default ProductContext;
