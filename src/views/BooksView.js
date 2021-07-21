import { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class BooksView extends Component {
  state = {
    books: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:4040/books')
      .then(({ data }) => this.setState({ books: data }));
  }

  render() {
    const { url } = this.props.match;
    const { books } = this.state;
    return (
      <>
        <h1>Books</h1>
        <ul>
          {books.map(book => (
            <li key={book.id}>
              <Link to={`${url}/${book.id}`}>{book.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default BooksView;
