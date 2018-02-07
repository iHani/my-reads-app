import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import escapeRegExp from 'escape-string-regexp';
import * as BooksAPI from '../utils/BooksAPI';
import Shelf from './Shelf';

class SearchPage extends Component {

  state = {
    books: [],
    query: ''
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
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

  updateQuery = (query) => {
    this.setState({ query: query.trim() });
  }

  render() {
    const { books, query } = this.state;

    let showingBooks;
    if (query) {
      const match = new RegExp(escapeRegExp(query), 'i');
      showingBooks = books.filter(book => match.test(book.title));
    } else {
      showingBooks = books;
    }

    return (
      <Segment stacked>
        <Input fluid
          onChange={(event) => this.updateQuery(event.target.value)}
          label='Search'
          icon='search'
          placeholder='Type here...'
          style={{ padding: '.5em 0em' }}
        />
        {!showingBooks.length > 0 && query && <p style={{textAlign: 'center', padding: '2em 0'}}><strong>{this.state.query}</strong> No matches found!</p>}
        <Shelf
          books={showingBooks}
          HandleChangingShelf={this.HandleChangingShelf}
        />
      </Segment>
    )
  }
}

export default SearchPage;
