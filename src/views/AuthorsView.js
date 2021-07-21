import { Component } from 'react';
import axios from 'axios';
import { NavLink, Route } from 'react-router-dom';

import AuthorBooks from '../Components/AuthorBooks';

class AuthorsView extends Component {
  state = {
    authors: [],
  };

  componentDidMount() {
    axios
      .get('http://localhost:4040/authors?_embed=books')
      .then(({ data }) => this.setState({ authors: data }));
  }

  render() {
    const { authors } = this.state;
    const { url, path } = this.props.match;

    return (
      <>
        <h1>Authors</h1>
        <ul>
          {authors.map(author => (
            <li key={author.id}>
              <NavLink to={`${url}/${author.id}`}>{author.name}</NavLink>
            </li>
          ))}
        </ul>

        <Route
          path={`${path}/:authorId`}
          render={props => {
            const bookId = Number(props.match.params.authorId);
            const author = authors.find(({ id }) => id === bookId);

            return author && <AuthorBooks {...props} books={author.books} />;
          }}
        />
      </>
    );
  }
}

export default AuthorsView;
