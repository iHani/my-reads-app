import React, { Component } from 'react';
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

export default BookRating;
