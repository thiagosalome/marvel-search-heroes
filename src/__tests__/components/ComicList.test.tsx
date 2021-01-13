import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'

// Components
import ComicList from 'src/components/ComicList'

// Mocks
import comics from 'src/mocks/comics.json'

describe('Testing ComicList', () => {
  it('should list at least a comic', async () => {
    render(
      <BrowserRouter>
        <ComicList comics={comics.data.results} />
      </BrowserRouter>
    )

    const liElements = await screen.findAllByRole('listitem')

    expect(liElements.length).toBeLessThanOrEqual(12)
    expect(liElements.length).toBeGreaterThan(0)
  })
})