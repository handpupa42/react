import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/common/Layout/Layout';
import BooksPage from './pages/BooksPage/BooksPage';
import BookDetailPage from './pages/BooksPage/BookDetail/BookDetailPage';
import ReadersPage from './pages/ReadersPage/ReadersPage';
import ReaderProfilePage from './pages/ReaderProfilePage/ReaderProfilePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

import { mockBooks } from './mocks/books';
import { mockReaders } from './mocks/readers';
import { useState } from 'react';

function App() {
  const [currentPage, setCurrentPage] = useState<'books' | 'readers' | 'profile'>('books');
  const [selectedReaderId, setSelectedReaderId] = useState<string | null>(null);

  const handleSelectReader = (id: string) => {
    setSelectedReaderId(id);
    setCurrentPage('profile');
    // лучше навигацией перейти на /reader/:id или оставить так и использовать selectedReaderId
  };

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout
            currentPage={currentPage}
            onPageChange={(p) => {
              setCurrentPage(p);
              if (p !== 'profile') setSelectedReaderId(null);
            }}
            booksCount={mockBooks.length}
            readersCount={mockReaders.length}
          />
        }
      >
        <Route index element={<Navigate to="/books" replace />} />
        <Route path="books" element={<BooksPage books={mockBooks} />} />
        <Route path="book/:id" element={<BookDetailPage />} />
        <Route path="readers" element={<ReadersPage readers={mockReaders} onSelectReader={handleSelectReader} />} />
        <Route path="reader/:id" element={<ReaderProfilePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}

export default App;
  
