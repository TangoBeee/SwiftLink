import React, { useRef, useState } from 'react'
import URLInput from '../URLInput/URLInput';
import { FormContainer } from './Form.styled';
import Button from '../Button/Button';

const Form = ({ setShowResult, setShortUrl }) => {
    const defaultFormButtonText = "Shorten it"
  
    const [urlInput, setUrlInput] = useState("")
    const [formButtonText, setFormButtonText] = useState(defaultFormButtonText)
    const formRef = useRef()
    const formInputRef = useRef()
  
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
      const userUrl = event.target[0].value

      setFormButtonText("Shortening...")
      formRef.current.style.pointerEvents = "none"
      formInputRef.current.setAttribute('disabled', 'true')
      setShowResult(false)
  
      setTimeout(() => {
          setFormButtonText(defaultFormButtonText)
          formRef.current.style.pointerEvents = "auto"
          formInputRef.current.removeAttribute('disabled')
          setShowResult(true)
          setShortUrl("https://localhost:5000/hi8DkPp0")
      }, 3000)
    }
  

  return (
    <FormContainer ref={formRef} onSubmit={onSubmitHandler}>
      <URLInput
        inputRef={formInputRef}
        value={urlInput}
        onChange={onUrlInputChangeHandler}
        isError={urlInput && !urlRegex.test(urlInput)}
      />
      
      <Button formButtonText={formButtonText} disabled={!urlRegex.test(urlInput)}/>
    </FormContainer>
  );
}

export default Form;
