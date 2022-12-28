import React, { useContext } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { Div } from './styles'

const ValueCart = () => {
  const { valueCart } = useContext(CartContext)
  return (
    <Div>
      <p>Total</p>
      <p>
        {valueCart.toLocaleString('pt-BR', {
          style: 'currency',
          currency: 'BRL',
        })}
      </p>
    </Div>
  )
}

export default ValueCart
