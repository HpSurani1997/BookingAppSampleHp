/**
 * @format
 */

import 'react-native';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import {fireEvent, render, screen} from '@testing-library/react-native';
import Home from '../src/views/Home';
import HotelDetails from '../src/views/HotelDetails';
import App from '../src/App';
import {ThemeProvider} from 'styled-components/native';
import theme from '../src/styles/theme';
import HotelCard from '../src/components/HotelCard';

jest.mock('@fortawesome/react-native-fontawesome', () => ({
  FontAwesomeIcon: '',
}));
jest.mock('react-native-reanimated', () =>
  require('react-native-reanimated/mock'),
);
const mockedNavigate = jest.fn();
jest.mock('@react-navigation/native', () => {
  const actualNav = jest.requireActual('@react-navigation/native');
  return {
    ...actualNav,
    useNavigation: () => ({
      navigate: mockedNavigate,
      goBack: mockedNavigate
    }),
    useRoute:  () => ({
      params: { hotel: {}},
    }),
  };
});
const mockDimensions = ({width, height}: any) => {
  jest.resetModules();
  jest.doMock('react-native/Libraries/Utilities/Dimensions', () => ({
    get: jest.fn().mockReturnValue({width, height}),
  }));
};

const navigationRender = (component: JSX.Element) => {
  render(<NavigationContainer>{component}</NavigationContainer>);
};

describe('Navigation component render', () => {
  it('App unit test', () => {
    render(
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>,
    );

    // test hotel card
    navigationRender(
      <ThemeProvider theme={theme}>
        <Home />
      </ThemeProvider>,
    );
    const hotelItem = screen.getByTestId('hotelItem0');
    expect(hotelItem).toBeTruthy();
    fireEvent(hotelItem, 'press');

    // test hotel card list
    const scrollView = screen.getByTestId('scrollView');
    expect(scrollView).toBeTruthy();
    fireEvent.scroll(scrollView, {
      nativeEvent: {
        contentSize: {height: 600, width: 400},
        contentOffset: {y: 150, x: 0},
        layoutMeasurement: {height: 100, width: 100}, // Dimensions of the device
      },
    });

    // test category list component
    const categoryOption = screen.getByTestId('categoryOption0');
    expect(categoryOption).toBeTruthy();
    fireEvent(categoryOption, 'press');

    // test category hotel details component
    navigationRender(
      <ThemeProvider theme={theme}>
        <HotelDetails />
      </ThemeProvider>,
    );
    const backBtn = screen.getByTestId('backBtn');
    expect(backBtn).toBeTruthy();
    fireEvent(backBtn, 'press');
  });
});
