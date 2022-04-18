import React from 'react';
import {screen} from '@testing-library/react';
import renderWithRouter from '../data/renderWithRouter';
import Movies from '../pages/Movies';
import {EXCLUDE_LINK_INDEX_MOVIES,
  AMOUNT_OF_MENU_LINKS, AMOUNT_OF_ADS} from '../data/index';
import '@testing-library/jest-dom';

describe('02. Testing Movies', () => {
  test(`02.01 - Testing if the menu exists
  with the correct amount of options`, () => {
    renderWithRouter(<Movies />);

    const menuElement = screen.getByRole('navigation', {name: 'main-menu'});
    const links = screen.getAllByRole('link')
        .length - EXCLUDE_LINK_INDEX_MOVIES;

    expect(menuElement).toBeInTheDocument();
    expect(links).toBe(AMOUNT_OF_MENU_LINKS);
  });

  test(`02.02 - Testing if ad exists`, () => {
    renderWithRouter(<Movies />);

    const adElement = screen.getAllByTestId('advisor');

    expect(adElement.length).toBe(AMOUNT_OF_ADS);
  });

  test(`02.03 - Testing if Search Box exists`, () => {
    renderWithRouter(<Movies />);

    const searchBox = screen.getByTestId('search-box');

    expect(searchBox).toBeInTheDocument();
  });
});
