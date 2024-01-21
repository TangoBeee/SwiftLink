import styled from "styled-components";

export const ButtonContainer = styled.button`
    
    all: unset;
    width: 496px;
    height: 48px;
    background-color: #e5e8d0;
    margin-top: 20px;
    border-radius: 6px;
    cursor: pointer;


    text-align: center;
    color: #4b5563;

    &:hover {
        background-color: #d7dabf;
    }

    &:disabled {
        background-color: #e5e8d0;
        opacity: 0.5;
        cursor: not-allowed;
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        width: 100%;
    }
`