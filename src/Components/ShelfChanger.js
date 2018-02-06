import React, { Component } from 'react';
import { Dropdown, Icon } from 'semantic-ui-react'

class ShelfChanger extends Component {

  state = {
    options: [
      { key: 'currentlyReading', value: 0, text: 'Currently Reading', icon: this.props.shelf === 'currentlyReading' ? 'check' : '' },
      { key: 'wantToRead', value: 1, text: 'Want to Read', icon: this.props.shelf === 'wantToRead' ? 'check' : '' },
      { key: 'read', value: 2, text: 'Read', icon: this.props.shelf === 'read' ? 'check' : '' },
    ]
  }

  handleUpdateShelf = (e, { book, options, value }) => {
    const oldShelf = book.shelf
    const newShelf = options[value].key
    book.shelf = newShelf
    this.props.HandleChangingShelf(book, oldShelf, newShelf)
  }

  render() {
    const { book } = this.props
    const trigger = (<span><Icon name='dropdown'/></span>)
    return (
      <Dropdown
        book={book}
        options={this.state.options}
        onChange={this.handleUpdateShelf}
        trigger={trigger}
        pointing='top left'
        icon={null}
      />
    )
  }
}

export default ShelfChanger
