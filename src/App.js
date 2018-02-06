import React, { Component } from 'react';
import { Container, Header, Segment, Menu } from 'semantic-ui-react';
import Shelf from './Components/Shelf';
import * as BooksAPI from './utils/BooksAPI';

class App extends Component {

  state = {
    currentlyReading: [],
    wantToRead: [],
    read: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      // books.forEach(b => b.shelf = "read")
      const currentlyReading = books.filter(book => book.shelf === "currentlyReading");
      const wantToRead = books.filter(book => book.shelf === "wantToRead");
      const read = books.filter(book => book.shelf === "read");
      this.setState({ currentlyReading, wantToRead, read });
    })
  }

  HandleChangingShelf = (book, oldShelf, newShelf) => {
    BooksAPI.update(book, newShelf).then(() => {
      if (oldShelf !== newShelf) {
        this.setState({ [oldShelf]: this.state[oldShelf].filter(b => b.id !== book.id) });
        this.setState({ [newShelf]: this.state[newShelf].concat([ book ]) });
      }
    })
  }

  // handleUpdateRating = (book, rate) => {
  //   BooksAPI.updateRating(book, rate);
  // }

  render() {
    return (
      <Container style={{ padding: '3em 0em' }}>
        <Header as='h1'>My Reads</Header>
        <Menu>
          <Menu.Item as='a'>Home</Menu.Item>
          <Menu.Item as='a'>Search</Menu.Item>
        </Menu>
        {/* <Tab panes={this.state.panes} renderActiveOnly={true}/> */}

        <Segment stacked>
          <Header as='h2'>Currently Reading</Header>
          <Shelf
            books={this.state.currentlyReading}
            HandleChangingShelf={this.HandleChangingShelf}
            // handleUpdateRating={this.handleUpdateRating}
          />
        </Segment>

        <Segment stacked>
          <Header as='h2'>Want to Read</Header>
          <Shelf
            books={this.state.wantToRead}
            HandleChangingShelf={this.HandleChangingShelf}
            // handleUpdateRating={this.handleUpdateRating}
          />
        </Segment>

        <Segment stacked>
          <Header as='h2'>Read</Header>
          <Shelf
            books={this.state.read}
            HandleChangingShelf={this.HandleChangingShelf}
            // handleUpdateRating={this.handleUpdateRating}
          />
        </Segment>

      </Container>
    );
  }
}

export default App;
