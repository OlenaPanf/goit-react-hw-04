import './App.css'
import { useEffect, useState } from "react";
import { fetchImagesWithParams } from "../../images-api";
import ImageGallery from '../ImageGallery/ImageGallery'
import Loader from '../Loader/Loader'
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import { SearchBar } from "../SearchBar/SearchBar";
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn'
//import ImageModal from '../ImageModal/ImageModal';

export default function App() {
  
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false); 
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [totalPages, setTotalPages] = useState(0);
  
  
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setLoading(false);
      return;
    }

    async function fetchImages() {
      try {
        setLoading(true);
        setError(false);
        const { results, totalPages }  = await fetchImagesWithParams(searchQuery, page);
        setTotalPages(totalPages);
        setCards((prevState) => [...prevState, ...results]);
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
      if (page < totalPages) {
      setPage(page + 1);
    }
  };

  
  return (
    <div className="container">
      <SearchBar onSearch={handleSearch} />
      {error && <ErrorMessage />}
      {cards.length > 0 && <ImageGallery cards={cards} />}
      {loading && <Loader />}
      {/* <div>page {page}</div>
      <div>totalPages {totalPages}</div>
      <div>cards.length {cards.length}</div> */}
      {page < totalPages && cards.length > 0 && !loading && (
        <LoadMoreBtn onLoadMore={handleLoadMore} />
      )}
    </div>
  )
}


