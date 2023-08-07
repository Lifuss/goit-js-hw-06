const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

const galleryListEl = document.querySelector('.gallery');

function makeGaleryListMarkup(imagesArr) {
  return imagesArr
    .map(
      ({ url, alt }) =>
        `<li class=galery-item><img src=${url} alt=${alt} width=360></li>`
    )
    .join('');
}
galleryListEl.insertAdjacentHTML('beforeend', makeGaleryListMarkup(images));

// Добавляю через інлайн бо думаю що так потребує задача, для тренування js скілів (міг і в CSS добавити)
galleryListEl.style.display = 'flex';
galleryListEl.style.gap = '30px';
galleryListEl.style.justifyContent = 'center';
galleryListEl.style.listStyle = 'none';
galleryListEl.style.alignItems = 'center';
