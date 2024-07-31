import { ToggleBtn } from './ToggleBtn'

interface Props {
  labels: [string, string]
  activeLabel: string
  onClick: (label: string) => void
}

export const Toggle = (props: Props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const { labels, activeLabel, onClick } = props

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className="flex">
      {labels.map((label) => (
        <ToggleBtn
          key={label}
          isActive={activeLabel === label}
          onClick={() => onClick(label)}
        >
          {label}
        </ToggleBtn>
      ))}
    </div>
  )
}
