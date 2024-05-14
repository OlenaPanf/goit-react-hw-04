import './App.css'
import { useState } from "react";
// import axios from "axios";
import { fetchImagesWithParams } from "../../images-api";
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { SearchBar } from "../SearchBar/SearchBar";

export default function App() {
   // 3. Оголошуємо стан
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); // Додано стан помилки

  const handleSearch = async (keyword) => {
    try {
	setCards([]);
	setError(false);
      setLoading(true);
      const data = await fetchImagesWithParams(keyword);
      setCards(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  
  
  return (
    <>
      <SearchBar onSearch={handleSearch} />
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



