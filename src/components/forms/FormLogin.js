import React from 'react'
import LogoLink from '../layout/LogoLink'
import InputSubmit from './InputSubmit'
import './FormLogin.css'

function FormLogin() {
  return (
    <div className="form-container">
        <div className="form-logo">
            <LogoLink />
        </div>
        <form>
            <div className="form-body">
                <div className="form-input">
                    <label htmlFor="email">E-mail</label>
                    <input type="text" name="email" />
                </div>
                <div className="form-input">
                    <label htmlFor="password">Password</label>
                    <input type="text" name="password" />
                </div>
                <div className="form-input">
                    <InputSubmit name="Entrar" width="100%" />
                </div>
            </div>
        </form>
    </div>
  )
}

export default FormLogin