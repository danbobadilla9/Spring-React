// 

function sayHello(hola = 'valor default'){
    console.log('Hola mundo '+hola);
    const greeting = " Desde la funcion normal"
    return greeting
}

const greeting = sayHello('israel');
console.log(greeting);
sayHello();

// FUNCION FLECHA O LAMBDA 
const sayHello2 = () => {
    console.log('Hola mundo2');
}

const sayHello3 = function ()  {
    console.log('fUNCION ANONIMA');
}
sayHello3();
sayHello2();

(() => {
    console.log('Funcion que se llama así misma');
})();


const add = (a,b) => a+b;
console.log('suma de 5 + 10: '+add(5,10));