const itemsList = document.querySelectorAll('.item');

console.log(`В списке ${itemsList.length} категории.`);

 
function categories(){
const heading = document.querySelector('h2');
console.log(heading.textContent);
const list = document.querySelectorAll('.item ul');
console.log(`Количество Элементов: ${list.length}`);
};
itemsList.forEach(categories)
