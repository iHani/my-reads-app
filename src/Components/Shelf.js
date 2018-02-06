import React from 'react';
import { Image, Container, List } from 'semantic-ui-react';
import ShelfChanger from './ShelfChanger';
import BookRating from './BookRating';

const Shelf = (props) => (
  <div>
    <Container>
      <List horizontal relaxed>

        {props.books.map((book) => (
          <List.Item key={book.id}>
            <List.Content >
              <Image src={book.imageLinks.thumbnail} />
              <List.Header style={{ padding: '.5em 0em' }}>{book.title}</List.Header>
              {book.publisher}
            </List.Content>
            <List.Content style={{ padding: '.5em 0em' }}>
              <ShelfChanger
                book={book}
                shelf={book.shelf}
                HandleChangingShelf={props.HandleChangingShelf}
              />
              <BookRating
                book={book}
                defaultRate={book.averageRating}
                handleUpdateRating={props.handleUpdateRating}
              />

            </List.Content>
          </List.Item>
        )) }

      </List>
    </Container>
  </div>
);

export default Shelf;
