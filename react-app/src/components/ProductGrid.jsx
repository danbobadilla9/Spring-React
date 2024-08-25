import { useEffect, useState } from "react"
import { PropTypes } from "prop-types"
import { ProductDetail } from "./ProductDetail"


export const ProductGrid = ({ products = [] }) => {

    return (

        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>description</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>
                {products.map(producto => {
                    return <ProductDetail producto={producto} key={producto.name} />
                })}

            </tbody>
        </table>

    )

}

ProductGrid.propTypes = {
    products: PropTypes.array.isRequired
}
