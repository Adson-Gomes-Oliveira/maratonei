import React from 'react';
import {screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Homepage from '../pages/Homepage';
import renderWithRouter from '../data/renderWithRouter';
import {AMOUNT_OF_MENU_LINKS, EXCLUDE_LINK_INDEX} from '../data';
import '@testing-library/jest-dom';

describe('01. Testing Homepage', () => {
  test('01.01 - Testing if maratonei logo exists in Homepage', () => {
    renderWithRouter(<Homepage />);

    const logoElement = screen.getByTestId('maratonei-logo-svg');

    expect(logoElement).toBeInTheDocument();
  });

  test(`01.02 - Testing if the menu exists
  with the correct amount of options`, () => {
    renderWithRouter(<Homepage />);

    const menuElement = screen.getByRole('navigation', {name: 'main-menu'});
    const links = screen.getAllByRole('link').length - EXCLUDE_LINK_INDEX;

    expect(menuElement).toBeInTheDocument();
    expect(links).toBe(AMOUNT_OF_MENU_LINKS);
  });

  test(`01.03 - Testing if branding text is
  showing up inside the page`, () => {
    renderWithRouter(<Homepage />);

    const brandingTextOne = screen.getByText(/Sua wiki de filmes e series/i);
    const brandingTextTwo = screen.getByText(
        /SAIBA ONDE ASSISTIR | SALVE SEUS FAVORITOS E MUITO MAIS.../i,
    );

    expect(brandingTextOne).toBeInTheDocument();
    expect(brandingTextTwo).toBeInTheDocument();
  });

  test(`01.04 - Testing if streamings logos are
  rendering correctly on the homepage`, () => {
    renderWithRouter(<Homepage />);

    const streamingsLogos = screen.getAllByTestId('streaming-logo');

    expect(streamingsLogos.length).toBe(10);
  });

  test(`01.05 - Testing if buttons exists
  with their correct names`, () => {
    renderWithRouter(<Homepage />);

    const buttonFindSearching = screen.getByText(
        /Encontre series e filmes/i, {selector: 'button'},
    );
    const buttonFindRandom = screen.getByText(
        /Me recomenda uma ai!/i, {selector: 'button'},
    );

    expect(buttonFindSearching).toBeInTheDocument();
    expect(buttonFindRandom).toBeInTheDocument();
  });

  test(`01.06 - Testing buttons and, if when clicked, the buttons
  redirect for the correct page (First Button)`, async () => {
    const {history} = renderWithRouter(<Homepage />);
    const buttonFindSearching = screen.getByTestId('find-searching');

    await userEvent.click(buttonFindSearching);

    const {pathname} = history.location;
    expect(pathname).toBe('/movies');
  });

  test(`01.07 - Testing buttons and, if when clicked, the buttons
  redirect for the correct page (Second Button)`, async () => {
    const {history} = renderWithRouter(<Homepage />);
    const buttonFindRandom = screen.getByTestId('find-random');

    await userEvent.click(buttonFindRandom);

    const {pathname} = history.location;
    expect(pathname).toBe('/surprise-me');
  });
});
