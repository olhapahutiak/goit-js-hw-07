const categoriesList = document.querySelector('#categories');
const categoriesItems = categoriesList.querySelectorAll('.item');

console.log(`Number of categories: ${categoriesItems.length}`);

categoriesItems.forEach(item => {
  const categoriesTitle = item.querySelector('h2').textContent;
  const categoriesElements = item.querySelectorAll('ul li').length;

  console.log(`Category: ${categoriesTitle}`);
  console.log(`Elements: ${categoriesElements}`);
});