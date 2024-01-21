import React, { useState } from 'react'
import { ShortURLResultContainer } from './ShortURLResult.styled'
import { ThemeProvider } from 'styled-components'
import { responsiveTheme } from '../../constants/styled-constants'

const ShortURLResult = ({ shortUrl }) => {
  const [copyButtonText, setCopyButtonText] = useState("Click to copy")

  const onCopyUrlHandler = (event) => {
    navigator.clipboard.writeText(shortUrl)
    setCopyButtonText("Copied!")
    event.target.style.pointerEvents = "none"
    event.target.style.opacity = "0.5"
    event.target.setAttribute('disabled', 'true')
  }
  return (
    <ThemeProvider theme={ responsiveTheme }>
        <ShortURLResultContainer>
            <div>
                <h1>Enjoy:</h1>
                <a target='_blank' href={shortUrl}>{shortUrl}</a>
                <button onClick={onCopyUrlHandler}>{copyButtonText}</button>
            </div>
        </ShortURLResultContainer>
    </ThemeProvider>
  )
}

export default ShortURLResult