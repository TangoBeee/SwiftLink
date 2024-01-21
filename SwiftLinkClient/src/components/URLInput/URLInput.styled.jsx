import styled from "styled-components";

export const URLInputContainer = styled.div`
    width: 496px;
    margin-top: 40px;
    position: relative;
    
    input {
        width: 100%;
        height: 50px;
        padding: 12px;
        border-radius: 6px;
        background-color: #f3f4f6;
        border: 0px;
        padding-right: 50px;
        outline: 0;

        text-align: start;
        font-size: 16px;
        line-height: 24px;
    }

    .input-icon-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50px;
        height: 50px;
        background-color: #f3f4f6;
        position: absolute;
        right: 0;
        top: 0;
        border-radius: 6px;
        cursor: pointer;

        img {
            width: 28px;
            height: 28px;
        }
    }

    p {
        display: none;

        &.input-error {
            display: block;
            font-size: 12px;
            line-height: 16px;
            color: #e11d48;
            margin-top: 4px;
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        margin-top: 30px;
        width: 100%;

        p.input-error {
            font-size: 10px;
            line-height: normal;
        }
    }
`