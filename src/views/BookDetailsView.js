import { Component } from 'react';
import axios from 'axios';

class BookDetailsView extends Component {
  state = {
    descr: '',
    genre: '',
    id: null,
    imgUrl: null,
    title: null,
  };
  componentDidMount() {
    axios
      .get(`http://localhost:4040/books/${this.props.match.params.bookId}`)
      .then(response => this.setState({ ...response.data }));
  }

  render() {
    const { descr, imgUrl, title } = this.state;
    return (
      <>
        <h1>Сторінка однієї книги № {this.props.match.params.bookId}</h1>
        <img src={imgUrl} alt={title} />
        <h2>{title}</h2>
        <p>{descr}</p>
      </>
    );
  }
}

export default BookDetailsView;
