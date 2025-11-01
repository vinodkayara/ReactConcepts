import React from "react";
import "./Bookstore.css";

const books = [
  {
    title: "React JS",
    author: "Jordan",
    price: "₹1200",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
  },
  {
    title: "CSS",
    author: "Maksan",
    price: "₹700",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg",
  },
  {
    title: "JavaScript",
    author: "Brendon",
    price: "₹2000",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
  },
  {
    title: "Java",
    author: "Jones",
    price: "₹3500",
    image: "https://upload.wikimedia.org/wikipedia/en/3/30/Java_programming_language_logo.svg",
  },
  {
    title: "Python",
    author: "Andrio",
    price: "₹2700",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg",
  },
  {
    title: "HTML",
    author: "Tim Berners-Lee",
    price: "₹700",
    image: "https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg",
  },
];

const BookStore = () => {
  return (
    <div className="outer-container">
      <div className="bookstore-container">
        <h1 className="store-title">Book Store</h1>
        <div className="books-display">
          <div className="books-grid">
            {books.map((book, index) => (
              <div className="book-card" key={index}>
                <img src={book.image} alt={book.title} className="book-image" />
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">Author: {book.author}</p>
                <p className="book-price">Price: {book.price}</p>
                <button className="add-btn">Add to Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookStore;
