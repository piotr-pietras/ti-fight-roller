export const diceRoll = (diceSize: number, valueExpected: number) => {
  const rolled = Math.floor(Math.random() * diceSize) + 1;
  console.log(rolled);
  return valueExpected <= rolled;
};
