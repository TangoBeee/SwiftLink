import styled from "styled-components";

export const FormContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;
    height: fit-content;

    .form-content {
        width: 560px;
        height: 100%;
        padding: 48px 32px;
        display: flex;
        flex-direction: column;
        align-items: center;

        background-color: white;
        border-radius: 12px;
        margin-right: 160px;

        .form-logo-wrapper {
            width: 80px;
            height: 80px;
            padding: 30px;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #f0f3de;
            opacity: 70%;
            border-radius: 12px;

            img {
                width: 40px;
                height: 40px;
            }
        }

        h2 {
            font-size: 20px;
            line-height: 28px;
            text-align: center;
            font-weight: 500;
            color: #4b5563;
            margin-top: 24px;
        }
    }


    @media (max-width: ${(props) => props.theme.smallDesktop.width}) {
        .form-content {
            margin-right: 0px;
        }
    }


    @media (max-width: ${(props) => props.theme.mobile.width}) {
        width: 100%;

        .form-content {
            width: 80%;
            padding: 40px 24px;

            .form-logo-wrapper {
                width: 70px;
                height: 70px;
                padding: 20px;
                
                img {
                    width: 30px;
                    height: 30px;
                }
            }
        }
    }
`