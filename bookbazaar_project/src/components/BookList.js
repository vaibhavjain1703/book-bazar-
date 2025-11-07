import React from "react";

export default function BookList({ books }) {
  return (
    <div className="book-list">
      {books.map((book, index) => (
        <div key={index} className="book-card">
          <h2>{book.title}</h2>
          <p><b>Author:</b> {book.author}</p>
          <p><b>Genre:</b> {book.genre}</p>
          <p><b>Publisher:</b> {book.publisher}</p>
          <p><b>Price:</b> ₹{book.price}</p>
        </div>
      ))}
    </div>
  );
}
