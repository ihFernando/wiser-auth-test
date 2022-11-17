import { ReactNode } from 'react'

type TAlign = 'left' | 'center' | 'right'

interface ITypography {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p'
  align?: TAlign
  alignLargeDisplay?: TAlign
  size?: TTypographySize
  sizeLargeDisplay?: TTypographySize | null
  pb?: number // Padding Bottom
  color?: TColors
  isBold?: boolean
  isUppercase?: boolean
}

export type { ITypography }
