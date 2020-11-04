//como funciona en un loop
//var no itera dentro del for
//let intera dentro del for del 1 al 10
const anotherFunction = () => {
  for (let i = 0; i<10 ; i++ ){
    setTimeout(() => {
      console.log(i);
    }, 1000)
  }
};

anotherFunction();

//podemos crear clousures involotariamente incorrectos, tener cuidado