import { cleanup, screen } from '@testing-library/react';
import renderWithRedux from './renderWithRedux';
import App from '../App';

describe('testing clicks', () => {
  beforeEach(cleanup);
  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />, 
      { initialState: { clickReducer: { counter: 5 }}});
    const buttonAdicionar = screen.queryByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('5')).toBeInTheDocument();
  });
});
