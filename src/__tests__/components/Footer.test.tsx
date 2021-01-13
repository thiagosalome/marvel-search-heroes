import React from 'react'
import { render, screen } from '@testing-library/react'
import Footer from 'src/components/Footer'

describe('Testing Footer', () => {
  test('should render footer in document', () => {
    render(<Footer/>)
    const footerElement = screen.getByText(/Marvel Search Heroes/i)
    expect(footerElement).toBeInTheDocument()
  }) 
})