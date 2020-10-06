
const input = ['Q'];
const gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);
const print = this.print || console.log;
const deckOfCards = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
const card = gets();
let index = 0;
do {
  const face = deckOfCards[index];
  print(`${face} of spades, ${face} of clubs, ${face} of hearts, ${face} of diamonds`);
} while (deckOfCards[index++] !== card);