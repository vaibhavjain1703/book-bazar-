import React, { useState } from "react";
import { books } from "./data/books";
import FilterPanel from "./components/FilterPanel";
import SortOptions from "./components/SortOptions";
import BookList from "./components/BookList";
import "./App.css";

function App() {
  const [filters, setFilters] = useState({ genre: [], author: [], publisher: [] });
  const [sortOrder, setSortOrder] = useState("");

  const handleFilterChange = (category, value) => {
    setFilters(prev => {
      const current = prev[category];
      return {
        ...prev,
        [category]: current.includes(value)
          ? current.filter(v => v !== value)
          : [...current, value],
      };
    });
  };

  const handleReset = () => {
    setFilters({ genre: [], author: [], publisher: [] });
    setSortOrder("");
  };

  const filteredBooks = books.filter(book => {
    const genreMatch = filters.genre.length ? filters.genre.includes(book.genre) : true;
    const authorMatch = filters.author.length ? filters.author.includes(book.author) : true;
    const publisherMatch = filters.publisher.length ? filters.publisher.includes(book.publisher) : true;
    return genreMatch && authorMatch && publisherMatch;
  });

  const sortedBooks = [...filteredBooks].sort((a, b) =>
    sortOrder === "low" ? a.price - b.price : sortOrder === "high" ? b.price - a.price : 0
  );

  return (
    <div className="App">
      <h1>📚 BookBazaar</h1>
      <div className="controls">
        <FilterPanel filters={filters} onChange={handleFilterChange} />
        <SortOptions onSortChange={setSortOrder} />
        <button onClick={handleReset}>Reset</button>
      </div>
      <p>Showing {sortedBooks.length} books</p>
      <BookList books={sortedBooks} />
    </div>
  );
}

export default App;
