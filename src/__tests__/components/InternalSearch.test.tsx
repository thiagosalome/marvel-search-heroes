import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { act } from 'react-dom/test-utils'

// Components
import InternalSearch from 'src/components/InternalSearch'

describe('Testing InternalSearch', () => {
  it('should filtered by name', async () => {
    render(
      <BrowserRouter>
        <InternalSearch />
      </BrowserRouter>
    )

    await act(async () => {
      const inputElement = await screen.findByRole('textbox')
      userEvent.type(inputElement, 'spider')
    })

    const ulElement = await screen.findByRole('list')

    expect(ulElement).toBeTruthy()
  })
})