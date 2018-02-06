import React, { Component } from 'react';
import { Rating } from 'semantic-ui-react'

class BookRating extends Component {

  handleRate = (e, { rating }) => {
    console.log('src/Components/BookRating.js : rating code is commented out because it returns 403');
    // this.props.handleUpdateRating(this.props.book, rating)
  }

  render() {
    const { defaultRate } = this.props
    return (
      <Rating
        clearable
        defaultRating={defaultRate}
        maxRating={5}
        onRate={this.handleRate}
     />
    )
  }
}

export default BookRating;
