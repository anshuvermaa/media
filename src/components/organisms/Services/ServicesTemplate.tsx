import React from 'react'
import { Link } from 'gatsby'

import Footer from '../../molecules/Footer'
import BigHeadingSection from '../../molecules/Services/BigHeadingSection'
import WeProvideServiceTo from '../../molecules/WeProvideServiceTo'
import BigLinkSection from '../BigLinkSection'
import Hero from '../Hero'
import TextDivSection from '../TextDivSection'

export default function ServicesTemplate({ Data }: React.PropsWithoutRef<{ Data: any }>) {
  return (
    <>
      <Hero className="" bgImg={Data.bgImg} head={Data.head} body={Data.body}></Hero>
      <BigHeadingSection data={Data.bigHeading} />
      <TextDivSection
        data={Data.details}
        type="points"
        imgClassName="min-h-[30rem] md:min-h-[25rem] h-fit"
      />
      <WeProvideServiceTo className="h- bg-theme-black" data={Data.ProvidedTo} />
      <BigLinkSection data={Data.bigLink} />
      <Footer />
    </>
  )
}
