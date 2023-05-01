const getRandom = (num) => {
    const random = Math.random();
    const roundedRandom = Math.round(random*num);
  return roundedRandom;
}
export default getRandom;