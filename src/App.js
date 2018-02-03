import React, { Component } from 'react';
import { Container, Header, Input, Tab } from 'semantic-ui-react'
import CurrentlyReading from './Components/CurrentlyReading';

const panes = [
  { menuItem: 'Currently Reading', render: () => <Tab.Pane><CurrentlyReading /></Tab.Pane> },
  { menuItem: 'Want to Read', render: () => <Tab.Pane>Tab 2 Content</Tab.Pane> },
  { menuItem: 'Read', render: () => <Tab.Pane>Tab 3 Content</Tab.Pane> },
  { menuItem: 'Search', render: () => <Tab.Pane><Input icon='search' placeholder='Search...' /></Tab.Pane> },
]

class App extends Component {
  render() {
    return (
      <Container style={{ padding: '2em 0em' }}>
        <Header as='h1'>My Reads</Header>
        <Tab panes={panes} />
      </Container>
    );
  }
}

export default App;
