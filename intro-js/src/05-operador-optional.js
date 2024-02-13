
const invoice = {
    id:10,
    name: 'Compras de oficina',
    date:  new Date(),
    client: {
        id:2,
        name: 'dan israel',
        age:24
    },
    items:[
        {
            producto:'Keyboard',
            price:399,
            quantity: 2,
        },
        {
            producto:'mouse',
            price:200,
            quantity:1
        },
        {
            producto:'paper',
            price:100,
            quantity:10
        }
    ],
    total: function(){
        let total = 0;
        this.items.forEach( item => {
            total = total + item.price * item.quantity;
        })
        return total;
    },
    //en funciones flecha el this no es reconocido unicmaente con function sirve
    greeting: function(){
        return `Hola ${this.client.name}`;
    }
}

if(invoice.company?.name){
    console.log('No esta vacio');
}else{
    console.log('Esta vacio');
}

// Esto retornara un undefined porque no esta definido en el objeto 
console.log(invoice.company);
// este de aqui genera un error porque estamos pidiendo la propiedad de un undefined
console.log(invoice.company.name);
// evitamos el error utilizando el operador:? 
console.log(invoice.company?.name);



