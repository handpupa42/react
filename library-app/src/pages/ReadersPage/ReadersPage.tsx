import React from 'react';
import type { IReader } from '../../types/reader.types';
import ReaderList from '../../components/readers/ReaderList/ReaderList';

interface ReadersPageProps {
  readers: IReader[];
  onSelectReader: (id: string) => void;
}

const ReadersPage: React.FC<ReadersPageProps> = ({ readers, onSelectReader }) => {
  return (
    <>
      <h1 className="page-title">Читатели библиотеки</h1>
      <p className="page-subtitle">Всего читателей: <strong>{readers.length}</strong></p>
      <ReaderList readers={readers} onSelectReader={onSelectReader} />
    </>
  );
};

export default ReadersPage;