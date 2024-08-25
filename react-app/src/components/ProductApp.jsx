import { useState } from "react"

const initProducsts = [
  {
    name: 'Monitor Smsung 65',
    price: 500,
    description: 'El monitor es increible!'
  },
  {
    name: 'Iphone 14 ',
    price: 800,
    description: 'El télefono es muy bueno !!!'
  }
];

export const ProductApp = () => {

  const [products,setProducts] = useState(initProducsts);

  
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>name</th>
            <th>description</th>
            <th>price</th>
          </tr>
        </thead>
        <tbody>
          { products.map( producto => ) }
          <tr>

          </tr>
        </tbody>
      </table>
    </>
  )

}