import React, { useState } from 'react'

import Button from '../atoms/Button'
import ContactFormInputs from '../atoms/ContactFormInputs'
import Container from '../atoms/Container'
import Wrapper from '../atoms/Wrapper'

export default function ContactForm({ data }: React.PropsWithoutRef<{ data: any }>) {
  const [fillForm, setFillForm] = useState(1)
  return (
    <Wrapper className="bg-theme-black">
      <Container className="py-12">
        <div className="lg:mx-[10%]">
          <div className="w-[90%] sm:w-[80%]">
            <h2 className="flex flex-col">
              <span className="text-lg font-black md:text-3xl lg:text-5xl ">LET US KNOW</span>{' '}
              <span className="text-lg font-black md:text-3xl lg:text-5xl ">WHAT YOU NEED</span>
            </h2>
            <h3 className="pb-6 text-xs md:my-4 md:text-xl lg:my-6">{data.body}</h3>
          </div>
          {fillForm ? (
            <>
              <div className="mb-2 grid gap-5 md:grid-cols-2 md:gap-5">
                {data.fields?.map((e: any, ind: number) => {
                  return <ContactFormInputs key={ind} data={e} />
                })}
              </div>
              <Button
                variant="activeLogin"
                onClick={() => {
                  setFillForm(0)
                }}
                className=" rounded-full px-16"
              >
                Submit
              </Button>
            </>
          ) : (
            <div className="flex flex-col gap-8">
              <h2 className="text-2xl text-orange-500">THANK YOU FOR REACHING OUT TO US</h2>
              <h4>We will be in contact with you soon</h4>
              <button className="">
                <h3
                  onClick={() => {
                    setFillForm(1)
                  }}
                  className="text-start underline decoration-orange-500 underline-offset-[15px] hover:text-orange-500"
                >
                  Want to send another enquiry?
                </h3>
              </button>
            </div>
          )}
        </div>
      </Container>
    </Wrapper>
  )
}
