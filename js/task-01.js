const quanityUl = document.querySelectorAll('.item');
console.log('Number of categories: ', quanityUl.length);

quanityUl.forEach(el =>
  console.log(`
Category ${el.firstElementChild.textContent} 
Elements: ${el.lastElementChild.children.length}`)
);
