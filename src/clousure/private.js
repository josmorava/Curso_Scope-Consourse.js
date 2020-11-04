//Variables privadas
const person = () => {
  var saveName = 'name';
  return{
    getName: () => {
      return saveName;
    },
    setName : (name) => {
      saveName = name;
    },
  };
};
newPerson = person(); //asignando
console.log(newPerson.getName()); //trayendo el valor de getName
newPerson.setName('oscar');//Agg un nuevo valor a name
console.log(newPerson.getName());//trayendo getName con el nuevo valor
//Foma de crear un valor privado para que la única forma de acceder a ella sea mediante las funciones creadas y no directamente