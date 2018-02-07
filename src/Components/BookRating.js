import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

class BookRating extends Component {

  handleRate = (e, { book, rating }) => {
    console.log(book.title, rating);
  }

  render() {
    const { defaultRate, book } = this.props;
    return (
      <Rating
        clearable
        book={book}
        defaultRating={defaultRate}
        maxRating={5}
        onRate={this.handleRate}
     />
    )
  }
}

BookRating.propTypes = {
  defaultRate: PropTypes.number,
  book: PropTypes.object
};

export default BookRating;
