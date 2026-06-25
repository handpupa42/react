import React from 'react';
import type { IReader } from '../../../types/reader.types';
import type { IBook } from '../../../types/book.types';

interface ReaderProfileProps {
  reader: IReader;
  allBooks: IBook[];
  onBack: () => void;
}

const ReaderProfile: React.FC<ReaderProfileProps> = ({ reader, allBooks, onBack }) => {
  const getBookDetails = (bookId: string) => {
    return allBooks.find((b) => b.id === bookId);
  };

  return (
    <div className="profile-wrapper">
      <button onClick={onBack} className="btn btn-secondary" style={{ marginBottom: '20px' }}>
        ← Назад к списку читателей
      </button>

      {/* Header */}
      <div className="profile-header">
        <div className="profile-avatar">
          <span className="profile-avatar-emoji">👤</span>
        </div>
        <div className="profile-info">
          <h1 className="profile-name">{reader.fullName}</h1>
          <div className="profile-details">
            <span>✉️ {reader.email}</span>
            <span>📞 {reader.phone}</span>
            <span>📅 Регистрация: {reader.registrationDate.toLocaleDateString()}</span>
          </div>
          <div className="profile-stats">
            <span>📚 Всего книг в истории: <strong>{reader.booksHistory.length}</strong></span>
            <span>📖 Активных на руках: <strong>{reader.activeBooks.length}</strong></span>
          </div>
        </div>
      </div>

      {/* Active Books */}
      <section className="profile-section">
        <h2 className="profile-section-title">📖 Активные книги</h2>
        <div className="active-books-list">
          {reader.activeBooks.length > 0 ? (
            reader.activeBooks.map((bookId) => {
              const book = getBookDetails(bookId);
              return (
                <span key={bookId} className="active-book-item">
                  {book ? book.title : 'Неизвестная книга'}{' '}
                  {book && <span className="active-book-author">({book.author})</span>}
                </span>
              );
            })
          ) : (
            <p className="no-books-msg">Нет активных книг на руках.</p>
          )}
        </div>
      </section>

      <section className="profile-section">
        <h2 className="profile-section-title">📚 История чтения</h2>
        <div className="history-list">
          {reader.booksHistory.map((item, index) => {
            const book = getBookDetails(item.bookId);
            const isCurrentlyActive = !item.returnedAt;

            return (
              <div key={index} className="history-item">
                <span className="history-book">{book ? book.title : 'Неизвестная книга'}</span>
                <span className="history-date">
                  Взята: {item.takenAt.toLocaleDateString()}
                  {isCurrentlyActive 
                    ? ' (активна)' 
                    : `, Возвращена: ${item.returnedAt?.toLocaleDateString()}`
                  }
                </span>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
};

export default ReaderProfile;