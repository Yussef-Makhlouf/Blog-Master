'use client'

import { useState } from 'react'
import Image from 'next/image'

interface ImageWithFallbackProps {
  src: string
  alt: string
  fill?: boolean
  className?: string
  width?: number
  height?: number
}

export default function ImageWithFallback({
  src,
  alt,
  fill = false,
  className = '',
  width,
  height,
  ...props
}: ImageWithFallbackProps) {
  const [imgSrc, setImgSrc] = useState(src)
  const [hasError, setHasError] = useState(false)

  const handleError = () => {
    if (!hasError) {
      setHasError(true)
      setImgSrc('/placeholder.svg')
    }
  }

  // If we've already tried the fallback, don't try again
  if (hasError) {
    return (
      <Image
        src="/placeholder.svg"
        alt={alt}
        fill={fill}
        className={className}
        width={width}
        height={height}
        {...props}
      />
    )
  }

  return (
    <Image
      src={imgSrc}
      alt={alt}
      fill={fill}
      className={className}
      width={width}
      height={height}
      onError={handleError}
      {...props}
    />
  )
}