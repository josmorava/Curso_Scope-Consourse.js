//utililizar elementos dentro de los bloques de codigo locales
const HelloWorld = () => {
  const hello = 'hello';
  console.log(hello);
};
HelloWorld();

//No se pueden accder a valores de scope local de forma global.

//ambito lexico, las variables trabajan con los datos dentro de los bloques de codigo. Más no modifica las variables que estén fuera de él.
