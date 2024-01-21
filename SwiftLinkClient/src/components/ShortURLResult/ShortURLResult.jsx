import React from 'react'
import { ShortURLResultContainer } from './ShortURLResult.styled'
import { ThemeProvider } from 'styled-components'
import { responsiveTheme } from '../../constants/styled-constants'

const ShortURLResult = () => {
  return (
    <ThemeProvider theme={ responsiveTheme }>
        <ShortURLResultContainer>
            <div>
                <h1>Enjoy:</h1>
                <a target='_blank' href="https://example.com">https://example.com</a>
                <button>Click to copy</button>
            </div>
        </ShortURLResultContainer>
    </ThemeProvider>
  )
}

export default ShortURLResult