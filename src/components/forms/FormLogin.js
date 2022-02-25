import React from 'react'
import InputSubmit from './InputSubmit'
import Input from './Input'
import Form from './Form'

function FormLogin() {
  return (
    <Form>
        <form>
            <Input name="email" label="E-mail" type="email" />
            <Input name="password" label="Password" type="password" />
            <InputSubmit name="Entrar" width="100%" />
        </form>
    </Form>
  )
}

export default FormLogin