import React from 'react'

export default function Wrapper({
  children,
  id,
  className,
  style,
}: React.PropsWithChildren<{ className?: string; id?: string; style?: any }>) {
  return (
    <section className={` ${className}`} id={id} style={style}>
      {children}
    </section>
  )
}
