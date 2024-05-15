import css from './ImageGallery.module.css'
import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ cards }) {
  return (
    <ul className={css.gallery}>
      {cards.map((card) => (
        <li className={css.card} key={card.id}>
          <ImageCard card={card} />
        </li>
      ))}
    </ul>
  );
}

// ImageCard або модальне вікно огорнути в тег <a></a>
