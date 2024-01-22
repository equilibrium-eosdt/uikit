import React from 'react'

import { LoaderWrapper } from './styled'

interface Props {
  className?: string;
  src: string;
}

export const Loader: React.FC<Props> = ({ className, src }) => (
  <LoaderWrapper className={className}>
    <img src={src} alt="loader" />
  </LoaderWrapper>
)
