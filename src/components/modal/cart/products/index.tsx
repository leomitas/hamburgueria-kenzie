import React, { useContext, useState } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { Ul } from './styles'
import { BsFillTrashFill } from 'react-icons/bs'

const Products = () => {
  const { productsCart, setProductsCart, valueCart, setValueCart } =
    useContext(CartContext)
  const [quantity, setQuantity] = useState(1)

  return (
    <Ul>
      {productsCart.map((product, id) => {
        return (
          <li key={product.id}>
            <img src={product.img} />
            <div>
              <h2>{product.name}</h2>
              <div>
                <button>-</button>
                <p>{quantity}</p>
                <button
                  onClick={() => {
                    if (id === product.id - 1) {
                      setQuantity(quantity + 1)
                      setValueCart(valueCart + product.price)
                    }
                  }}
                >
                  +
                </button>
              </div>
            </div>
            <button>
              <BsFillTrashFill size={25} color='#BDBDBD' />
            </button>
          </li>
        )
      })}
    </Ul>
  )
}

export default Products
