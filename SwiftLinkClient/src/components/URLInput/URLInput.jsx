import React from 'react';
import { URLInputContainer } from './URLInput.styled';
import PasteIcon from '../../assets/paste-icon.png'
import { ThemeProvider } from 'styled-components';
import { responsiveTheme } from '../../constants/styled-constants';

const URLInput = ({ inputRef, value, onChange, isError }) => {
  return (
    <ThemeProvider theme={ responsiveTheme }>
        <URLInputContainer>
        <input ref={inputRef} value={value} onChange={onChange} placeholder='Enter your URL here' />

        <div className="input-icon-wrapper">
            <img src={PasteIcon} alt="Paste-Icon" />
        </div>

        {isError && <p className="input-error">Please enter a valid URL! e.g. https://example.com</p>}
        </URLInputContainer>
    </ThemeProvider>
  );
};

export default URLInput;