import React from 'react'
import LogoLink from '../layout/LogoLink'
import './Form.css'

function Form(props) {
  return (
    <div className="form-container">
        <div className="form-logo">
            <LogoLink />
        </div>
        <form>
            <div className="form-body">
                {props.children}
            </div>
        </form>
    </div>
  )
}

export default Form