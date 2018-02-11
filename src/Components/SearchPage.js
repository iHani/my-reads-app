import React, { Component } from 'react';
import { Input, Segment } from 'semantic-ui-react';
import * as BooksAPI from '../utils/BooksAPI';
import Shelf from './Shelf';

class SearchPage extends Component {

  state = {
    books: []
  }

  filterBooks = (query) => {
    BooksAPI.search(query.trim()).then(books => {
      console.log(books[0]);
      if (books && !books.error) {
        this.setState({ books })
      }
    });
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf).then(() => {
      this.setState(prevState => ({
        books: prevState.books.map(b => {
          if (b.id === book.id) { b.shelf = shelf }
          return b;
        })
      }));
    });
  }

  render() {
    return (
      <div>
        <Segment stacked>
          <Input fluid
            onChange={event => this.filterBooks(event.target.value)}
            label='Search'
            icon='search'
            placeholder='Type here...'
          />

          <Shelf
            books={this.state.books}
            updateShelf={this.updateShelf}
          />
        </Segment>
      </div>
    )
  }
}

export default SearchPage;
