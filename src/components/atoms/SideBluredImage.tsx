import React from 'react'

export default function SideBluredImage({
  side,
  className = '',
  src,
  alt,
  shadeColor,
}: React.PropsWithoutRef<{
  side: string
  src: string | undefined | null
  alt: string
  className?: string
  shadeColor?: string
}>) {
  // const bgImage=conver
  return (
    <div className={className}>
      <div
        className={'h-full w-full bg-cover bg-no-repeat'}
        style={{
          backgroundImage: `linear-gradient(to ${
            side === 'right' ? 'left' : 'right'
          }, transparent 80%, ${shadeColor ? shadeColor : 'rgba(255, 255, 255, 1)'}), url(${src})`,
          backgroundColor: 'white',
        }}
      ></div>
    </div>
  )
}
