import React from 'react'

import Container from '../../atoms/Container'
import Wrapper from '../../atoms/Wrapper'

export default function HeadOffice({ data }: React.PropsWithoutRef<{ data: any }>) {
  console.log(data)
  return (
    <Wrapper
      style={{
        backgroundImage: `url(https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjOjIHWOIdbhEKhAYKS9qwb8lTDl4v0YXeRfOQZ1hUQfqRSSaa1sClheY&s=10)`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}
    >
      <Container className="py-12">
        <h2 className="text-lg sm:text-2xl md:text-4xl">{data.head}</h2>
        <div className="my-4 pl-[10%] md:max-w-[30%]">
          {data.address?.map((e: string, ind: number) => (
            <p key={ind} className="max-md:text-sm">
              {e}
            </p>
          ))}
        </div>
        <h6 className="text-sm font-semibold md:text-lg">{data.number}</h6>
        <h6 className="my-2 text-sm font-semibold underline decoration-orange-500 decoration-4 underline-offset-8 max-md:text-sm md:text-lg">
          {data.email}
        </h6>
      </Container>
    </Wrapper>
  )
}
