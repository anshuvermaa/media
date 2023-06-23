import React from 'react'

export default function Container({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return <div className={` mx-auto w-[90%] max-w-[65rem] ${className}`}>{children}</div>
}
