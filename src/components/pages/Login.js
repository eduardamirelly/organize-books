import React from 'react'
import FormLogin from '../forms/FormLogin'
import './Login.css'

function Login() {

  return (
    <>
      <img className="img-back" src="/images/back-forms.jpg" alt="" />
      <div className="content-align">
        <FormLogin />
      </div>
    </>
  )
}

export default Login