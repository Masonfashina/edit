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

// actually you can just do it all by looking for multiples and adding a 'continue'

// Hypothetical variables representing Eric Tran's skills
// var hasReactExperience = true;
// var hasAngularExperience = false;
// let hasNodeJSExperience = true;

// // Conditions using if and else if statements
// if (hasReactExperience && !hasAngularExperience) {
//   console.log("Eric Tran is proficient in React.");
// } else if (!hasReactExperience && hasAngularExperience) {
//   console.log("Eric Tran is proficient in Angular.");
// } else if (hasNodeJSExperience) {
//   console.log("Eric Tran has experience with Node.js.");
// } else {
//   console.log("Eric Tran's specific skills are not covered by the provided conditions.");
// }

//  const i = 25
// {
  
//   console.log(i)
// }

// alternate method

/*for (i = 1; i <= 100; i++) {

  let fizz = (i % 3 === 0 && i % 5 !== 0);
  let buzz = (i % 5 === 0 && i % 3 !== 0);
  let fizzBuzz = (i % 5 === 0 && i % 3 === 0);

   if (fizz) console.log("Fizz");
   else if (buzz) console.log("buzz");
   else if (fizzBuzz) console.log("fizzBuzz");
   else console.log(i);
}*/