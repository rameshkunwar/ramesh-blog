import React, { useState } from "react"
import { Link } from "gatsby"
import Axios from "axios"
import styled from "@emotion/styled"
import { css } from "@emotion/core"
import siteConfig from "../../site-config"

const FormControl = styled.input`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${siteConfig.brandColor};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 1.5rem;
`
const TextAreaControl = styled.textarea`
  display: block;
  width: 100%;
  height: calc(1.5em + 0.75rem + 2px);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
  color: ${siteConfig.brandColor};
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  margin-bottom: 1rem;
`
const Button = styled.button`
  background-color: ${siteConfig.brandColor};
  color: #fff;
  border: 0;
  border-radius: 0.125rem;
  webkit-box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
    0 2px 10px 0 rgba(0, 0, 0, 0.12);
  box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16), 0 2px 10px 0 rgba(0, 0, 0, 0.12);
  transition: color .15s ease-in-out,background-color .15s ease-in-out,border-color .15s ease-in-out,box-shadow .15s ease-in-out,-webkit-box-shadow .15s ease-in-out;
    padding: .4rem 2rem;
    
}
  :hover {
    background-color: ${siteConfig.alternativeColor};
    color: ${siteConfig.brandColor};
  }
`

const ContactForm = () => {
  const [serverState, setServerState] = useState({
    submitting: false,
    status: null,
  })

  const handleServerResponse = (ok, msg, form) => {
    setServerState({
      submitting: false,
      status: { ok, msg },
    })
    if (ok) {
      form.reset()
    }
  }

  const handleOnSubmit = e => {
    e.preventDefault()
    const form = e.target
    setServerState({ submitting: true })
    Axios({
      method: "post",
      url: "https://getform.io/f/a5776ea6-10e5-435f-a9a5-39bcf1efa0fc",
      data: new FormData(form),
    })
      .then(res => {
        handleServerResponse(true, "Thanks for contacting!", form)
      })
      .catch(err => {
        handleServerResponse(false, err, form)
      })
  }

  return (
    <form
      onSubmit={handleOnSubmit}
      autoComplete="off"
      css={css`
        border-color: #e0e0e0;
        text-align: center;
        padding: 2rem;
        border: 1px solid #dee2e6;
      `}
      action="https://getform.io/f/a5776ea6-10e5-435f-a9a5-39bcf1efa0fc"
      method="POST"
    >
      <FormControl
        autoComplete="none"
        type="text"
        name="name"
        placeholder="Name"
        required
      />
      <FormControl
        autoComplete="none"
        type="email"
        name="email"
        placeholder="E-mail"
        required
      />
      <TextAreaControl
        autoComplete="xyz"
        rows="3"
        name="message"
        placeholder="Message"
        required
      />
      <Button disabled={serverState.submitting} type="submit">
        Send
      </Button>
      <div>
        {serverState.status && (
          <p
            css={css`
              margin: 1rem;
              color: ${serverState.status.ok
                ? siteConfig.brandColor
                : siteConfig.alternativeColor};
              font-weight: 600;
            `}
          >
            {serverState.status.msg}
          </p>
        )}
      </div>
    </form>
  )
}
export default ContactForm
