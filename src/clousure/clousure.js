const moneyBox = (coins) => {
  var saveCoins = 0;
  saveCoins += coins;
  console.log(`MoneyBox: ${saveCoins}`);
}
moneyBox(5);
moneyBox(10);

//Un clousure combina el ámbito léxico junto a una función

const moneyBox = () => {
  var saveCoins = 0;
  const countCoins = (coins) => {
    saveCoins += coins;
    console.log(`MoneyBox: $${saveCoins}`);
  }
  return countCoins;
};
//comobina una función junto al ámbito donde se declara
let mmyMoneyBox = moneyBox();
mmyMoneyBox(4); //4
mmyMoneyBox(6); //10
mmyMoneyBox(10); //20

