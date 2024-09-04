import { useEffect, useState } from "react"
import { listProduct } from "../services/ProductService";
import { ProductGrid } from "./ProductGrid";
import { ProductForm } from "./ProductForm";



export const ProductApp = () => {

  const [products, setProducts] = useState([]);

  const [productSelected,setProductSelected] = useState({
    id:0,
    name: '',
    description: '',
    price: ''
  });

  useEffect(() => {
    const result = listProduct();
    setProducts(result);
  }, []);

  const handlerAddProduct = (product) => {

    
    if(product.id > 0){
      setProducts(products.map( prod => {
        if( prod.id == product.id ){
          return {...product}
        }
        return prod;
      } ));
    }else{
      setProducts([...products,{...product,id: new Date().getTime}]);
    }
    
  }

  const handlerRemoveProduct = (id) => {
    setProducts(products.filter( product => product.id != id));
  }

  const handlerProductSelected = ( product ) => {
    setProductSelected({...product})
  }

  
  
  return (
    <div>
      <h1>Productos!</h1>
      <div>
        <div>
          <ProductForm handlerAddProduct={handlerAddProduct} productSelected={productSelected}/>
        </div>
        <div>
          <ProductGrid products={products} handlerRemoveProduct={handlerRemoveProduct} handlerProductSelected={handlerProductSelected} />
        </div>
      </div>

    </div>
  )

}