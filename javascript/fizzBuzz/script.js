for (i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
}

// you can also get 'fizzBuzz' by shortening this expression 'if (i % 3 === 0 && i % 5 === 0)' to look for 15, as anything divisible by 15 is divisible by 3 and 5!