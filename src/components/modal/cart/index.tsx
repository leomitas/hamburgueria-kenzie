import React, { useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CartContext } from '../../../contexts/CartContext'

const Cart = () => {
  const { setModal } = useContext(CartContext)
  return (
    <div>
      <div>
        <h2>Carrinho de compras</h2>
        <button onClick={() => setModal(false)}>
          <AiOutlineClose size={25} color='#fff' />
        </button>
      </div>
    </div>
  )
}

export default Cart
