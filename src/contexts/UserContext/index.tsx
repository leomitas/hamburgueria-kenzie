import { createContext, useEffect, useState } from 'react'
import { SubmitHandler } from 'react-hook-form/dist/types'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { api } from '../../services/api'
import { CartProvider } from '../CartContext'

interface iContextProps {
  children: React.ReactNode
}

interface iContext {
  login: (data: iLoginData) => void
  registerUser: (data: iRegisterData) => void
  loading: boolean
  disconnect: boolean
  setDisconnect: React.Dispatch<React.SetStateAction<boolean>>
}

interface iLoginData {
  email: string
  password: string
}

interface iRegisterData {
  name: string
  email: string
  password: string
  confirmPassword: string
}

export const UserContext = createContext({} as iContext)

export const UserProvider = ({ children }: iContextProps) => {
  const navigate = useNavigate()

  const login: SubmitHandler<iLoginData> = async (data) => {
    try {
      const response = await api.post('login', data)
      navigate('/home')
      localStorage.setItem('token', response.data.accessToken)
      setDisconnect(false)
      toast.success('Login feito com sucesso!')
    } catch (error) {
      toast.error('Erro no login, email ou senha incorretos')
      console.log(error)
    }
  }

  const registerUser = async (data: iRegisterData) => {
    try {
      await api.post('users', data)
      navigate('/')
      toast.success('Cadastro feito com sucesso!')
    } catch (error) {
      toast.error('Email já utilizado')
      console.log(error)
    }
  }

  const [loading, setLoading] = useState(true)
  const [disconnect, setDisconnect] = useState(false)

  useEffect(() => {
    const loadUser = async () => {
      const token = localStorage.getItem('token')
      if (!token) {
        setLoading(false)
        return
      }
      try {
        api.defaults.headers.common.Userorization = `Bearer ${token}`
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false)
      }
    }
    loadUser()
  }, [])

  return (
    <UserContext.Provider
      value={{ login, registerUser, loading, disconnect, setDisconnect }}
    >
      <CartProvider>{children}</CartProvider>
    </UserContext.Provider>
  )
}
