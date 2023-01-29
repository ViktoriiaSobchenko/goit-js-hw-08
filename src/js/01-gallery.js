// Add imports above this line
import { galleryItems } from './gallery-items';

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);

const galleryEl = document.querySelector('.gallery');

const makeGalleryEl = item => {
  const { preview, original, description } = item;

  return `<li class="gallery__link"><a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a></li>`;
};
const makeGalleryElRows = galleryItems.map(makeGalleryEl).join('');

galleryEl.insertAdjacentHTML('beforeend', makeGalleryElRows);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});
