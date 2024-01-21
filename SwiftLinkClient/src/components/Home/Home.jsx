import React, { useRef, useState } from 'react'
import { ThemeProvider } from "styled-components";
import { HomeContainer } from './Home.styled'
import Logo from '../../assets/logo-black.png'
import PasteIcon from '../../assets/paste-icon.png'
import { responsiveTheme } from '../../constants/styled-constants'

const Home = () => {
    
  const defaultFormButtonText = "Shorten it"
  
  const [urlInput, setUrlInput] = useState("")
  const [formButtonText, setFormButtonText] = useState(defaultFormButtonText)
  const formRef = useRef()
  const formInputRef = useRef()
  const pasteBtnRef = useRef()

  const urlRegex = new RegExp(
    "^(https?:\\/\\/)?" + // protocol
      "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
      "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
      "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
      "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
      "(\\#[-a-z\\d_]*)?$",
    "i"
  )

  const onUrlInputChangeHandler = (event) => {
    setUrlInput(event.target.value)
  }

  const onSubmitHandler = (event) => {
    event.preventDefault()
    setFormButtonText("Shortening...")
    formRef.current.style.pointerEvents = "none"
    formInputRef.current.setAttribute('tabindex', '-1')
    pasteBtnRef.current.setAttribute('tabindex', '-1')

    setTimeout(() => {
        setFormButtonText(defaultFormButtonText)
        formRef.current.style.pointerEvents = "auto"
        formInputRef.current.setAttribute('tabindex', '0')
        pasteBtnRef.current.setAttribute('tabindex', '0')
    }, 3000)
  }

  return (
    <ThemeProvider theme={ responsiveTheme }>
        <HomeContainer>
            <div className="home-content">
                <div className="content">
                    <h1>Shorten Smart, <span>Share Swiftly.</span></h1>
                    <p>Your loooong links will be shortened by a click!</p>
                </div>
            </div>

            <div className="form-content-wrapper">
                <div className="form-content">
                    <div className="form-logo-wrapper">
                        <img src={Logo} alt="Logo" />
                    </div>

                    <h2>Abracadabra, make me a magic link!</h2>

                    <form ref={formRef} onSubmit={onSubmitHandler}>
                        <div className="input-wrapper">
                            <input ref={formInputRef} onChange={onUrlInputChangeHandler} value={urlInput} type="text" name="url" placeholder='Enter your URL here' />
                            <p className={`${urlInput && !urlRegex.test(urlInput) ? "input-error" : ""}`}>Please enter a valid URL! e.g. https://example.com</p>
                            <div ref={pasteBtnRef} className="input-icon-wrapper">
                                <img src={PasteIcon} alt="Paste-Icon" />
                            </div>
                        </div>
                        <button disabled={!urlRegex.test(urlInput)}> {formButtonText} </button>
                    </form>
                </div>
            </div>
        </HomeContainer>
    </ThemeProvider>
  )
}

export default Home