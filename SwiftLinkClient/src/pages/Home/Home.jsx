import React from 'react'
import { ThemeProvider } from "styled-components";
import { HomeContainer } from './Home.styled'
import { responsiveTheme } from '../../constants/styled-constants'
import HomeContent from '../../components/HomeContent/HomeContent';
import FormContent from '../../components/FormContent/FormContent';

const Home = () => {

  return (
    <ThemeProvider theme={ responsiveTheme }>
        <HomeContainer>

            <HomeContent />

            <FormContent />
            
        </HomeContainer>
    </ThemeProvider>
  )
}

export default Home