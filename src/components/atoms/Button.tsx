import React from 'react'

export default function Button({
  children,
  className = '',
  variant,
  onClick,
  style,
}: React.PropsWithChildren<{
  className?: string
  variant?: string
  style?: any
  onClick?: () => void
}>) {
  switch (variant) {
    case 'normal':
      className += ' bg-white text-slate-600 font-bold hover:bg-orange-400 hover:text-white'
      break
    case 'login':
      className += ' bg-white text-orange-400 font-bold hover:bg-orange-400 hover:text-white'
      break
    case 'activeLogin':
      className += ' bg-orange-400 text-white font-bold hover:bg-orange-500 hover:text-white'
      break
    default:
      break
  }
  return (
    <button
      className={'text w-fit rounded-xl py-1 px-5 sm:my-3 md:py-2 ' + className}
      type="button"
      onClick={onClick}
      style={style}
    >
      {children}
    </button>
  )
}
