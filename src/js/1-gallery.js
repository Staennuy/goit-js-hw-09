import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { images } from '../img/images';
const galleryContainer = document.querySelector('.gallery');
const galleryMarkup = images
  .map(({ preview, original, description }) => {
    return `
      <li class="gallery-item">
        <a class="gallery-link" href="${original}">
          <img class="gallery-image" src="${preview}" alt="${description}" />
        </a>
      </li>`;
  })
  .join('');

galleryContainer.innerHTML = galleryMarkup;

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
