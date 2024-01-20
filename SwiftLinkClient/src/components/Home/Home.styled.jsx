import styled from 'styled-components'

export const HomeContainer = styled.main`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    padding-block: 20px;

    .home-content {
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
                font-size: 48px;
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
    }

    .form-content-wrapper {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 50%;
        
        .form-content {
            width: 560px;
            height: 386px;
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

            form {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;

                .input-wrapper {
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
                }

                button {
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
                }
            }
        }
    }


    @media (max-width: ${(props) => props.theme.smallDesktop.width}) {
        flex-direction: column;
        gap: 60px;

        .home-content {
            .content {
                align-items: center;
                text-align: center;
                margin-left: 0px;
            }
        }

        .form-content-wrapper {
            .form-content {
                margin-right: 0px;
            }
        }
    }

    @media (max-width: ${(props) => props.theme.mobile.width}) {
        .home-content {
            .content {
                p {
                    width: 70%;
                }
            }
            width: 100%;
        }

        .form-content-wrapper {
            width: 100%;

            .form-content {
                width: 80%;

                form {
                    .input-wrapper {
                        width: 100%;
                    }

                    button {
                        width: 100%;
                    }
                }
            }
        }
    }
`