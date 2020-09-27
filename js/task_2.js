

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
  ];
 const ul = document.getElementById('ingredients'); 
 
 const ingredientsList = ingredients.map(ingredient => { 
 const list = document.createElement('li');
 list.textContent = ingredient;
 return list;
});

  
  ul.append(...ingredientsList);
  

  
  

 
 