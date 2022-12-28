import React, { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import { UserContext } from '../../contexts/UserContext'
import Input from '../input'
import { Form } from './styles'
import { yupResolver } from '@hookform/resolvers/yup'
import { registerSchema } from './registerSchema'

interface iRegisterData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

const FormRegister = () => {

  const { register, handleSubmit, formState: { errors }} = useForm<iRegisterData>({
    resolver: yupResolver(registerSchema)
  })

  const { registerUser } = useContext(UserContext)

  return (
    <Form onSubmit={handleSubmit(registerUser)}>
      <div>
        <h2>Cadastro</h2>
        <Link to={'/'}>Retornar para o login</Link>
        
      </div>
      <div>
        <Input label='Nome' type='text' placeholder='Digite seu Nome' {...register('name')} />
        {errors.name?.message && <p>{errors.name.message}</p>}
      </div>
      <div>
        <Input label='email' type='email' placeholder='Digite seu Email' {...register('email')} />
        {errors.email?.message && <p>{errors.email.message}</p>}
      </div>
      <div>
        <Input label='Senha' type='password' placeholder='Senha' {...register('password')} />
        {errors.password?.message && <p>{errors.password.message}</p>}
      </div>
      <div>
        <Input label='Confirmar senha' type='password' placeholder='Confirmar Senha' {...register('confirmPassword')} />
        {errors.confirmPassword?.message && <p>{errors.confirmPassword.message}</p>}
      </div>
      <button type='submit'>Cadastrar</button>
    </Form>
  )
}

export default FormRegister