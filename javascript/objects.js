// manipulating objects

let x;

const person = {
  name: "John",
  age: 30,
  isAdmin: true,
  address: {
    city: "New York",
    state: "NY",
    street: "main_str",
  },

  hobbies: ["sports", "science"],
};

x = person.name;
x = person.isAdmin;
x = person.age;
x = person.address.city;
x = person.hobbies;
person.hobbies.push("gaming");
person.hobbies.unshift("Football");

person.name = "Jane Doe";

x = person;

x = person.age;

const todos = [
  { id: 1, text: "learn react", completed: false },
  { id: 2, text: "learn angular", completed: false },
  { id: 3, text: "learn vue", completed: false },
  { id: 4, text: "learn javascript", completed: false },
];

x = todos[{}];

console.log(x);
