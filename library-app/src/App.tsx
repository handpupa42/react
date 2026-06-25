import { useState } from 'react';
import Layout from './components/common/Layout/Layout';
import BooksPage from './pages/BooksPage/BooksPage';
import ReadersPage from './pages/ReadersPage/ReadersPage';
import ReaderProfile from './components/readers/ReaderProfile/ReaderProfile';

// Импортируем моки
import { mockBooks } from './mocks/books';
import { mockReaders } from './mocks/readers';

function App() {
  // Текущее состояние экрана: 'books' | 'readers' | 'profile'
  const [currentPage, setCurrentPage] = useState<'books' | 'readers' | 'profile'>('books');
  // Храним ID читателя, чей профиль открыт
  const [selectedReaderId, setSelectedReaderId] = useState<string | null>(null);

  // Переключение на страницу конкретного профиля
  const handleSelectReader = (id: string) => {
    setSelectedReaderId(id);
    setCurrentPage('profile');
  };

  // Поиск объекта выбранного читателя по ID
  const activeReader = mockReaders.find((r) => r.id === selectedReaderId);

  return (
    <Layout
      currentPage={currentPage}
      onPageChange={(page) => {
        setCurrentPage(page);
        if (page !== 'profile') setSelectedReaderId(null);
      }}
      booksCount={mockBooks.length}
      readersCount={mockReaders.length}
    >
      {currentPage === 'books' && (
        <BooksPage books={mockBooks} />
      )}

      {currentPage === 'readers' && (
        <ReadersPage readers={mockReaders} onSelectReader={handleSelectReader} />
      )}

      {currentPage === 'profile' && activeReader && (
        <div className="container">
          <ReaderProfile
            reader={activeReader}
            allBooks={mockBooks}
            onBack={() => setCurrentPage('readers')}
          />
        </div>
      )}
    </Layout>
  );
}

export default App;
  
