import React from 'react'

import Container from '../atoms/Container'
import SideBluredImage from '../atoms/SideBluredImage'

export default function ImgTextDiv({
  children,
  side,
  className = '',
  src,
  id,
}: React.PropsWithChildren<{ side: string; className?: string; src: string; id: string }>) {
  return (
    <div className="relative h-full w-full" id={id}>
      <Container
        className={`my-10 flex flex-col gap-5 md:my-0 md:flex-row ${
          side === 'right' && 'flex-row-reverse'
        } ${className}`}
      >
        <SideBluredImage
          src={src}
          side={side}
          alt=""
          className={`h-[50vh] w-full md:absolute md:h-full md:w-[55%] ${
            side == 'left' ? 'left-0' : 'right-0'
          }`}
        />
        <div className={`w-full py-5 md:w-[40%] ${side == 'left' ? 'md:ml-[60%]' : 'md:mr-[60%]'}`}>
          {children}
        </div>
      </Container>
    </div>
  )
}
