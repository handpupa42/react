import React from 'react';
import type { IBook } from '../../../types/book.types';
import type { IReader } from '../../../types/reader.types';

interface ReaderProfileProps {
  reader: IReader;
  allBooks: IBook[]; // Передаем все книги, чтобы сопоставить ID книг с их названиями
}

const ReaderProfile: React.FC<ReaderProfileProps> = ({ reader, allBooks }) => {
  
  // Функция для поиска названия книги по её ID
  const getBookDetails = (bookId: string) => {
    return allBooks.find((b) => b.id === bookId);
  };

  return (
    <div className="profile-wrapper">
      {/* Profile Header */}
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
            <span>📚 Всего в истории: <strong>{reader.booksHistory.length}</strong></span>
            <span>📖 Активных книг: <strong>{reader.activeBooks.length}</strong></span>
          </div>
        </div>
      </div>

      {/* Active Books Section */}
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
            <p className="no-books-msg">Нет активных книг</p>
          )}
        </div>
      </section>

      {/* History Section */}
      <section className="profile-section">
        <h2 className="profile-section-title">📚 История чтения</h2>
        <div className="history-list">
          {reader.booksHistory.map((item, index) => {
            const book = getBookDetails(item.bookId);
            const isCurrentlyActive = !item.returnedAt; // Если даты возврата нет, книга еще у читателя

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