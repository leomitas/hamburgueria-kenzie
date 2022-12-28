import React from 'react'
import Aside from '../../components/aside'
import FormRegister from '../../components/formRegister'
import { ContainerRegister } from './styles'
import logo from '../../assets/logo.png'

const RegisterPage = () => {
  return (
    <ContainerRegister>
      <div>
        <div>
          <img src={logo} />
        </div>
      </div>
      <Aside />
      <FormRegister />
    </ContainerRegister>
  )
}

export default RegisterPage
