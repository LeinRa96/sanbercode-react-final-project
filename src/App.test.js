import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test("renders Welcome to LeinRa's Game Kiosk!", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Welcome to LeinRa's Game Kiosk/i);
  expect(linkElement).toBeInTheDocument();
});
