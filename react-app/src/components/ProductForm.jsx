import { useEffect, useState } from "react"


const initialDataForm = {
    id:0,
    name: '',
    description: '',
    price: ''
}
export const ProductForm = ({handlerAddProduct, productSelected}) => {

    const [form, setForm] = useState(initialDataForm);

    const { name, description, price } = form;


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
                    style={{ 'marginBottom': '10px' }}
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
                    style={{ 'marginBottom': '10px' }}
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
                    style={{ 'marginBottom': '10px' }}
                    name="price"
                    value={price}
                    type="text"
                    onChange={(e) => setForm({
                        ...form, price: e.target.value
                    })}
                />
            </div>


            <div>
                <button type="submit" >
                    Save
                </button>
            </div>



        </form>
    )

}