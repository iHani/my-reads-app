import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import Shelf from './Shelf';
import * as BooksAPI from '../utils/BooksAPI';

class HomePage extends Component {

  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

  HandleChangingShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState({
        books: this.state.books.filter(b => b.id !== book.id).concat(book)
      });
    })
  }

  render() {
    const books = this.state.books;
    return (
      <div>
        <Segment stacked>
          <Header as='h2'>Currently Reading</Header>
          <Shelf
            books={books.filter(book => book.shelf === "currentlyReading")}
            HandleChangingShelf={this.HandleChangingShelf}
          />
        </Segment>

        <Segment stacked>
          <Header as='h2'>Want to Read</Header>
          <Shelf
            books={books.filter(book => book.shelf === "wantToRead")}
            HandleChangingShelf={this.HandleChangingShelf}
          />
        </Segment>

        <Segment stacked>
          <Header as='h2'>Read</Header>
          <Shelf
            books={books.filter(book => book.shelf === "read")}
            HandleChangingShelf={this.HandleChangingShelf}
          />
        </Segment>
      </div>
    )
  }
}

export default HomePage;
