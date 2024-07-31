import { Labels } from '@/utils/types'
import { ToggleBtn } from './ToggleBtn'

interface Props {
  labels: Labels[]
  activeLabel: string
  setActiveLabel: (label: Labels) => void
}

export const Toggle = (props: Props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const { labels, activeLabel, setActiveLabel } = props

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className="flex h-10 rounded-full border border-brand-clay bg-brand-steel md:inline-flex">
      {labels.map((label) => (
        <ToggleBtn
          key={label}
          isActive={activeLabel === label}
          onClick={() => setActiveLabel(label)}
        >
          {label}
        </ToggleBtn>
      ))}
    </div>
  )
}
