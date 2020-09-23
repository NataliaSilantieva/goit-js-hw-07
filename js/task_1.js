const itemsList = document.querySelectorAll('.item');

console.log(`В списке ${itemsList.length} категории.`);



Array.prototype.forEach.call(itemsList, (element) => {
    const heading = element.querySelector('h2').innerHTML; 
    const itemsAmount = element.querySelectorAll('li').length;
    console.log(`Категория: ${heading}  `);
    console.log(`Количество элементов: ${itemsAmount}`)
});
