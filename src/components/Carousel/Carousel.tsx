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
    <div className="w-full overflow-x-auto">
      {wallpapers.map((wallpaper, i) => (
        <Item key={i} wallpaper={wallpaper} activeLabel={activeLabel} />
      ))}
    </div>
  )
}
