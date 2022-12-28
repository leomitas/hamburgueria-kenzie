import { createContext, useState } from 'react'

interface iContextProps {
  children: React.ReactNode
}

interface iContext {
  loading1: boolean
  setLoading1: React.Dispatch<React.SetStateAction<boolean>>
  modal: boolean
  setModal: React.Dispatch<React.SetStateAction<boolean>>
  emptyCart: boolean
  setEmptyCart: React.Dispatch<React.SetStateAction<boolean>>
  productsCart: iProductsCart[]
  setProductsCart: React.Dispatch<React.SetStateAction<iProductsCart[]>>
  valueCart: number
  setValueCart: React.Dispatch<React.SetStateAction<number>>
}

interface iProductsCart {
  id: number
  name: string
  img: string
  price: number
}

export const CartContext = createContext({} as iContext)

export const CartProvider = ({ children }: iContextProps) => {
  const [loading1, setLoading1] = useState(true)
  const [modal, setModal] = useState(false)
  const [emptyCart, setEmptyCart] = useState(true)
  const [productsCart, setProductsCart] = useState<iProductsCart[]>([])
  const [valueCart, setValueCart] = useState(0)

  return (
    <CartContext.Provider
      value={{
        loading1,
        setLoading1,
        modal,
        setModal,
        emptyCart,
        setEmptyCart,
        productsCart,
        setProductsCart,
        valueCart,
        setValueCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
