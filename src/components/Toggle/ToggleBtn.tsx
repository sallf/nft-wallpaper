interface Props {
  isActive: boolean
  onClick: () => void
  children: string
}

export const ToggleBtn = (props: Props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const { isActive, onClick, children } = props

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <button
      type="button"
      className={`rounded-full px-[14px] text-caption-md text-[#A6A3C8] transition-colors ${isActive ? 'bg-brand-white' : 'hover:text-brand-white'}`}
    >
      {children}
    </button>
  )
}
