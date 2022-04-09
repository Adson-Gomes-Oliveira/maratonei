import React from 'react';
import {render, screen} from '@testing-library/react';
import Homepage from '../pages/Homepage';

describe('01. Testing Homepage', () => {
  test('Testing if maratonei logo exists in Homepage', () => {
    render(<Homepage />);
    const logoElement = screen.getByTestId('maratonei-logo-svg');
    expect(logoElement).toBeInTheDocument;
  });

  test('Testing if the menu exists with the correct amount of options', () => {
    render(<Homepage />);
    const menuElement = screen.getByRole('navigation', {name: 'main-menu'});
    expect(menuElement).toBeInTheDocument;
  });

  test(`Testing if streamings logos are
  rendering correctly on the homepage`, () => {
    render(<Homepage />);
    const streamingsLogos = screen.getAllByRole('img');

    expect(streamingsLogos.length).toBe(6);

    streamingsLogos.forEach((logoImg, index) => {
      const actualImage = streamingsLogos[index];
      expect(logoImg.src).toBe(`../images/${actualImage.id}`);
    });
  });

  test('Testing if buttons exists with their correct names', () => {
    render(<Homepage />);
    const buttons = screen.getAllByRole('button');
    expect(buttons.length).toBe(2);
  });

  // Desenvolver testes de rota dos botões
});
