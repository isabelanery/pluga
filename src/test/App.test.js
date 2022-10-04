import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import mockApi from './mocks/api';
import api from '../services/api';

describe('The page is rendered correctly', () => {
  beforeEach(() => {
    api.getTools = jest.fn().mockResolvedValue({ data: mockApi });
  });

  afterEach(() => jest.clearAllMocks());

  it('has a search bar', () => {
    render(<App />);
    const searchBar = screen.getByRole("textbox");
    expect(searchBar).toBeInTheDocument();
  });

  it('has two buttons to switch pages', () => {
    render(<App />);
    const changePages = screen.getAllByRole("button");
    expect(changePages[0]).toBeInTheDocument();
    expect(changePages[1]).toBeInTheDocument();
  });

  it('the API should be called', () => {
    render(<App />);
    expect(api.getTools).toBeCalled();
  });

  it('renders 11 apps/page', async () => {
    const {getAllByRole} = render(<App />);
    await waitFor(() => expect(getAllByRole('img')[0]).toBeInTheDocument());
    await waitFor(() => expect(getAllByRole('img')[10]).toBeInTheDocument());
  });
});
