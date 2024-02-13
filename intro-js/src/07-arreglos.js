
// un arreglo es un objeto, una lista de colecciones 
const products = ['Mesa','silla','cama','teclado'];

products.push(' nuevo valor');
products.push(' nuevo valor2');
products.push(' nuevo valor3','concatenando');

console.log(products);

products.forEach( product => console.log(product));
products.forEach( console.log);
products.forEach(function(el){
    console.log(el);
});

for(const prod of products){
    console.log(prod);
}


for(let index = 0; index < products.length; index++){
    const element = products[index];
    console.log(element);
}