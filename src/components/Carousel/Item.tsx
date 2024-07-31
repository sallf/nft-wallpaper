import { Labels, Wallpaper } from '@/utils/types'
import Image from 'next/image'

interface Props {
  wallpaper: Wallpaper
  activeLabel: Labels
}

const sizes: Record<Labels, string> = {
  Phone: 'w-[240px] h-[480px] md:w-[260px] md:h-[520px]',
  Watch: 'w-[240px] h-[240px] md:w-[200px] md:h-[240px]',
}

export const Item = (props: Props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const { wallpaper, activeLabel } = props

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className={`${sizes[activeLabel]}`}>
      <Image
        src={wallpaper.src}
        alt={wallpaper.title}
        width={260}
        height={260}
      />
    </div>
  )
}
