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
    <div className="inline-block rounded-full bg-gradient-to-r from-brand-pink to-brand-cyan p-px">
      <p className="rounded-full bg-brand-midnight px-4 py-2 text-body-sm">
        {children}
      </p>
    </div>
  )
}
