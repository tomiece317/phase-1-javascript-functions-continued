// Code your solutions in this file
const names = ["Charlie", "Samip", "Ali"];
function writeCards(names, event) {
  const message = [];
  for (let i = 0; i < names.length; i++) {
    message[i] = `Thank you, ${names[i]}, for the wonderful ${event} gift!`;
  }

  return message;
}

function countDown(number) {
  while (number >= 0) {
    console.log(number--);
  }
}
countDown(10);
