import * as React from 'react';
import { Provider } from 'react-redux';
import {
  BrowserRouter as Router,
} from 'react-router-dom';
import CarDetail from '../components/Pages/CarDetail';
import store from '../redux/configureStore';

const renderer = require('react-test-renderer');

global.React = React;
describe('Test CarDetail', () => {
  test('test CarDetail rendering ', () => {
    const useSelector = jest.fn(() => 1);
    const AxiosWrapper = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        brand: 'BMW',
        model: 'Gt-200',
        photo: 'http/photo',
        registration: '232423-sad',
      }),
    }));

    const component = renderer.create(
      <Provider store={store}>
        <Router>
          <CarDetail userId={1} />
        </Router>
      </Provider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
