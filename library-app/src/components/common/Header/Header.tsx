import React from 'react';

interface HeaderProps {
  currentPage: 'books' | 'readers' | 'profile';
  onPageChange: (page: 'books' | 'readers' | 'profile') => void;
  booksCount: number;
  readersCount: number;
}

const Header: React.FC<HeaderProps> = ({ currentPage, onPageChange, booksCount, readersCount }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo" style={{ cursor: 'pointer' }} onClick={() => onPageChange('books')}>
            <span className="logo-icon">📚</span>
            <span>Библиотека</span>
          </div>
          <nav className="nav">
            <button
              onClick={() => onPageChange('books')}
              className={`nav-link-btn ${currentPage === 'books' ? 'active' : ''}`}
            >
              📖 Книги
              <span className="nav-badge">{booksCount}</span>
            </button>
            <button
              onClick={() => onPageChange('readers')}
              className={`nav-link-btn ${currentPage === 'readers' || currentPage === 'profile' ? 'active' : ''}`}
            >
              👤 Читатели
              <span className="nav-badge">{readersCount}</span>
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;