const heights = [150, 169, 185, 170];
const ghost = 167;

const greaterThanGhost = heights.filter((height) => height > ghost);
console.log(greaterThanGhost.length);

const words = ["hello", "ghost", "apple", "grape", "Lemon"];
const includeLwords = words.filter((word) =>
  word.toLocaleLowerCase().includes("l")
);
console.log(includeLwords);
