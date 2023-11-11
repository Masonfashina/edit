const x = 5;
const y = 10;
if (true) {
  console.log("This is true");
}

if (false) {
  console.log("This is false");
}

if (x == 5) {
  console.log(`${x} is Equal to 5`);
} else {
  console.log(`${x} is NOT equal to 5`);
}
//else ifs and stuff

const d = new Date(29,3,2024,9,0,0);
const hour = d.getHours();
// const minute = d.getMinute ();

if (hour > 18){
    console.log("Good Evening")
} else if (hour < 12){
    console.log('Good Morning')
    if (hour <= 12) {
        console.log('Wake up Bitch!')
    }
}else {
    console.log('Good Afternoon')
}
