import React from 'react'

export default function InputTag({
  children,
  variant,
  type,
  name,
  className = '',
  ...restProps
}: React.PropsWithChildren<
  {
    variant: string
    type: string
    className?: string
    name: string
  } & React.HTMLAttributes<HTMLInputElement>
>) {
  if (['text', 'password'].includes(type)) {
    switch (variant) {
      case 'login':
        className +=
          ' placeholder:text-white placeholder:text-sm hover:placeholder:text-slate-400 border border-slate-400'
        break
      default:
        break
    }
    return (
      <>
        <input
          type={type}
          className={`mb-2 rounded-xl bg-transparent px-4 py-1 ${className}`}
          {...restProps}
        />
      </>
    )
  } else if (['checkbox'].includes(type)) {
    switch (variant) {
      case 'login':
        className += ''
        break
      default:
        break
    }
    return (
      <>
        <input
          type={type}
          className={`h-4 w-4 rounded-lg accent-orange-400  ${className}`}
          {...restProps}
        />
      </>
    )
  }
  return <input type={type} className={className} {...restProps} />
}
