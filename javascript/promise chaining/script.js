const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = false;
    if (!error) {
      resolve({ name: "Mason", Age: 27 });
    } else {
      reject("something went wrong");
    }
  }, 1000);
});

promise
  .then((user) => {
    console.log(user);
    return user.name;
  })
  .then((name) => {
    console.log(name);
    return name.length;
  })
  .then((namelength) => {
    console.log(namelength);
  })

  .catch((error) => console.log(error));
