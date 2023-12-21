const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ name: "john", age: 20 });
  }, 1000);
});

async function getPromise() {
  const response = await promise;
  console.log(response);
}
// getPromise();

const getPosts = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  console.log(data);
};

getPosts()