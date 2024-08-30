import { PropTypes } from "prop-types"
export const ProductDetail = ({producto = {} , handlerRemoveProduct}) => {
    return (
        <tr>
            <td>{producto.name}</td>
            <td>{producto.description}</td>
            <td>{producto.price}</td>
            <td>
                <button onClick={ () => handlerRemoveProduct(producto.name) } >
                    remove
                </button>
            </td>
        </tr>
    )
}

ProductDetail.propTypes= {
    producto:  PropTypes.object.isRequired,
    handlerRemoveProduct: PropTypes.funct.isRequired
}
