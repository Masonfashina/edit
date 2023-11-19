let output;

const parent = document.querySelector(".parent");

output = parent.childNodes;
output = parent.childNodes[3].textContent;
output = parent.childNodes[3].outerHTML;


const child = document.querySelector('.child')

output = child.parentNode

child.parentNode.style.backgroundColor = '#ccc';
child.parentNode.style.padding = '12px';
child.parentNode.style.borderRadius = '12px';

//siblins

const secondItem = document.querySelector('.child:nth-child(2)')

output = secondItem.nextSibling

console.log(output);

