import { Link } from 'react-router-dom';

const AuthorBook = ({ books }) => {
  return (
    <>
      <h1>Сторінка книг автора</h1>
      <ul>
        {books.map(book => (
          <li key={book.id}>
            <Link to={`/books/${book.id}`}>{book.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default AuthorBook;
