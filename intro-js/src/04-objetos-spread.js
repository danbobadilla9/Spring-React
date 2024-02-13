
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


// las dos variables almacenan a la misma referencia a la memoria donde esta el objeto
const invoice2 = invoice;

console.log(invoice2);
invoice.name = 'pablito'
console.log(invoice2);

// Como los dos apuntan a la misma referencia esto quiere decir que son lo mismo 
console.log(invoice === invoice2);

// de esta menara creamos un nuevo objeto
const invoice3 = {... invoice};

console.log(invoice === invoice3);



