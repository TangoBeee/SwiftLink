import React from 'react';
import { ThemeProvider } from "styled-components";
import { responsiveTheme } from '../../constants/styled-constants'
import { HomeContentContainer } from './HomeContent.styled';

const HomeContent = () => {
  return (
    <ThemeProvider theme={ responsiveTheme }>
        <HomeContentContainer>
        <div className="content">
            <h1>Shorten Smart, <span>Share Swiftly.</span></h1>
            <p>Your loooong links will be shortened by a click!</p>
        </div>
        </HomeContentContainer>
    </ThemeProvider>
  );
}

export default HomeContent;
