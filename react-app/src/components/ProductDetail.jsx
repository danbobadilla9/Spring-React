import { PropTypes } from "prop-types"
export const ProductDetail = ({producto = {}}) => {
    return (
        <tr>
            <td>{producto.name}</td>
            <td>{producto.description}</td>
            <td>{producto.price}</td>
        </tr>
    )
}

ProductDetail.propTypes= {
    producto:  PropTypes.object.isRequired
}
