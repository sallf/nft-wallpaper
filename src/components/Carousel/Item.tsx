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
      className={`relative ${isActive ? 'z-10' : ''} ${sizes[activeLabel]} flex flex-shrink-0 flex-grow-0`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
    >
      <div
        className={`relative flex rounded-lg border border-brand-clay bg-brand-clay transition-all duration-1000 ${isActive ? 'border-opacity-100 bg-opacity-100' : 'border-opacity-0 bg-opacity-0'}`}
      >
        <div
          className={`${sizes[activeLabel]} ${isActive ? 'p-4' : 'p-0'} relative flex-shrink-0 flex-grow-0 transition-all duration-1000`}
        >
          <div className="relative h-full w-full overflow-hidden rounded-md">
            <Image
              src={wallpaper.src}
              alt={wallpaper.title}
              fill
              style={{ objectFit: 'cover' }}
              onClick={() => setIsActive((p) => !p)}
            />
          </div>
        </div>
        <div
          className={`w-[300px] flex-shrink-0 flex-grow-0 transition-opacity duration-1000 ${isActive ? 'opacity-100' : 'opacity-0'}`}
        >
          <div className="h-full p-4">
            <Meta wallpaper={wallpaper} />
          </div>
        </div>
      </div>
    </div>
  )
}
