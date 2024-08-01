import Image from 'next/image'
import { ComponentProps } from 'react'

interface Props extends ComponentProps<'button'> {
  icon: string
  label: string
  onClick?: () => void
}

export const IconBtn = (props: Props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const { icon, label, onClick, ...rest } = props

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <button
      className="flex h-10 w-10 items-center justify-center rounded-md border border-brand-smokey hover:bg-brand-smokey focus:border-brand-white focus:bg-brand-smokey"
      onClick={onClick}
      type="button"
      {...rest}
    >
      <Image src={icon} className="w-4" alt="" />
      <span className="sr-only">{label}</span>
    </button>
  )
}
