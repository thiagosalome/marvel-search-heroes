// Reference: https://www.youtube.com/watch?v=v77fjkKQTH0&ab_channel=LeighHalliday

import { rest } from 'msw'
import { setupServer } from 'msw/node'

import characters from 'src/mocks/characters.json'
import charactersSorted from 'src/mocks/characters-sorted.json'
import charactersFiltered from 'src/mocks/characters-filtered.json'
import charactersPagination from 'src/mocks/characters-pagination.json'

const server = setupServer(
  rest.get('/characters', (req, res, ctx) => {
    const orderBy = req.url.searchParams.get('orderBy')
    const nameStartsWith = req.url.searchParams.get('nameStartsWith')
    const offset = req.url.searchParams.get('offset')

    if (orderBy === 'name') {
      return res(ctx.json(charactersSorted))
    } else if (nameStartsWith === 'spider') {
      return res(ctx.json(charactersFiltered))
    } else if (offset === '20') {
      return res(ctx.json(charactersPagination))
    } else {
      return res(ctx.json(characters))
    }
  })
)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

export { server, rest }