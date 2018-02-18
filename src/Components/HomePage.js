import React, { Component } from 'react';
import { Header, Segment } from 'semantic-ui-react';
import Shelf from './Shelf';
import * as BooksAPI from '../utils/BooksAPI';

class HomePage extends Component {

  state = {
    books: []
  }

  shelves = [
    { title: 'Currently Reading', slug: 'currentlyReading' },
    { title: 'Want To Read', slug: 'wantToRead' },
    { title: 'Read', slug: 'read' }
  ]

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

  componentWillUpdate() {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

  render() {
    return (
      <div>
        {this.shelves.map(shelf => (
          <Segment key={shelf.slug} stacked>
            <Header as='h2'>{shelf.title}</Header>
            <Shelf
              books={this.state.books.filter(book => book.shelf === shelf.slug)}
              updateShelvedBooks={this.props.updateShelvedBooks}
              shelfUpdated={this.shelfUpdated}
            />
          </Segment>
        ))}
      </div>
    )
  }
}

export default HomePage;
