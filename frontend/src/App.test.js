jest.mock('axios', () => ({
  post: jest.fn(),
}));

import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the price predictor form', () => {
  render(<App />);

  expect(
    screen.getByRole('heading', { name: /v7 ai price predictor/i })
  ).toBeInTheDocument();
  expect(
    screen.getByRole('button', { name: /generate valuation/i })
  ).toBeInTheDocument();
  expect(screen.getByDisplayValue('Toyota')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Belta')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Automatic')).toBeInTheDocument();
  expect(screen.getByDisplayValue('Petrol')).toBeInTheDocument();
});
