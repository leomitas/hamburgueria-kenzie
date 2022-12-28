import React, { useContext } from 'react'
import logo from '../../assets/logo.png'
import InputSearch from './inputSearch'
import { HeaderHome } from './styles'
import { RiDoorClosedFill } from 'react-icons/ri'
import { BsFillCartFill } from 'react-icons/bs'
import { UserContext } from '../../contexts/UserContext'
import { CartContext } from '../../contexts/CartContext'

const Header = () => {
  const { setDisconnect } = useContext(UserContext)
  const { setModal } = useContext(CartContext)

  const openModal = () => {
    setModal(true)
  }

  const clear = () => {
    window.localStorage.clear()
    setDisconnect(true)
  }

  return (
    <HeaderHome>
      <div>
        <img src={logo} />
        <div>
          <InputSearch />
          <div>
            <button onClick={openModal}>
              <BsFillCartFill size={25} color='#BDBDBD' />
            </button>
            <button onClick={clear}>
              <RiDoorClosedFill size={25} color='#BDBDBD' />
            </button>
          </div>
        </div>
      </div>
    </HeaderHome>
  )
}

export default Header
