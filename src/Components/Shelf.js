import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Image, Container, Header, List } from 'semantic-ui-react';
import ShelfController from './ShelfController';
import BookRating from './BookRating';

class Shelf extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    updateShelf: PropTypes.func.isRequired
  }

  render() {
    return(
      <Container>
        <List horizontal relaxed>

          {this.props.books.map(book => (
            <List.Item key={book.id}>
              <List.Content style={{ maxWidth: '120px' }}>
                <Image src={book.imageLinks.thumbnail} />
                <Header as='h4'>{book.title}</Header>
                {book.publisher}
              </List.Content>
              <List.Content>
                <ShelfController
                  book={book}
                  shelf={book.shelf ? book.shelf : 'none'}
                  updateShelf={this.props.updateShelf}
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
    )
  }
}

export default Shelf;
