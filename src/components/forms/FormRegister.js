import React from 'react'
import InputSubmit from './InputSubmit'
import Input from './Input'
import Form from './Form'

function FormRegister() {
  return (
    <Form>
      <Input name="name" label="Name" type="text" />
      <Input name="email" label="E-mail" type="email" />
      <Input name="password" label="Password" type="password" />
      <Input name="confirm_password" label="Confirm Password" type="password" />
      <InputSubmit name="Cadastrar" width="100%" />
    </Form>
  )
}

export default FormRegister