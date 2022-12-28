import React, { useContext, useState } from 'react'
import { CartContext } from '../../../contexts/CartContext'
import { Li } from './styles'

interface iProducts {
  id: number
  name: string
  category: string
  price: number
  img: string
}

const Card = ({ img, name, category, price, id }: iProducts) => {
  const [quantity, setQuantity] = useState(0)
  const product = () => {
    return {
      id: id,
      name: name,
      img: img,
      quantity: quantity,
      price: price,
    }
  }
  const {
    productsCart,
    setProductsCart,
    setEmptyCart,
    setValueCart,
    valueCart,
  } = useContext(CartContext)
  return (
    <Li>
      <div>
        <img src={img} />
      </div>
      <div>
        <h2>{name}</h2>
        <p>{category}</p>
        <p>
          {price.toLocaleString('pt-BR', {
            style: 'currency',
            currency: 'BRL',
          })}
        </p>
        <button
          onClick={() => {
            console.log(quantity)
            setQuantity(quantity + 1)
          }}
        >
          quantidade
        </button>
        <p>{product().quantity}</p>
        <button
          onClick={() => {
            setProductsCart([...productsCart, product()])
            setEmptyCart(false)
            setValueCart(valueCart + price)
          }}
        >
          Adicionar
        </button>
      </div>
    </Li>
  )
}

export default Card
