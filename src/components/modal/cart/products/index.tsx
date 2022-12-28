import React, { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { Ul } from './styles'
import { BsFillTrashFill } from 'react-icons/bs'

const Products = () => {
  const {
    productsCart,
    setProductsCart,
    valueCart,
    setValueCart,
    setEmptyCart,
  } = useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  const remove = (id: number, price: number) => {
    const products = [...productsCart]
    if (quantity > 1) {
      setQuantity(quantity - 1)
      setValueCart(valueCart - price)
    } else if (quantity === 1 && productsCart !== null) {
      setValueCart(valueCart - price)
      const newPorductsCart = products.filter((product) => product.id !== id)
      setProductsCart(newPorductsCart)
    } else if (productsCart.length === 0) {
      setEmptyCart(true)
    }
  }

  const add = (price: number) => {
    if (quantity >= 1) {
      setQuantity(quantity + 1)
      setValueCart(valueCart + price)
    }
  }

  return (
    <Ul>
      {productsCart.map((product) => {
        return (
          <li key={product.id}>
            <img src={product.img} />
            <div>
              <h2>{product.name}</h2>
              {/* <div>
                <button onClick={() => remove(product.id, product.price)}>
                  -
                </button>
                <p>{quantity}</p>
                <button onClick={() => add(product.price)}>+</button>
              </div> */}
            </div>
            {/* <button>
              <BsFillTrashFill size={25} color='#BDBDBD' />
            </button> */}
            <p>
              {product.price.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </p>
          </li>
        )
      })}
    </Ul>
  )
}

export default Products
