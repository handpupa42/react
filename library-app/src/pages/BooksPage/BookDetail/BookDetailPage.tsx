import React from 'react';
import { useParams } from 'react-router-dom';
import { mockBooks } from '../../../mocks/books';

const BookDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const book = mockBooks.find(b => b.id === id);

  if (!book) return <div>Книга не найдена</div>;

  return (
    <div>
      <h1>{book.title}</h1>
      <p><strong>Автор:</strong> {book.author}</p>
      <p><strong>Год:</strong> {book.year}</p>
      <p><strong>Жанр:</strong> {book.genre}</p>
      <p>{book.description}</p>
    </div>
  );
};

export default BookDetailPage;