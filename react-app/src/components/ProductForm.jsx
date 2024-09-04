import { useEffect, useState } from "react"


const initialDataForm = {
    id:0,
    name: '',
    description: '',
    price: ''
}
export const ProductForm = ({handlerAddProduct, productSelected}) => {

    const [form, setForm] = useState(initialDataForm);

    const { id ,name, description, price } = form;


    useEffect(() => {
        setForm({...productSelected})
    },[productSelected])


    return (
        <form onSubmit={ (e => {
            e.preventDefault();
            if(!name || !description || !price){
                alert('Debe completar los datos del formulario');
                return;
            }
            console.log(form);
            handlerAddProduct(form);
            setForm(initialDataForm);
        }) } >
            <div>
                <input
                    placeholder="name"
                    className="form-control my-3 w-75"
                    name="name"
                    value={name}
                    type="text"
                    onChange={(e) => setForm({
                        ...form, name: e.target.value
                    })}
                />
            </div>

            <div>
                <input
                    placeholder="description"
                    className="form-control my-3 w-75"
                    name="description"
                    value={description}
                    type="text"
                    onChange={(e) => setForm({
                        ...form, description: e.target.value
                    })}
                />
            </div>

            <div>
                <input
                    placeholder="price"
                    className="form-control my-3 w-75"
                    name="price"
                    value={price}
                    type="text"
                    onChange={(e) => setForm({
                        ...form, price: e.target.value
                    })}
                />
            </div>


            <div>
                <button type="submit" className="btn btn-primary">
                    {id > 0 ? 'Update': 'Create'}
                </button>
            </div>



        </form>
    )

}