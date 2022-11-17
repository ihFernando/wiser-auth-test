import { InputHTMLAttributes } from 'react'

export interface IInput extends Partial<InputHTMLAttributes<HTMLInputElement>> {
  type: 'text' | 'password' | 'email' | 'tel'
  fieldName: string
  placeholder?: string
  hasError?: boolean
  errorMessage?: string
  isRequired?: boolean
}
