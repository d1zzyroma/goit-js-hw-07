const categoriesList = document.getElementById('categories');

const itemsList = categoriesList.querySelectorAll(".item")

console.log(`Number of categories: ${itemsList.length}`)

itemsList.forEach(element => {
    const categoryTitle = element.querySelector("h2").textContent
    const categoryItems = element.querySelectorAll("ul li")
    console.log(`Category: ${categoryTitle} \nElements: ${categoryItems.length}`)
    
});
