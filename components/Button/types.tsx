import { ReactNode, ButtonHTMLAttributes } from 'react'

export interface IButton
  extends Partial<ButtonHTMLAttributes<HTMLButtonElement>> {
  children: ReactNode
  isBold?: boolean
  modifier: 'primary' | 'secondary'
  onClick?: () => void
}
