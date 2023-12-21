fetch("http://httpstat.us/200")
//check for specific code

.then((response) => {
    if (response.status === 404) {
      throw new Error("Not Found");
    } else if (response.status === 500) {
      throw new Error("server error");
    } else if (response.status != 200) {
      throw new Error("response failed");
    }
    return response;
  })
  .then(() => {
    console.log("success");
  })
  .catch((error) => {
    console.log(error);
  });
