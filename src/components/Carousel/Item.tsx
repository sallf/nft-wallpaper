import { Labels, Wallpaper } from '@/utils/types'
import Image from 'next/image'
import { useState } from 'react'
import { Meta } from './Meta'

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
  //  STATE
  // ---------------------
  const [isActive, setIsActive] = useState(false)

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div
      className={`flex rounded-lg border border-brand-clay bg-brand-steel transition-all duration-500 ${isActive ? 'z-10' : 'border-opacity-0 bg-opacity-0'}`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className={`${sizes[activeLabel]} relative flex-shrink-0 flex-grow-0 overflow-hidden rounded-md transition-all duration-1000 ${isActive ? 'scale-95' : 'scale-100'}`}
      >
        <Image
          src={wallpaper.src}
          alt={wallpaper.title}
          fill
          style={{ objectFit: 'cover' }}
          onClick={() => setIsActive((p) => !p)}
        />
      </div>
      <div className="p-4">
        <Meta wallpaper={wallpaper} />
      </div>
    </div>
  )
}
