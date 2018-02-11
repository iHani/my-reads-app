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

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(prevState => ({
        books: prevState.books.map(b => {
          if (b.id === book.id) { b.shelf = shelf }
          return b;
        })
      }));
    })
  }

  render() {
    return (
      <div>
        <Segment stacked>
          <Header as='h2'>Currently Reading</Header>
          <Shelf
            books={this.state.books.filter(book => book.shelf === 'currentlyReading')}
            updateShelf={this.updateShelf}
          />
        </Segment>

        <Segment stacked>
          <Header as='h2'>Want To Read</Header>
          <Shelf
            books={this.state.books.filter(book => book.shelf === 'wantToRead')}
            updateShelf={this.updateShelf}
          />
        </Segment>

        <Segment stacked>
          <Header as='h2'>Read</Header>
          <Shelf
            books={this.state.books.filter(book => book.shelf === 'read')}
            updateShelf={this.updateShelf}
          />
        </Segment>
      </div>
    )
  }
}

export default HomePage;
