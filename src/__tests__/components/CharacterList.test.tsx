import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'

// Components
import CharacterList from 'src/components/CharacterList'
import App from "src/App"


describe('Testing CharacterList', () => {
  it('should loads and displays 20 heroes', async () => {
    render(
      <BrowserRouter>
        <CharacterList />
      </BrowserRouter>
    )

    const liElements = await screen.findAllByTestId('list-hero-item')

    expect(liElements.length).toEqual(20)
  })

  
  it('should sort the heroes by name', async () => {
    render(
      <BrowserRouter>
        <CharacterList />
      </BrowserRouter>
    )

    const selectElement = await screen.findByRole('combobox')
    userEvent.selectOptions(selectElement, 'name')

    const headingElement = await screen.findByRole('heading', { name: /3-d man/i })

    expect(headingElement).toBeTruthy()
  })


  it('should sort the heroes by the last modification date', async () => {
    render(
      <BrowserRouter>
        <CharacterList />
      </BrowserRouter>
    )

    const selectElement = await screen.findByRole('combobox')
    userEvent.selectOptions(selectElement, '-modified')

    const headingElement = await screen.findByRole('heading', { name: /hulk/i })

    expect(headingElement).toBeTruthy()
  })

  it('should favor a hero', async () => {
    render(<App />)
  
    const buttonElements = await screen.findAllByRole('button', { name: /favoritar/i })
    userEvent.click(buttonElements[0])

    const favorites = JSON.parse(window.localStorage.getItem('@msh/favorites') as string)

    expect(favorites.length).toBeGreaterThan(0)
  })

  it('should favor a maximum of 5 heroes', async () => {
    render(<App />)
  
    const buttonElements = await screen.findAllByRole('button', { name: /favoritar/i })
    userEvent.click(buttonElements[1])
    userEvent.click(buttonElements[2])
    userEvent.click(buttonElements[3])
    userEvent.click(buttonElements[4])
    userEvent.click(buttonElements[5])

    const favorites = JSON.parse(window.localStorage.getItem('@msh/favorites') as string)

    expect(favorites.length).toEqual(5)
  })


  it('should show only favorites heroes', async () => {
    render(<App />)

    const favorites = JSON.parse(window.localStorage.getItem('@msh/favorites') as string)
    const buttonElement = await screen.findAllByRole('button', { name: /somente favoritos/i })
    userEvent.click(buttonElement[0])

    expect(screen.getByRole('heading', { name: favorites[0].name })).toBeTruthy()
  })

  it('should unfavor a hero', async () => {
    render(<App />)
  
    const buttonElements = await screen.findAllByRole('button', { name: /desfavoritar/i })
    userEvent.click(buttonElements[0])
    
    const favorites = JSON.parse(window.localStorage.getItem('@msh/favorites') as string)

    expect(favorites.length).toEqual(4)
  })
})