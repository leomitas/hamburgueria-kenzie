import React, { forwardRef, InputHTMLAttributes } from 'react'
import { Fieldset } from './styles'

interface iInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label: string
    type: string
    placeholder: string
}

const Input = forwardRef<HTMLInputElement, iInputProps>(({label, type, placeholder, ...rest}, ref) => {
  return (
    <Fieldset>
        <label>{label}</label>
        <input type={type} placeholder={placeholder} ref={ref} {...rest} />
    </Fieldset>
  )
})

export default Input