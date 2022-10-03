import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import axios from 'axios';
import App from '../App';
import mockApi from './mocks/api';

describe('The page is rendered correctly', () => {
  beforeEach(() => {
    jest.mock("axios");
    axios.get.mockImplementation(() => Promise.resolve({ data: mockApi }));
  });

  afterEach(() => jest.clearAllMocks());

  it('has a button to switch pages', () => {
    render(<App />);
    const toolCards = screen.getByRole("button");
    expect(toolCards).toBeInTheDocument();
  });

  it('list the tools available in the API', () => {
    render(<App />);
    const toolCards = screen.getByRole("img");
    expect(toolCards).toBeInTheDocument();
  });
});
