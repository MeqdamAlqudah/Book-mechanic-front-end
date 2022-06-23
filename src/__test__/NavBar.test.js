import * as React from 'react';
import { Link, BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import Navbar from '../components/Pages/NavBar';

import store from '../redux/configureStore';

const renderer = require('react-test-renderer');

global.React = React;
describe('Test NavBar', () => {
  test('test Link path', () => {
    const clickHandler = () => {};
    const component = renderer.create(
      <Router location="/">
        <Link to="/" clickHandler={clickHandler}>go to</Link>
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree.props.href).toEqual('/');
  });
  test('test Navbar component', () => {
    const component = renderer.create(
      <Provider store={store}>
        <Router location="/">
          <Navbar />
        </Router>
      </Provider>,
    );
    const tree = component.toJSON();
    expect(tree.props.href).toMatchSnapshot();
  });
});
