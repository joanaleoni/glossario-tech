import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header component', () => {
  render(<App />);
  const headerElement = screen.getByRole('banner');
  expect(headerElement).toBeInTheDocument();
});

test('renders glossary component', () => {
  render(<App />);
  const glossaryElement = screen.getByTestId('glossary');
  expect(glossaryElement).toBeInTheDocument();  
});

test('renders filters component', () => {
  render(<App />);
  const filtersElement = screen.getByTestId('filters-component');
  expect(filtersElement).toBeInTheDocument();
});

test('renders footer component', () => {
  render(<App />);
  const footerElement = screen.getByRole('contentinfo');
  expect(footerElement).toBeInTheDocument();
});