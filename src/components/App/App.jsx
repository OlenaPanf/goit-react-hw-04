import './App.css'
import { useEffect, useState } from "react";
import { fetchImagesWithParams } from "../../images-api";
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { SearchBar } from "../SearchBar/SearchBar";
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'

export default function App() {
  
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); 
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setLoading(false);
      return;
    }

    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchImagesWithParams(searchQuery, page);
        setCards((prevState) => [...prevState, ...data]);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [page, searchQuery]);

  const handleSearch = async (keyword) => {
    setSearchQuery(keyword);
    setPage(1);
    setCards([]);    
  };

  const handleLoadMore = async () => {
    setPage(page + 1);
  };
  
  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {cards.length > 0 && <ImageGallery cards={cards} />}
      {loading && <Loader />}
      {cards.length > 0 && !loading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}  
    </div>
  )
}

{/* <>
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <Loader />
      ) : error ? ( // Перевірка стану помилки
        <ErrorMessage />
      ) : (
        cards.length > 0 && <ImageGallery cards={cards} />
      )}
      {cards.length > 0 && <LoadMoreBtn onLoadMore={handleLoadMore} />}
     
    </> */}
