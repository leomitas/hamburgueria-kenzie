import React, { useContext } from 'react'
import { CartContext } from '../../contexts/CartContext'
import Cart from './cart'
import EmptyCart from './cart/emptyCart'
import Products from './cart/products'
import { Button, ModalDiv } from './styles'
import ValueCart from './valueCart'

const Modal = () => {
  const { emptyCart, setEmptyCart, setProductsCart, setValueCart } =
    useContext(CartContext)

  return (
    <ModalDiv>
      <div>
        <Cart />
        {emptyCart ? <EmptyCart /> : <Products />}
        {emptyCart ? (
          ''
        ) : (
          <>
            <ValueCart />
            <Button
              onClick={() => {
                setProductsCart([])
                setEmptyCart(true)
                setValueCart(0)
              }}
            >
              Remover todos
            </Button>
          </>
        )}
      </div>
    </ModalDiv>
  )
}

export default Modal
