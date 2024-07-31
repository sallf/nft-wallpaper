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
      className={`flex-grow rounded-full bg-brand-steel px-5 text-caption-md text-[#A6A3C8] transition-colors ${isActive ? '!bg-brand-white !text-brand-midnight' : 'hover:text-brand-white'}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}
