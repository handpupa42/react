
import BookCard from '../BookCard/BookCard'; 
import type { IBook } from '../../../types/book.types'; 

const booksData: IBook[] = [
  {
    id: '1',
    title: 'Мастер и Маргарита',
    author: 'Михаил Булгаков',
    year: 1967,
    genre: 'Роман',
    description: 'Мистический роман о дьяволе, посетившем Москву в 1930-х годах.',
    isAvailable: false,
  },
  {
    id: '2',
    title: 'Война и мир',
    author: 'Лев Толстой',
    year: 1869,
    genre: 'Эпопея',
    description: 'Масштабное произведение о русском обществе в эпоху наполеоновских войн.',
    isAvailable: true,
  },
  {
    id: '3',
    title: 'Преступление и наказание',
    author: 'Фёдор Достоевский',
    year: 1866,
    genre: 'Роман',
    description: 'Психологический роман о студенте Раскольникове и его теории.',
    isAvailable: true,
  },
  {
    id: '4',
    title: 'Евгений Онегин',
    author: 'Александр Пушкин',
    year: 1833,
    genre: 'Роман в стихах',
    description: 'История о разочарованном дворянине и трагической любви.',
    isAvailable: false,
  },
  {
    id: '5',
    title: '1984',
    author: 'Джордж Оруэлл',
    year: 1949,
    genre: 'Антиутопия',
    description: 'Роман о тоталитарном обществе и Большом Брате.',
    isAvailable: true,
  },
  {
    id: '6',
    title: 'Маленький принц',
    author: 'Антуан де Сент-Экзюпери',
    year: 1943,
    genre: 'Сказка',
    description: 'Философская сказка о дружбе, любви и ответственности.',
    isAvailable: true,
  },
];

const BookList = () => {
  return (
    <div className="card-grid">
      {booksData.map((book) => (
        <BookCard 
          key={book.id} 
          book={book} // Передаем весь объект книги целиком
        />
      ))}
    </div>
  );
};

export default BookList;