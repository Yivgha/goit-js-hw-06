
const categoriesAll = document.querySelectorAll(".item");
console.log(`Number of categories: ${categoriesAll.length}`);

const categoryName = document.querySelectorAll(".item")
    .forEach((category) => {
        console.log("Category:" + category.querySelector("h2").textContent),
            console.log(("Elements:" + category.querySelectorAll("li").length))
    });
    