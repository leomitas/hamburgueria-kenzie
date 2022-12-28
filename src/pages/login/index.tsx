import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Aside from '../../components/aside'
import FormLogin from '../../components/formLogin'
import { ContainerLogin } from './styles'
import logo from '../../assets/logo.png'

const LoginPage = () => {
  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => {
    if (token) {
      navigate('/home')
    }
  }, [])
  return (
    <ContainerLogin>
      <div>
        <div>
          <img src={logo} />
        </div>
      </div>
      <FormLogin />
      <Aside />
    </ContainerLogin>
  )
}

export default LoginPage
