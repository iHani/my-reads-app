import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import * as BooksAPI from '../utils/BooksAPI';
import Shelf from './Shelf';

class SearchPage extends Component {

  state = {
    books: []
  }

  queryBooks = (input) => {
    const query = input.trim();
    if (query) {
      BooksAPI.search(query)
      .then(result => {
        const books = this.props.getShelves(result);
        this.setState({ books });
      })
    }
  }

  render() {
    const { updateShelvedBooks } = this.props;
    return (
      <Segment stacked>
        <Input fluid
          onChange={event => this.queryBooks(event.target.value)}
          label='Search'
          icon='search'
          placeholder='Type here...'
        />
        <Shelf
          books={this.state.books}
          updateShelvedBooks={updateShelvedBooks}
        />
      </Segment>
    )
  }
}

export default SearchPage;
