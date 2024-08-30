import { useEffect, useState } from "react"
import { listProduct } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { ProductForm } from "./ProductForm";



export const ProductApp = () => {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    const result = listProduct();
    setProducts(result);
  }, []);

  const handlerAddProduct = (product) => {
    setProducts([...products,{...product}]);
  }

  const handlerRemoveProduct = (name) => {
    setProducts(products.filter( product => product.name != name));
  }
  
  return (
    <div>
      <h1>Productos!</h1>
      <div>
        <div>
          <ProductForm handlerAddProduct={handlerAddProduct} />
        </div>
        <div>
          <ProductGrid products={products} handlerRemoveProduct={handlerRemoveProduct}/>
        </div>
      </div>

    </div>
  )

}