import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import Cards from '../../components/cards'
import Header from '../../components/header'
import Modal from '../../components/modal'
import { CartContext } from '../../contexts/CartContext'
import { UserContext } from '../../contexts/UserContext'

const HomePage = () => {
  const { loading, disconnect } = useContext(UserContext)
  const { modal } = useContext(CartContext)

  const token = localStorage.getItem('token')
  const navigate = useNavigate()
  useEffect(() => {
    if (token == null) {
      navigate('/')
    }
  }, [token, disconnect])

  return (
    <>
      {loading ? (
        'CARREGANDO'
      ) : (
        <>
          <Header />
          <Cards />
        </>
      )}
      {modal ? <Modal /> : ''}
    </>
  )
}

export default HomePage
