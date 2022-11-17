import React, { Fragment, ReactNode } from 'react'
import Head from 'next/head'

export interface DocumentProps {
  title?: string
  area?: string
  description?: string
}

interface Props extends DocumentProps {
  children: ReactNode | ReactNode[]
}

const Document = ({ title, description, children }: Props) => (
  <Fragment>
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:image" content="" />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />

      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, maximum-scale=1.0"
      />
      <meta name="HandheldFriendly" content="True" />
      <meta httpEquiv="cleartype" content="on" />
    </Head>
    {children}
  </Fragment>
)

export default Document
