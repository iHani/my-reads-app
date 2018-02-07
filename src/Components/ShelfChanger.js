import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon } from 'semantic-ui-react';

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string,
    HandleChangingShelf: PropTypes.func.isRequired
  }

  state = {
    options: [
      { key: 'currentlyReading', value: 0, text: 'Currently Reading', icon: this.props.shelf === 'currentlyReading' ? 'check' : '' },
      { key: 'wantToRead', value: 1, text: 'Want to Read', icon: this.props.shelf === 'wantToRead' ? 'check' : '' },
      { key: 'read', value: 2, text: 'Read', icon: this.props.shelf === 'read' ? 'check' : '' }
    ]
  }

  handleOnChange = (e, { book, options, value }) => {
    const currentshelf = book.shelf;
    const newShelf = options[value].key;
    if (newShelf !== currentshelf) {
      this.props.HandleChangingShelf(book, newShelf);
    }
  }

  render() {
    const { book } = this.props;
    const trigger = (<span><Icon name='dropdown'/></span>)
    return (
      <Dropdown
        book={book}
        options={this.state.options}
        onChange={this.handleOnChange}
        trigger={trigger}
        pointing='top left'
        icon={null}
      />
    )
  }
}

export default ShelfChanger;
