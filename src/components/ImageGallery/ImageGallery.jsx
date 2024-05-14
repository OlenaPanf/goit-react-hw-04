import ImageCard from "../ImageCard/ImageCard"

export default function ImageGallery({ cards }) {
  return (
    <ul>
      {cards.map((card) => (
        <li key={card.id}>
          <ImageCard card={card} />
        </li>
      ))}
    </ul>
  );
}

// ImageCard або модальне вікно огорнути в тег <a></a>
