import styled from 'styled-components'

export const HomeContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding-block: 20px;


    @media (max-width: ${(props) => props.theme.smallDesktop.width}) {
        flex-direction: column;
        gap: 60px;
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        gap: 30px;
    }
`