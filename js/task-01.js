// 1.
const navEl = document.querySelector("#categories");
console.log(`Number of categories: ${navEl.children.length}`);

// 2.
const itemEl = document.querySelectorAll(".item");
itemEl.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
