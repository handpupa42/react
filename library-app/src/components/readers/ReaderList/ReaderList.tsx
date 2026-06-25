import React from 'react';
import ReaderCard from '../ReaderCard/ReaderCard';
import type { IReader } from '../../../types/reader.types';

interface ReaderListProps {
  readers: IReader[];
  onSelectReader: (id: string) => void;
}

const ReaderList: React.FC<ReaderListProps> = ({ readers, onSelectReader }) => {
  return (
    <div className="reader-list">
      {readers.map((reader) => (
        <ReaderCard key={reader.id} reader={reader} onSelect={onSelectReader} />
      ))}
    </div>
  );
};

export default ReaderList;