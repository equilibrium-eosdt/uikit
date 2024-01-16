import React from 'react'

import { LoaderWrapper } from './styled'

interface Props {
  className?: string
}

export const Loader: React.FC<Props> = ({ className }) => (
  <LoaderWrapper className={className}>
    <img src="/images/loader.svg" alt="loader" />
  </LoaderWrapper>
)
