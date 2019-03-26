// Higher Order Functions

function sing() {
  console.log("twinkle twinkle...");
  console.log("how I wonder..");
}

setInterval(sing, 1000);


// Anonymous function

setInterval(function(){
  console.log("I am an anon function");
  console.log("This is awesome");
}, 2000)
