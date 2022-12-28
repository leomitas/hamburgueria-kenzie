import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import Input from '../input'
import { Form } from './styles'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import { yupResolver } from '@hookform/resolvers/yup'
import { loginSchema } from './loginSchema'

interface iLoginData {
  email: string
  password: string
}

const FormLogin = () => {

  const { register, handleSubmit, formState: { errors }} = useForm<iLoginData>({
    resolver: yupResolver(loginSchema)
  })

  const { login } = useContext(UserContext)

  return (
    <Form onSubmit={handleSubmit(login)}>
      <h2>Login</h2>
      <div>
        <Input label='Email' type='email' placeholder='Digite seu Email' {...register('email')} />
        {errors.email?.message && <p>{errors.email.message}</p>}
      </div>
      <div>
        <Input label='Senha' type='password' placeholder='Digite sua senha' {...register('password')} />
        {errors.password?.message && <p>{errors.password.message}</p>}
      </div>
      <button type='submit'>Logar</button>
      <p>Crie sua conta para saborear muitas delícias e matar sua fome!</p>
      <Link to={'/register'}><button type='button'>Cadastrar</button></Link>
    </Form>
  )
}

export default FormLogin