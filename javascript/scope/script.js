// function first() {
//   const x = 100;

//   function second() {
//     const y = 200;
//     console.log(x+y)
//   }

//   second();
// }

// first();

//i commented out the first code to try nexting 3 scopes
function first() {
  const x = 100;

  function second() {
    const y = 200;

    function third() {
      z = 300;
      console.log(x + y + z);
    }
    third();
  }
  second();
}
first();

function addDollarsign(value) {
  return "$" + value;
}

//implict return

const subtract = (a, b) => a * b;

console.log(subtract(500, 200));
