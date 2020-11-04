//mostrar el scope l gvar a = 'hello;
function hello(){
  let b = 'hello world';
  const c = 'hello world!';
  if (true){
    let d = 'hello world!!';
    debugger
  }
}
hello();

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
};

let mmyMoneyBox = moneyBox();
mmyMoneyBox(4); 
mmyMoneyBox(6); 
mmyMoneyBox(10); 

