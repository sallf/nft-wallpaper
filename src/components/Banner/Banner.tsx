interface Props {
  children: string
}

export const Banner = (props: Props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const { children } = props

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className="bg-gradient-to-r from-brand-pink to-brand-indigo p-px">
      <p className="bg-brand-midnight px-4 py-2 text-body-sm">{children}</p>
    </div>
  )
}
