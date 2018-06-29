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

  componentDidMount () {
    BooksAPI.getAll().then(books => {
      this.setState({ books });
    })
  }

  handleChangeShelf = (updatedBook) => {
    this.setState(prevState => ({
      books: prevState.books.filter(({ id }) => id !== updatedBook.id).concat(updatedBook)
    }));
  }

  render () {
    return (
      <div>
        {this.shelves.map(({ title, slug }) => (
          <Segment key={slug} stacked>
            <Header as='h2'>{title}</Header>
            <Shelf
              books={this.state.books.filter(({ shelf }) => shelf === slug)}
              handleChangeShelf={this.handleChangeShelf}
              updateShelvedBooks={this.props.updateShelvedBooks}
            />
          </Segment>
        ))}
      </div>
    )
  }
}

export default HomePage;
