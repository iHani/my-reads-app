import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Container, List } from 'semantic-ui-react';
import * as BooksAPI from '../utils/BooksAPI';
import ShelfChanger from './ShelfChanger';
import BookRating from './BookRating';

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelvedBooks: PropTypes.func.isRequired
  }

  updateShelf = (book, shelf) => {
    BooksAPI.update(book, shelf)
    .then(res => {
      this.updateStateShelves(res);
      if (this.props.handleChangeShelf) {
        book.shelf = shelf
        this.props.handleChangeShelf(book);
      }
    });
  }

  updateStateShelves = (res) => {
    const shelvesSlugs = Object.keys(res);
    let shelvedBooks = [];
    for (var i = 0; i < shelvesSlugs.length; i++) {
      const shelf = res[shelvesSlugs[i]];
      for (var j = 0; j < shelf.length; j++) {
        shelvedBooks.push({ id: res[shelvesSlugs[i]][j], shelf: shelvesSlugs[i] });
      }
    }
    this.props.updateShelvedBooks(shelvedBooks);
  }

  render() {
    return (
      <div>
        <Container>
          <List horizontal relaxed>

            {this.props.books.map((book) => (
              <List.Item key={book.id}>
                <List.Content >
                  <Image src={book.imageLinks.smallThumbnail} />
                  <List.Header style={{ maxWidth: '110px' }}>{book.title}</List.Header>
                  {book.publisher}
                </List.Content>
                <List.Content>
                  <ShelfChanger
                    book={book}
                    shelf={book.shelf || 'none'}
                    updateShelf={this.updateShelf}
                  />
                  <BookRating
                    book={book}
                    defaultRate={book.averageRating}
                  />
                </List.Content>
              </List.Item>
            )) }

          </List>
        </Container>
      </div>
    )
  }
}

export default Shelf;
