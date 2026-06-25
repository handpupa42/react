import React, { useState } from 'react';
import type { IBook } from '../../types/book.types';
import BookList from '../../components/books/BookList/BookList';

interface BooksPageProps {
  books: IBook[];
}

const BooksPage: React.FC<BooksPageProps> = ({ books }) => {
  const [search, setSearch] = useState('');
  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(search.toLowerCase()) ||
    b.author.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h1 className="page-title">Каталог книг</h1>
      <p className="page-subtitle">Всего книг: <strong>{books.length}</strong></p>

      <div className="page-toolbar">
        <div className="book-search">
          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="book-search-input"
            placeholder="🔍 Поиск..."
          />
          {search && <button onClick={() => setSearch('')} className="book-search-clear">✕</button>}
        </div>
        <span className="search-result-count">Найдено: {filtered.length}</span>
      </div>

      <BookList books={filtered} />
    </>
  );
};

export default BooksPage;