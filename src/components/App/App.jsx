import './App.css'
import { useEffect, useState } from "react";
// import axios from "axios";
import { fetchImagesWithParams } from "../../images-api";
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage';


export default function App() {
   // 3. Оголошуємо стан
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Додано стан помилки

  useEffect(() => {
    async function fetchCards() {
      try {
				// Встановлюємо індикатор в true перед запитом
        setLoading(true);
        const images = await fetchImagesWithParams('keyword', 1);
        setCards(images);
			
      } catch (error) {
        setError(true); // Встановлення стану помилки, якщо виникає помилка
      } finally {
				// Встановлюємо індикатор в false після запиту
        setLoading(false);
      }
    }

		// Викликаємо її одразу після оголошення
    fetchCards();
  }, []);
  
  return (
    <>
      {loading ? (
        <Loader />
      ) : error ? ( // Перевірка стану помилки
        <ErrorMessage />
      ) : (
        cards.length > 0 && <ImageGallery cards={cards} />
      )}
     
    </>
  )
}



