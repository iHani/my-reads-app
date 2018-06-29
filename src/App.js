import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Container, Header, Menu } from 'semantic-ui-react';
import * as BooksAPI from './utils/BooksAPI';
import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';

class App extends Component {

  // shelvedBooks is an array to keep track of
  // id's of books that has been shelved, along with their shelf's slug
  // eg. { id: '123', shelf: 'wantToRead' }
  state = {
    shelvedBooks: []
  }

  componentDidMount() {
    BooksAPI.getAll().then(books => {
      // we update the shelvedBooks state immediately so when we search we get
      // the right shelf name for each book or 'None' if no shelf assigned
      this.updateShelvedBooks(books);
    })
  }

  // Will recieve an array of book objects and use it to update state.shelved
  updateShelvedBooks = (books) => {
    let shelvedBooks = [];
    for (var i = 0; i < books.length; i++) {
      shelvedBooks.push({ id: books[i].id, shelf: books[i].shelf });
    }
    this.setState({ shelvedBooks });
  }

  // getShelves will retrieve the shelf name for each book
  // this function is used for the result we get from booksApi.search()
  getShelves = (books) => {
    const shelves = this.state.shelvedBooks;
    const updatedShelves = books.map(book => {
      const bookInShelf = shelves.find(({ id }) => id === book.id);
      book.shelf = bookInShelf ? bookInShelf.shelf : 'none';
      return book;
    })
    return updatedShelves;
  }

  render() {
    return (
      <Container>
        <Header as='h1'>My Reads</Header>
        <Menu>
          <Link to='/'><Menu.Item >Home</Menu.Item></Link>
          <Link to='/search'><Menu.Item >Search</Menu.Item></Link>
        </Menu>
        <Route
          exact
          path='/'
          render={() => <HomePage
            updateShelvedBooks={this.updateShelvedBooks}
          />}
        />
        <Route
          path='/search'
          render={() => <SearchPage
            getShelves={this.getShelves}
            updateShelvedBooks={this.updateShelvedBooks}
          />}
        />
      </Container>
    )
  }
}

export default App;
