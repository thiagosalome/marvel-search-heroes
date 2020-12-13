import { createGlobalStyle } from 'styled-components'
import normalize from './normalize'
import fonts from './fonts'

export default createGlobalStyle`
  ${normalize}
  ${fonts}
`