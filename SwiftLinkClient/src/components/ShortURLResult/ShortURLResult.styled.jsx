import styled from "styled-components";

export const ShortURLResultContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    
    div {
        width: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 20px;
        padding: 24px 20px;
        margin-top: 20px;
        background-color: #f3f4f6;
        border-radius: 6px;

        h1 {
            font-size: 24px;
            font-weight: 500;
            line-height: 32px;
            color: #d1d5db;
        }

        a {
            font-size: 16px;
            font-weight: 600;
            line-height: 24px;
            color: #4b5563;
            text-decoration: none;
            word-break: break-all;
        }

        button {
            all: unset;
            font-size: 14px;
            font-weight: 500;
            line-height: 20px;
            color: #6b7280;
            cursor: pointer;
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        div {
            width: 100%;
        }
    }
`