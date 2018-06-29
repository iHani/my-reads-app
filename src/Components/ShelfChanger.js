import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon } from 'semantic-ui-react';

class ShelfChanger extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelf: PropTypes.string,
    updateShelf: PropTypes.func.isRequired
  }

  state = {
    options: [
      { key: 'currentlyReading', value: 'currentlyReading', text: 'Currently Reading', icon: this.props.shelf === 'currentlyReading' ? 'check' : '' },
      { key: 'wantToRead', value: 'wantToRead', text: 'Want to Read', icon: this.props.shelf === 'wantToRead' ? 'check' : '' },
      { key: 'read', value: 'read', text: 'Read', icon: this.props.shelf === 'read' ? 'check' : '' },
      { key: 'none', value: 'none', text: 'None', icon: this.props.shelf === 'none' ? 'check' : '' }
    ]
  }

  handleOnChange = (e, { book, options, value }) => {
    const currentshelf = book.shelf;
    const newShelf = value;
    if (newShelf !== currentshelf) {
      this.props.updateShelf(book, newShelf);
    }
  }

  render() {
    const { book, shelf } = this.props;
    const trigger = (<span><Icon name='dropdown'/></span>);
    return (
      <Dropdown
        book={book}
        options={this.state.options}
        onChange={this.handleOnChange}
        defaultValue={shelf}
        trigger={trigger}
        pointing='top left'
        icon={null}
        selectOnBlur={false}
      />
    )
  }
}

export default ShelfChanger;
