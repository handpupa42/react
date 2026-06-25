import React, { useState } from 'react';
import BookList from '../../components/books/BookList/BookList';
import type { IBook } from '../../types/book.types';

interface BooksPageProps {
  books: IBook[];
}

const BooksPage: React.FC<BooksPageProps> = ({ books }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredBooks = books.filter(
    (book) =>
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="page-title">Каталог книг</h1>
      <p className="page-subtitle">
        Всего книг: <strong>{books.length}</strong>
      </p>

      <div className="page-toolbar">
        <div className="book-search">
          <input
            type="text"
            className="book-search-input"
            placeholder="🔍 Поиск по названию или автору..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button className="book-search-clear" onClick={() => setSearchQuery('')}>
              ✕
            </button>
          )}
        </div>
        <span className="search-result-count">Найдено: {filteredBooks.length}</span>
      </div>

      <BookList books={filteredBooks} />
    </div>
  );
};

export default BooksPage;