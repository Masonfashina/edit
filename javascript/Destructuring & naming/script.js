const firstName = "Mason";
const lastName = "Fashina";
const age = 27;

const person = {
  firstName,
  lastName,
  age,
};

console.log(person.firstName);

// Destructuring

const todo = {
  id: 1,
  text: "learn react",
  completed: false,
  user: {
    name: "Mason",
  },
};

const { id, text, user } = todo;

console.log(id, text, user);
