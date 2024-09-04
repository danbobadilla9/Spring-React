import { PropTypes } from "prop-types"
export const ProductDetail = ({producto = {} , handlerRemoveProduct, handlerProductSelected}) => {
    return (
        <tr>
            <td>{producto.name}</td>
            <td>{producto.description}</td>
            <td>{producto.price}</td>
            <td>
                <button onClick={  () => handlerProductSelected(producto) } >
                    update
                </button>
            </td>
            <td>
                <button onClick={ () => handlerRemoveProduct(producto.id) } >
                    remove
                </button>
            </td>
        </tr>
    )
}

ProductDetail.propTypes = {
    producto: PropTypes.object.isRequired,
    handlerRemoveProduct: PropTypes.func.isRequired,
    handlerProductSelected: PropTypes.func.isRequired
}

