// challenge 1

// function getCelsius(f) {
//   const celsius = (f - 32) * 5 / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temp is ${getCelsius(30)} \xB0C`);

//challenge 2

function minMax(arr) {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return {
    min,
    max,
  };
}

console.log(minMax([1, 2, 3, 4, 5, 6, 7]));

((length,width) => {
    const area = length * width
    const output = `The area of ${length} and ${width} is ${area}`;

    console.log(output);
}) 


(2,4)


let x = 100
let y = 50

function getSum (n1, n2) {
    const sum = n1 + n2
    return sum
}

const sum1 = getSum(x,y)
const sum2 = getSum(5,10)

console.log(sum1,sum2)