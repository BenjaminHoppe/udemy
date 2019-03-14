var age = Number(prompt('How old are you?'));

if (age < 0) {
  console.log(`come back once yo're out of the womb`);
}
if (age === 21 ) {
  console.log('happy 21st birthday');
}
if (age % 2 != 0 ) {
  console.log('Your age is odd');
}

if (age % Math.sqrt(age) === 0) {
  console.log('Your age is a perfect square');
}
