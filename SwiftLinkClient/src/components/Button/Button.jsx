import React from 'react'
import { ButtonContainer } from './Button.styled'
import { responsiveTheme } from '../../constants/styled-constants'
import { ThemeProvider } from 'styled-components'

const Button = ({ disabled, formButtonText }) => {
  return (
    <ThemeProvider theme={ responsiveTheme }>
        <ButtonContainer disabled={disabled}>
            {formButtonText}
        </ButtonContainer>
    </ThemeProvider>
  )
}

export default Button