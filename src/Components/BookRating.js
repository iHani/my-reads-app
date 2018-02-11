import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Rating } from 'semantic-ui-react';

class BookRating extends Component {
  static propTypes = {
    defaultRate: PropTypes.number,
    book: PropTypes.object
  }

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
        disabled
     />
    )
  }
}

export default BookRating;
