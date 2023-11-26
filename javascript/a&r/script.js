const text = document.querySelector("p");
const itemList = document.querySelector(".item-list");
const items = itemList.querySelectorAll("li");

function run() {
  //className
  //   console.log(itemList.className);
  //   text.className = "card dark";

  //classList
  //   console.log(itemList.classList)

  itemList.classList.forEach((c) => console.log(c));

  // text.classList.add('dark')
  // text.classList.toggle('dark')
  // text.classList.toggle('hidden')

  //change style directly

  // itemList.style.lineHeight = '3'

  items.forEach((item, index) => {
    item.style.color = "red";

    if (index === 2) {
      item.style.fontSize = "18px";
      item.style.color = "blue";
    }
  });
}

// document.querySelector("button").onclick = run;

//events

const clearbtn = document.querySelector("button");

clearbtn.addEventListener("click", () => alert("hahaha"));

// function onClear (){
//     const itemList = document.querySelector('ul')
//     const items = document.querySelectorAll('li')

//     items.forEach ((item) => item.remove)
// }

const H1 = document.querySelector("h1");

const onClick = () => console.log("Click event");

const onDoubleClick = () => {
  if (document.body.style.backgroundColor !== "black") {
    document.body.style.backgroundColor = "black";
    document.body.style.color = "white";
  } else {
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
  }
};

const onRightClick = () => console.log("Click event");

H1.addEventListener("click", onClick);
H1.addEventListener("dblclick", onDoubleClick);
H1.addEventListener("contextmenu", onRightClick);


