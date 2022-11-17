/// <reference types="next" />
/// <reference types="next-images" />
/// <reference types="next/types/global" />
/// <reference types="react" />

declare const If: React.FunctionComponent<{ condition: any }>
declare const Choose: React.FunctionComponent
declare const When: React.FunctionComponent<{ condition: any }>
declare const Otherwise: React.FunctionComponent

declare type TTypographySize =
  | 'title-g'
  | 'title-m'
  | 'title-p'
  | 'body-g'
  | 'body-m'
  | 'body-p'
  | 'body-pp'

declare type TColors =
  | 'dark'
  | 'dark-medium'
  | 'light'
  | 'light-high'
  | 'primary'
  | 'secondary'
  | 'accent'
  | 'alert'

declare module '*.jpg' {
  const value: any
  export = value
}

declare module '*.svg' {
  const content: any
  export default content
}
