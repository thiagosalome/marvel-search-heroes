import React, { useState } from 'react';

// Assets
import ArrowRight from 'src/images/icons/arrow-right.svg'
import ArrowLeft from 'src/images/icons/arrow-left.svg'

// Styles
import PaginationStyle from './styles';

type PaginationProps = {
  numberPages: number;
  interval: number;
  limit: number;
  setOffset: (value: number) => void
}

const Pagination = ({ numberPages, interval, limit, setOffset }: PaginationProps) => {
  const [ activePage, setActivePage ] = useState(1)
  const arrayNumbers = new Array(numberPages).fill(1).map((_, index: number) => index + 1)

  function handleClickArrow(direction: string) {
    const newActivePage = direction === 'right' ? activePage + 1 : activePage - 1
    setOffset(limit * (newActivePage - 1))
    setActivePage(newActivePage)
  }

  function handleClickNumber (activePage: number) {
    setOffset(limit * (activePage - 1))
    setActivePage(activePage)
  }

  return (
    <PaginationStyle>
      { activePage - 1 > 0 && <button onClick={() => handleClickArrow('left')}><img src={ArrowLeft} alt='Voltar' title='Voltar' /></button> }
      <ul>
        {
          arrayNumbers.slice((activePage - 1) - interval, (activePage - 1)).map((item: number) => (
            <li key={item}>
              <button onClick={() => handleClickNumber(item)} className={`${activePage === item ? 'active' : ''}`}>
                {item}
              </button>
            </li>
          ))
        }
        {
          arrayNumbers.slice((activePage - 1), (activePage - 1) + (interval + 1)).map((item: number) => (
            <li key={item}>
              <button onClick={() => handleClickNumber(item)} className={`${activePage === item ? 'active' : ''}`}>
                {item}
              </button>
            </li>
          ))
        }
      </ul>
      { activePage < numberPages && <button onClick={() => handleClickArrow('right')}><img src={ArrowRight} alt='Avançar' title='Avançar' /></button>}
    </PaginationStyle>
  )
}

Pagination.defaultProps = {
  interval: 3
}

export default Pagination;