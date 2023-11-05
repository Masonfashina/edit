function registerUser(user) {
  return user + " is Registered";
}

//Objects as params

function loginUser(user) {
  return `The user "${user.name}" with the id of ${user.id} is logged in`;
}

const user = {
  id: 1,
  name: "Mason",
};

function getRandom(arr) {
  const randomIndex = Math.floor(Math.random() * arr.length);

  const item = arr[randomIndex];

  console.log(item);
}

getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
