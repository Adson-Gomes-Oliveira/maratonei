import React from 'react';
import {screen} from '@testing-library/react';
import renderWithRouter from '../data/renderWithRouter';
import Explore from '../pages/Explore';
import {EXCLUDE_LINK_INDEX_EXPLORE,
  AMOUNT_OF_MENU_LINKS, AMOUNT_OF_ADS} from '../data/index';
import '@testing-library/jest-dom';

describe('02. Testing Explore', () => {
  test(`02.01 - Testing if the menu exists
  with the correct amount of options`, () => {
    renderWithRouter(<Explore />);

    const menuElement = screen.getByRole('navigation', {name: 'main-menu'});
    const links = screen.getAllByRole('link')
        .length - EXCLUDE_LINK_INDEX_EXPLORE;

    expect(menuElement).toBeInTheDocument();
    expect(links).toBe(AMOUNT_OF_MENU_LINKS);
  });

  test(`02.02 - Testing if ad exists`, () => {
    renderWithRouter(<Explore />);

    const adElement = screen.getAllByTestId('advisor');

    expect(adElement.length).toBe(AMOUNT_OF_ADS);
  });

  test(`02.03 - Testing if Search Box exists`, () => {
    renderWithRouter(<Explore />);

    const searchBox = screen.getByTestId('search-box');

    expect(searchBox).toBeInTheDocument();
  });
});
