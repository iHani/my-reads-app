import React from 'react';
import PropTypes from 'prop-types';
import { Image, Container, Header, Modal, Button, List } from 'semantic-ui-react';
import ShelfChanger from './ShelfChanger';
import BookRating from './BookRating';

const Shelf = (props) =>  (
  <div>
    <Container>
      <List horizontal relaxed>

        {props.books.map((book) => (
          <List.Item key={book.id}>
            <List.Content >

              <Modal trigger={<Image src={book.imageLinks.smallThumbnail} />}>
              <Modal.Header>{book.title}</Modal.Header>
              <Modal.Content image>
                <Image wrapped size='medium' src={book.imageLinks.smallThumbnail} />
                <Modal.Description>
                  <Header>Default Profile Image</Header>
                  <p>We've found the following gravatar image associated with your e-mail address.</p>
                </Modal.Description>
              </Modal.Content>
            </Modal>


            <List.Header style={{ padding: '.5em 0em', maxWidth: '110px' }}>{book.title}</List.Header>
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
            />
          </List.Content>
        </List.Item>
      )) }

    </List>
  </Container>
</div>
);

Shelf.propTypes = {
  books: PropTypes.array,
  HandleChangingShelf: PropTypes.func.isRequired
};

export default Shelf;
