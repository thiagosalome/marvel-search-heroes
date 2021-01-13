import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

// Components
import CharacterList from 'src/components/CharacterList'

describe('Testing MainSearch', () => {
  it('should filtered by name', async () => {
    render(
      <BrowserRouter>
        <CharacterList />
      </BrowserRouter>
    )

    await act(async () => {
      const inputElement = await screen.findByRole('textbox')
      userEvent.type(inputElement, 'spider')
    })

    const headingElement = await screen.findAllByRole('heading', { name: /spider/i })

    expect(headingElement).toBeTruthy()
  })
})