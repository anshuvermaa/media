import React from 'react'

import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'
import BigLink from '../molecules/BigLink'

export default function BigLinkSection({
  data,
}: React.PropsWithoutRef<{
  data: any
}>) {
  return (
    <Wrapper
      style={{
        backgroundImage: `url(${data.bgImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <div className="flex h-full min-h-[30vh] w-full items-center text-center backdrop-blur-md md:min-h-[50vh]">
        <Container className="max-w-[60%]">
          <BigLink
            head={data.head}
            title={data.title}
            linkTitle={data.linkTitle}
            to={data.to}
          ></BigLink>
        </Container>
      </div>
    </Wrapper>
  )
}
