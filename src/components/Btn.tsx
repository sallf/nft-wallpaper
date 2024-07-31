import { ComponentProps } from 'react'

type Sizes = 'md' | 'lg'

interface Props extends ComponentProps<'button'> {
  children: string
  size?: Sizes
}

const sizes: Record<Sizes, string> = {
  md: 'h8',
  lg: 'h-10',
}

export const Btn = (props: Props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const { children, size = 'md', ...rest } = props

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <button
      className={`bg-gradient-to-b from-brand-purple to-brand-indigo px-3 text-caption-lg hover:from-[#7E5FFD] hover:to-[#5B45B3] focus:outline-none focus:ring-2 focus:ring-brand-white disabled:from-[#553EB5] disabled:to-brand-purple ${sizes[size]} rounded-md text-[#EEEBF9] hover:text-brand-white disabled:text-[#C4B9EE]`}
      type="button"
      {...rest}
    >
      {children}
    </button>
  )
}
