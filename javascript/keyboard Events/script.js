const itemInput = document.getElementById("item-input");

const onKeyPress = (e) => {
  console.log("KeyPress");
};
const onKeyUp = (e) => {
  console.log("KeyUp");
};

document.addEventListener("keyPress", onKeyPress);
document.addEventListener("keyUp", onKeyUp);
