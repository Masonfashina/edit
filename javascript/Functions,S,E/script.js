function registerUser(user) {
  return user + " is Registered";

}

//Objects as params

function loginUser(user) {
    return `The user "${user.name}" with the id of ${user.id} is logged in`
}

const user = {
    id: 1,
    name: "Mason"
}

console.log(loginUser(user));