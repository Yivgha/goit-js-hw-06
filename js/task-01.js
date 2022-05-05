
const categoriesAll = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesAll.length}`);


const categoryName = document.querySelectorAll(".item")
    .forEach((category) => {
const head = category.firstElementChild.textContent;
const elNum = category.lastElementChild;
const num = elNum.children.length;
    console.log("Category:" + head),
    console.log("Elements:" + num)
});

