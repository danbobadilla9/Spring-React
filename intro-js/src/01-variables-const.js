console.log('Hola mundo');
// Ya no se utiliza var
var name = 'Dan';
// se utliza let
let name2 = "israel";
console.log('Hola mundo -> '+name2);
name2 = 'bobadilla'
console.log('Hola mundo -> '+name2);

// constantes, no aceptan otros valores 
const lastname = 'segundo';
console.log('Apellido '+lastname);

const condicion = true;
if(condicion){
    name2 = 'Ale';
    // let name2 = 'DAN ISRAEL'
    console.log(name2);
}

console.log(name2);

// Utilizando template string 

console.log(`Mi nombre es ${'Dan israel'}`);