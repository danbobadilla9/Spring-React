
// un arreglo es un objeto, una lista de colecciones 
const products = ['Mesa','silla','cama','teclado'];
const products2 = products.concat([' agregando valores extra']);
products.push(' nuevo valor');
products.push(' nuevo valor2');
products.push(' nuevo valor3','concatenando');

const fruits = ['peras','manzanas','sandias','frutillas'];

// crearemos una combinacion de ambos en un nuevo arreglo
const mercado = [... products, ...fruits,'lechuga','papas',...products2];
console.log(mercado);