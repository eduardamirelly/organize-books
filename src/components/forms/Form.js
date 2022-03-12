import React from 'react'
import LogoLink from '../layout/LogoLink'
import './Form.css'

function Form(props) {
  return (
    <>
      <img className="img-back" src="/images/back-forms.jpg" alt="" />
      <div className="content-align">
        <div className="form-container">
            <LogoLink />
            <form>
                <div className="form-body">
                    {props.children}
                </div>
            </form>
        </div>
      </div>
    </>
  )
}

export default Form