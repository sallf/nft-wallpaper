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
    <div className="relative">
      <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-8 bg-gradient-to-r from-brand-midnight to-transparent" />
      <div className="mt-6 overflow-x-auto px-4 md:px-8">
        <div className="inline-flex gap-6">
          {wallpapers.map((wallpaper, i) => (
            <Item key={i} wallpaper={wallpaper} activeLabel={activeLabel} />
          ))}
        </div>
      </div>
      <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-8 bg-gradient-to-l from-brand-midnight to-transparent" />
    </div>
  )
}
