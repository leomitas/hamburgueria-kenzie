import React from 'react'
import { FormSearch } from './styles'
import { IoSearch } from 'react-icons/io5'

const InputSearch = () => {
  return (
    <FormSearch>
      <input type='text' placeholder='Digitar pesquisa' />
      <button type='button'><IoSearch size={20} /></button>
    </FormSearch>
  )
}

export default InputSearch