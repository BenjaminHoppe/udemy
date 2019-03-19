console.log('Print all numbers between -10 and 19');

for(var num = -10; num <= 19; num++){
  console.log(num);
}

console.log('Print all even numbers between 10 and 40');

for(var num2 = 10; num2 <=40; num2 +=2) {
  console.log(num2);
}

console.log('Pring all odd numbers between 300 and 333');

for(var i=300; i <= 333; i++) {
  if(i % 2 === 1) {
  console.log(i);
  }
}


console.log('Print all numbers divisable by 5 AND 3 between 5 and 50');

for (var num3 = 5; num3 <= 50; num3++) {
  if(num3 % 5 === 0 && num3 % 3 === 0) {
    console.log(num3);
  }
}
