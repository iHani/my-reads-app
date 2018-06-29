import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon } from 'semantic-ui-react';

class ShelfController extends Component {
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

  handleOnChange = (a, { book, defaultValue, value }) => {
    // 'defaultRate' is the current Shelf
    // 'value' is the new selected shelf
    if (defaultValue !== value) {
      this.props.updateShelf(book, value);
    }
  }

  render() {
    const trigger = <span><Icon name='dropdown'/></span>;
    return (
      <Dropdown
        book={this.props.book}
        defaultValue={this.props.shelf}
        options={this.state.options}
        onChange={this.handleOnChange}
        trigger={trigger}
        pointing='top left'
        icon={null}
        selectOnBlur={false}
      />
    )
  }
}

export default ShelfController;
