import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Components
import CharacterList from 'src/components/CharacterList'

describe('Testing Pagination', () => {
  it('should search the next heroes of the list', async () => {
    render(
      <BrowserRouter>
        <CharacterList />
      </BrowserRouter>
    )

    const buttonElement = await screen.findByRole('button', { name: /2/i })
    userEvent.click(buttonElement)

    const headingElement = await screen.findAllByRole('heading', { name: /okoye/i })

    expect(headingElement).toBeTruthy()
  })
})