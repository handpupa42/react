import React from 'react';
import BookCard from '../BookCard/BookCard';
import type { IBook } from '../../../types/book.types';

interface BookListProps {
  books: IBook[];
}

const BookList: React.FC<BookListProps> = ({ books }) => {
  return (
    <div className="card-grid">
      {books.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;