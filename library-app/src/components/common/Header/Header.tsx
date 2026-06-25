import React from 'react';

type Page = 'books' | 'readers' | 'profile';

interface HeaderProps {
  currentPage?: Page;
  onPageChange?: (p: Page) => void;
  booksCount?: number;
  readersCount?: number;
}

const Header: React.FC<HeaderProps> = ({
  currentPage = 'books',
  onPageChange = () => {},
  booksCount = 0,
  readersCount = 0,
}) => {
  return (
    <header className="header">
      <div className="container header-content">
        <div className="logo" style={{ cursor: 'pointer' }} onClick={() => onPageChange('books')}>
          <span className="logo-icon">📚</span>
          <span>Библиотека</span>
        </div>

        <nav className="nav">
          <button
            className={currentPage === 'books' ? 'active' : ''}
            onClick={() => onPageChange('books')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            📖 Книги <span className="nav-badge">{booksCount}</span>
          </button>

          <button
            className={currentPage === 'readers' ? 'active' : ''}
            onClick={() => onPageChange('readers')}
            style={{ background: 'none', border: 'none', cursor: 'pointer' }}
          >
            👤 Читатели <span className="nav-badge">{readersCount}</span>
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;