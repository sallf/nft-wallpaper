import { Labels } from '@/utils/types'
import { Item } from './Item'
import { wallpapers } from './wallpapers'

interface Props {
  activeLabel: Labels
}

export const Carousel = (props: Props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const { activeLabel } = props

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className="mt-6 flex w-full gap-6 overflow-x-auto">
      {wallpapers.map((wallpaper, i) => (
        <Item key={i} wallpaper={wallpaper} activeLabel={activeLabel} />
      ))}
    </div>
  )
}
