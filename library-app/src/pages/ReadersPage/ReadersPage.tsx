import React from 'react';
import ReaderList from '../../components/readers/ReaderList/ReaderList';
import type { IReader } from '../../types/reader.types';

interface ReadersPageProps {
  readers: IReader[];
  onSelectReader: (id: string) => void;
}

const ReadersPage: React.FC<ReadersPageProps> = ({ readers, onSelectReader }) => {
  return (
    <div className="container">
      <h1 className="page-title">Читатели библиотеки</h1>
      <p className="page-subtitle">
        Всего зарегистрировано: <strong>{readers.length}</strong>
      </p>
      <ReaderList readers={readers} onSelectReader={onSelectReader} />
    </div>
  );
};

export default ReadersPage;