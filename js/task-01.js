const numberOfCategories = document.querySelectorAll("#categories .item");
console.log("Number of categories:", numberOfCategories.length);

numberOfCategories.forEach((categories) => {
  const h2 = categories.querySelector("h2");
  console.log("Category:", h2.textContent);
  const listInTheItemClass = categories.querySelectorAll("ul li");
  console.log("Elements:", listInTheItemClass.length);
});