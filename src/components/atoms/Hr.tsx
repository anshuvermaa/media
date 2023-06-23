import React from 'react'

export default function Hr({
  className,
  ...restProps
}: React.PropsWithChildren<{ className?: string } & React.HTMLAttributes<HTMLHRElement>>) {
  return <hr className={`bg-white lg:h-1 ${className}`} {...restProps} />
}
