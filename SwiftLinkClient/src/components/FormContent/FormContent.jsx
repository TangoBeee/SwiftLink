import React from 'react'
import { FormContentContainer } from './FormContent.styled'

import Logo from '../../assets/logo-black.png'
import Form from '../Form/Form'
import { ThemeProvider } from 'styled-components'
import { responsiveTheme } from '../../constants/styled-constants'

const FormContent = () => {

  return (
    <ThemeProvider theme={ responsiveTheme }>
        <FormContentContainer>
            <div className="form-content">
                <div className="form-logo-wrapper">
                    <img src={Logo} alt="Logo" />
                </div>

                <h2>Abracadabra, make me a magic link!</h2>

                <Form />
            </div>
        </FormContentContainer>
    </ThemeProvider>
  )
}

export default FormContent