import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Container, Header, Menu } from 'semantic-ui-react';
import HomePage from './Components/HomePage';
import SearchPage from './Components/SearchPage';

const App = () => (
  <Container style={{ padding: '3em 0em' }}>
    <Header as='h1'>My Reads</Header>
    <Menu>
      <Link to='/'><Menu.Item >Home</Menu.Item></Link>
      <Link to='/search'><Menu.Item >Search</Menu.Item></Link>
    </Menu>
    <Route
      exact
      path='/'
      component={HomePage}
      // render={() => (<HomePage />)}
    />
    <Route
      path='/search'
      component={SearchPage}
      // render={() => (<SearchPage />)}
    />
  </Container>
);

export default App;
