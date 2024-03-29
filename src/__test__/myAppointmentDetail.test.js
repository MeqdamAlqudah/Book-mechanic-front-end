import * as React from 'react';
import MyAppointmentDetail from '../components/Pages/MyAppointmentDetail';
import store from '../redux/configureStore';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

const renderer = require('react-test-renderer');

global.React = React;
describe('Test MyAppointmentDetail', () => {
  test('test My appointment rendering ', () => {
    const v4 = jest.fn(() => {});
    const AxiosWrapper = jest.fn(() => Promise.resolve({
      json: () => Promise.resolve({
        car_id: 2,
        created_at: '2022-06-17T21:47:57.658Z',
        date: '1999-07-01T00:00:00.000Z',
        description: 'desciption for appointment',
        id: 1,
        updated_at: '2022-06-17T21:47:57.658Z',
        user_id: 1,
      }),
    }));
    const component = renderer.create(
      <Provider store={store}>
      <Router location="/">
      <MyAppointmentDetail userid={1} />
      </Router>
      </Provider>,
    );

    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
  });
});
