import { useEffect, useState } from "react"
import { PropTypes } from "prop-types"
import { ProductDetail } from "./ProductDetail"


export const ProductGrid = ({ products = [] , handlerRemoveProduct }) => {

    return (

        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>price</th>
                    <th>remove</th>
                </tr>
            </thead>
            <tbody>
                {products.map(producto => {
                    return <ProductDetail producto={producto} key={producto.name} handlerRemoveProduct={handlerRemoveProduct}/>
                })}

            </tbody>
        </table>

    )

}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired,
    handlerRemoveProduct: PropTypes.funct.isRequired
}
