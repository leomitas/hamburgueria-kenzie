import React from 'react'
import loginImg from '../../assets/loginimg.png'
import logo from '../../assets/logo.png'
import { RiShoppingBag3Line } from 'react-icons/ri'
import { ContainerAside } from './styles'

const Aside = () => {
  return (
    <ContainerAside>
      <img src={logo} />
      <div>
        <div>
          <RiShoppingBag3Line size={25} color={'#219653'} />
        </div>
        <p>
          A vida é como um sanduíche, é preciso recheá-la com os{' '}
          <span>melhores</span> ingredientes.
        </p>
      </div>
      <img src={loginImg} />
    </ContainerAside>
  )
}

export default Aside
