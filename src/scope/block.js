//Comportamiento de scope dentru de un bloque de código
const fruits = () => {
  if (true) {
    var fruits1 = 'apple';
    var fruits2 = 'banana';
    var fruits3 = 'kiwi';
  }
  console.log(fruits1)
  console.log(fruits2)
  console.log(fruits3)
}

fruits();

//La Variable var puede ser accedida en cualquier parte del bloque de código, con const y let no.

let x = 1;//valor global, no se modifica
{
  let x = 2;//valor local, no se modifica
  console.log(x);
}
console.log(x);




