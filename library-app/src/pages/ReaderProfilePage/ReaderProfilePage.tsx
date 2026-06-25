import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { mockReaders } from '../../mocks/readers';
import { mockBooks } from '../../mocks/books';
import ReaderProfile from '../../components/readers/ReaderProfile/ReaderProfile';

const ReaderProfilePage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const reader = mockReaders.find(r => r.id === id);

  if (!reader) return <div>Читатель не найден</div>;

  return <ReaderProfile reader={reader} allBooks={mockBooks} onBack={() => navigate(-1)} />;
};

export default ReaderProfilePage;