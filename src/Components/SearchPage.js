import React, { Component } from 'react';
import { Segment, Input } from 'semantic-ui-react';
import * as BooksAPI from '../utils/BooksAPI';
import Shelf from './Shelf';

class SearchPage extends Component {

  state = {
    books: [],
    statusMessage: '',
  }

  queryBooks = (input) => {
    const query = input.trim();
    if (query) {
      BooksAPI.search(query)
      .then(result => {
        if (!result.error) {
          const books = this.props.getShelves(result);
          this.setState({ books, statusMessage: '' });
        } else {
          this.setState({ books: [], statusMessage: 'No result found for ' + query });
        }
      });
    } else {
      this.setState({ books: [], statusMessage: '' });
    }
  }

  render () {
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
        {this.state.statusMessage}
      </Segment>
    )
  }
}

export default SearchPage;
