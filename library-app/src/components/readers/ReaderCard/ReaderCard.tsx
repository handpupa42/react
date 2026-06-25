import React from 'react';
import type { IReader } from '../../../types/reader.types';

interface ReaderCardProps {
  reader: IReader;
  onSelect: (id: string) => void;
}

const ReaderCard: React.FC<ReaderCardProps> = ({ reader, onSelect }) => {
  return (
    <div className="reader-card">
      <div className="reader-avatar">
        <span className="reader-avatar-emoji">👤</span>
      </div>
      <div className="reader-content">
        <h3 className="reader-name">{reader.fullName}</h3>
        <p className="reader-email">{reader.email}</p>
        <div className="reader-stats">
          <span className="reader-active-books">
            📚 Активных книг: <strong>{reader.activeBooks.length}</strong>
          </span>
        </div>
        <button onClick={() => onSelect(reader.id)} className="btn btn-primary">
          Профиль
        </button>
      </div>
    </div>
  );
};

export default ReaderCard;