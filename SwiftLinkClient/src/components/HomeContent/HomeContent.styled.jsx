import styled from "styled-components";

export const HomeContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 50%;

    .content {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
        margin-left: 50px;
        text-align: start;
        gap: 16px;

        h1 {
            font-size: 50px;
            line-height: 48px;
            font-weight: 500;
            color: #374151;
        }

        p {
            font-size: 24px;
            line-height: 32px;
            color: #4b5563;
        }
    }

    @media (max-width: ${(props) => props.theme.smallDesktop.width}) {
        .content {
            align-items: center;
            text-align: center;
            margin-left: 0px;
        }

        .form-content-wrapper {
            .form-content {
                margin-right: 0px;
            }
        }
    }


    @media (max-width: ${(props) => props.theme.mobile.width}) {
        width: 100%;
        
        .content {
            h1 {
                font-size: 30px;
                line-height: 40px;

                span {
                    display: block;
                }
            }
            p {
                font-size: 16px;
                line-height: 24px;
                width: 70%;
            }
        }

        .form-content-wrapper {
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

                h2 {
                    font-size: 16px;
                    line-height: 20px;
                }

                form {
                    .input-wrapper {
                        margin-top: 30px;
                        width: 100%;

                        p.input-error {
                            font-size: 10px;
                            line-height: normal;
                        }
                    }

                    button {
                        width: 100%;
                    }
                }
            }
        }
    }
`