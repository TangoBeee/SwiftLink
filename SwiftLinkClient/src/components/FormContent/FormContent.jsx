import React, { useState } from 'react'
import { FormContentContainer } from './FormContent.styled'
import Logo from '../../assets/logo-black.png'
import Form from '../Form/Form'
import { ThemeProvider } from 'styled-components'
import { responsiveTheme } from '../../constants/styled-constants'
import ShortURLResult from '../ShortURLResult/ShortURLResult'

const FormContent = () => {
  const [showResult, setShowResult] = useState(false)
  const [shortUrl, setShortUrl] = useState("")

  return (
    <ThemeProvider theme={ responsiveTheme }>
        <FormContentContainer>
            <div className="form-content">
                <div className="form-logo-wrapper">
                    <img src={Logo} alt="Logo" />
                </div>

                <h2>Abracadabra, make me a magic link!</h2>

                <Form setShowResult={setShowResult} setShortUrl={setShortUrl} />

                { showResult ? <ShortURLResult shortUrl={shortUrl} /> : "" }
            </div>
        </FormContentContainer>
    </ThemeProvider>
  )
}

export default FormContent