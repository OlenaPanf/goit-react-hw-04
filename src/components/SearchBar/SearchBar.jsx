export const SearchBar = ({ onSearch }) => {
  
	const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const keyword = form.elements.keyword.value;
        
    // Якщо текстове поле порожнє, виводимо повідомлення і припиняємо виконання функції.
    if(keyword.trim() === "") {
        alert("Please enter search term!")
        return;
    }
    
    // У протилежному випадку викликаємо пропс і передаємо йому значення поля
    onSearch(keyword);
    form.reset();
  };

  return (
        <header>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="keyword"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button type="submit">Search</button>
            </form>
        </header>
    );
};
