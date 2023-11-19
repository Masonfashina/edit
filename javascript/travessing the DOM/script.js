let output;

//get child elements

const parent = document.querySelector(".parent");

output = parent.children;
output = parent.children[1].innerText;


parent.children[1].innerText = 'child Two'
parent.children[1].style.color = 'palevioletred'

parent.firstElementChild.innerText = 'Child One'
parent.firstElementChild.style.color = 'blue'
parent.lastElementChild.innerText = 'Child Three'
parent.lastElementChild.style.color = 'grey'


//get parent element from child

const child = document.querySelector('.child')

output = child.parentElement

child.parentElement.style.border = '1px solid #ccc'
child.parentElement.style.padding = '10px'

//sibling element


const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem;
output = secondItem.nextElementSibling


secondItem.nextElementSibling.style.color = 'green'
secondItem.previousElementSibling.style.color = 'yellow'

console.log(output);
