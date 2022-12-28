import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import Card from './card'
import { Main } from './styles'

interface iProducts {
  id: number
  name: string
  category: string
  price: number
  img: string
}

const Cards = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState<iProducts[]>([])

  const token = localStorage.getItem('token')
  const navigate = useNavigate()

  useEffect(() => {
    if (token) {
      api.defaults.headers.authorization = `Bearer ${token}`
      api
        .get('products')
        .then((res) => setProducts(res.data))
        .catch(() => window.localStorage.clear())
        .catch(() => navigate('/'))
      setLoading(false)
    }
  }, [loading])

  return (
    <Main className='main'>
      <ul className='ul-cards'>
        {products.map((product) => {
          return (
            <Card
              img={product.img}
              name={product.name}
              category={product.category}
              price={product.price}
              key={product.id}
              id={product.id}
            />
          )
        })}
      </ul>
    </Main>
  )
}

export default Cards
