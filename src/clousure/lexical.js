//ámbito léxico en clousures: como se crean clousrues que se ejecuten entre sí y como cada uno recuerda los valores que tiene al momento de ejecutarse

//ambito léxico: la utilización de las variables dentro de las funciones en el alcanse que tienen.

const buildCount = (i) => {
  let count = i;
  const displayCount = () => { //clousure
    console.log(count++); //ambito lexico
  };
  return displayCount;
};
const myCount = buildCount(1);
myCount();
myCount();
myCount();

const myOtherCount = buildCount(10);
myOtherCount();
myOtherCount();

