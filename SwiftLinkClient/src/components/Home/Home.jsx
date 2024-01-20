import React from 'react'
import { ThemeProvider } from "styled-components";
import { HomeContainer } from './Home.styled'
import Logo from '../../assets/logo-black.png'
import PasteIcon from '../../assets/paste-icon.png'
import { responsiveTheme } from '../../constants/styled-constants'

const Home = () => {
  return (
    <ThemeProvider theme={ responsiveTheme }>
        <HomeContainer>
            <div className="home-content">
                <div className="content">
                    <h1>Short links, Magical results</h1>
                    <p>Your loooong links will be shortened by a click!</p>
                </div>
            </div>

            <div className="form-content-wrapper">
                <div className="form-content">
                    <div className="form-logo-wrapper">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <h2>Make a magic link:</h2>

                    <form>
                        <div className="input-wrapper">
                            <input type="url" name="url" placeholder='Enter your URL' />

                            <div className="input-icon-wrapper">
                                <img src={PasteIcon} alt="Paste-Icon" />
                            </div>
                        </div>
                        <button>Shorten it</button>
                    </form>
                </div>
            </div>
        </HomeContainer>
    </ThemeProvider>
  )
}

export default Home