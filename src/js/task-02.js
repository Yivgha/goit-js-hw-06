const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsItems = ingredients.map(ingredient => {

  const elName = document.createElement("li");
  elName.textContent = ingredient;

  elName.classList.add("item");
  return elName;
});

const ingredientsList = document.querySelector("#ingredients");
ingredientsList.append(...ingredientsItems);

console.log(ingredientsList);