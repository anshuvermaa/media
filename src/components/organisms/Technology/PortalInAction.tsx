import React from 'react'

import Container from '../../atoms/Container'
import Wrapper from '../../atoms/Wrapper'
import Action from '../../molecules/Technology/Action'

export default function PortalInAction({ data }: React.PropsWithoutRef<{ data: any }>) {
  return (
    <Wrapper className="bg-theme-black">
      <Container>
        <h2 className="pt-4 text-xl tracking-tighter md:pt-10 md:text-3xl">{data.heading}</h2>
      </Container>
      {data.actions?.map((e: any, ind: number) => {
        return <Action data={e} ind={ind} key={ind} />
      })}
    </Wrapper>
  )
}
