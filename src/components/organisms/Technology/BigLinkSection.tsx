import React from 'react'
import { Link } from 'gatsby'

import Container from '../../atoms/Container'
import Wrapper from '../../atoms/Wrapper'
import BigLinkDiv from '../../molecules/Technology/BigLinkDiv'

export default function BigLinkSection({ data }: React.PropsWithoutRef<{ data: any }>) {
  console.log(data)
  return (
    <Wrapper className="py-5 md:py-10">
      <BigLinkDiv data={data} />
    </Wrapper>
  )
}
