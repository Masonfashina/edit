const itemInput = document.getElementById("item-input");
const priorityInput = document.getElementById("priority-input");
const checkbox = document.getElementById("checkbox");
const heading = document.querySelector("h1");

function oninput(e) {
  console.log(e.target.value);
}

function onChecked(e) {
    console.log(e.target.checked)
}

function onFocus(e){
    console.log('Input is focused')
    itemInput.style.outlineStyle= 'solid';
    itemInput.style.outlineWidth= '1px';
    itemInput.style.color= 'green';
}

function onBlur(e){
    console.log('Input is blurred')
    itemInput.style.outlineStyle= 'none'

}


itemInput.addEventListener("input", oninput);
priorityInput.addEventListener("input", oninput);
checkbox.addEventListener("input", onChecked);
itemInput.addEventListener("focus", onFocus);
itemInput.addEventListener("blur", onBlur);
