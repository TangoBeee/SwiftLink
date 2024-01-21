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
      
      callShortURLAPI()
    }

    const callShortURLAPI = async () => {
        await fetch(`${import.meta.env.VITE_SERVER_BASE_URL}/url`, {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({"url": urlInput})
        }).then(res => res.json())
        .then(res => {
            if(res.ok) {
                const resShortID = res.id;
                setFormButtonText(defaultFormButtonText)
                formRef.current.style.pointerEvents = "auto"
                formInputRef.current.removeAttribute('disabled')
                setShowResult(true)
                setShortUrl(`${import.meta.env.VITE_SERVER_BASE_URL}/${resShortID}`)
            } else {
                setFormButtonText(defaultFormButtonText)
                formRef.current.style.pointerEvents = "auto"
                formInputRef.current.removeAttribute('disabled')
                setShowResult(true)
                setShortUrl("Something went wrong!")
            }
        })
        .catch((error) => {
            console.log(error.message)
        })
    }
  

  return (
    <FormContainer ref={formRef} onSubmit={onSubmitHandler}>
      <URLInput
        inputRef={formInputRef}
        value={urlInput}
        setUrlInput={setUrlInput}
        onChange={onUrlInputChangeHandler}
        isError={urlInput && !urlRegex.test(urlInput)}
      />
      
      <Button formButtonText={formButtonText} disabled={!urlRegex.test(urlInput)}/>
    </FormContainer>
  );
}

export default Form;
