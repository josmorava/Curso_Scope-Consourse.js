//alcance global de las funciones
var hello = 'hello'; 
let wolrd = 'Hello wolrd'
const helloWorld = 'Hello world'
console.log(hello);

const anotherFunction = () => {
  console.log(hello)
  console.log(wolrd)
  console.log(helloWorld)
}

anotherFunction();

//let y const no permiten reestablecer valores previamente establecidos, solo var puede ser reasignada.

