
import ReaderCard from '../ReaderCard/ReaderCard'; // Проверьте правильность пути к ReaderCard
import type { IReader } from '../../../types/reader.types'; // Проверьте правильность пути к вашим типам

// Моковые данные теперь строго соответствуют типу IReader
const readersData: IReader[] = [
  {
    id: 'r1',
    fullName: 'Иван Петров',
    email: 'ivan@mail.ru',
    phone: '+7 (999) 123-45-67',
    registrationDate: new Date('2024-01-15'),
    activeBooks: ['1', '4'], // Массив ID книг на руках (2 книги)
    booksHistory: [
      { bookId: '2', takenAt: new Date('2024-02-01'), returnedAt: new Date('2024-03-15') },
      { bookId: '3', takenAt: new Date('2024-03-20'), returnedAt: new Date('2024-04-10') },
      { bookId: '5', takenAt: new Date('2024-05-01'), returnedAt: new Date('2024-06-20') },
      { bookId: '6', takenAt: new Date('2024-07-10'), returnedAt: new Date('2024-08-01') },
      { bookId: '1', takenAt: new Date('2024-08-15') }, // нет returnedAt = книга на руках (активна)
    ],
  },
  {
    id: 'r2',
    fullName: 'Мария Иванова',
    email: 'maria@mail.ru',
    phone: '+7 (999) 234-56-78',
    registrationDate: new Date('2024-02-10'),
    activeBooks: ['2'], // 1 книга
    booksHistory: [
      { bookId: '2', takenAt: new Date('2024-02-10') }
    ],
  },
  {
    id: 'r3',
    fullName: 'Пётр Сидоров',
    email: 'petr@mail.ru',
    phone: '+7 (999) 345-67-89',
    registrationDate: new Date('2024-03-05'),
    activeBooks: [], // 0 книг
    booksHistory: [],
  },
  {
    id: 'r4',
    fullName: 'Елена Смирнова',
    email: 'elena@mail.ru',
    phone: '+7 (999) 456-78-90',
    registrationDate: new Date('2024-04-20'),
    activeBooks: ['1', '3', '5'], // 3 книги
    booksHistory: [
      { bookId: '1', takenAt: new Date('2024-04-20') },
      { bookId: '3', takenAt: new Date('2024-04-25') },
      { bookId: '5', takenAt: new Date('2024-05-01') },
    ],
  },
  {
    id: 'r5',
    fullName: 'Алексей Новиков',
    email: 'alexey@mail.ru',
    phone: '+7 (999) 567-89-01',
    registrationDate: new Date('2024-05-12'),
    activeBooks: ['6'], // 1 книга
    booksHistory: [
      { bookId: '6', takenAt: new Date('2024-05-12') }
    ],
  },
];

const ReaderList = () => {
  return (
    <div className="reader-list">
      {readersData.map((reader) => (
        <ReaderCard 
          key={reader.id} 
          reader={reader} // Передаем весь объект читателя целиком
        />
      ))}
    </div>
  );
};

export default ReaderList;