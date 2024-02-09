
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

console.log(invoice);
console.log('Cliente ->'+invoice.client);
// invoice.client = 'israel segundo'
console.log('Cliente ->'+invoice.client);
console.log(typeof invoice);
console.log(invoice.client);
invoice.client.name='jose perez'
console.log(invoice.client);
 

console.log(invoice.greeting());
console.log('Calculando el total: '+invoice.total());




