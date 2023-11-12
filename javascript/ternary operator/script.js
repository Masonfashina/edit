//normal operator

const age = 19;

if (age >= 18) {
  console.log("You can Vote!");
} else {
  console.log("You can not Vote");
}

// Ternary operator

age >= 18 ? console.log("You can Vote!") : console.log("you can not Vote");

const canVote = age >= 18 ? true : false;

console.log(canVote);

//multiple statements

const auth = true;
let redirect;

if (auth) {
  alert("welcome to the dashboard");
  redirect = "/dashboard";
} else {
  alert("access denied mf");
  redirect = "/login";
}

console.log(redirect);
