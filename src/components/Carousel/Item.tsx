import { Labels, Wallpaper } from '@/utils/types'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { Meta } from './Meta'
import { gsap } from 'gsap'

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
  //  REFS
  // ---------------------
  const tl = useRef<gsap.core.Timeline | null>(null)

  // --------------------- ===
  //  STATE
  // ---------------------
  const [isActive, setIsActive] = useState(false)
  // Storing refs in state ensures that they are available
  const [metaContainer, setMetaContainer] = useState<HTMLDivElement | null>(
    null,
  )
  const [wrapper, setWrapper] = useState<HTMLDivElement | null>(null)

  // --------------------- ===
  //  EFFECTS
  // ---------------------
  useEffect(() => {
    // Using a GSAP timeline so we can set display: none after animation
    // back to opacity 0. Otherwise, the element will still be interactive.
    if (wrapper && metaContainer) {
      tl.current = gsap.timeline({
        paused: true,
        onReverseComplete: () => {
          gsap.set(wrapper, {
            zIndex: 0,
          })
        },
      })
      tl.current.to(metaContainer, {
        display: 'block',
        opacity: 1,
        duration: 1,
      })
    }
  }, [wrapper, metaContainer])

  useEffect(() => {
    if (!tl.current) return
    if (isActive) {
      gsap.set(wrapper, {
        zIndex: 2,
      })
      tl.current.play()
    } else if (tl.current.progress() > 0) {
      gsap.set(wrapper, {
        zIndex: 1,
      })
      tl.current.reverse()
    }
  }, [isActive, wrapper])

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div
      className={`relative z-0 ${sizes[activeLabel]} flex flex-shrink-0 flex-grow-0`}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}
      ref={setWrapper}
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
          className={`hidden w-[300px] flex-shrink-0 flex-grow-0 opacity-0`}
          ref={setMetaContainer}
        >
          <div className="h-full p-4 pl-0">
            <Meta wallpaper={wallpaper} />
          </div>
        </div>
      </div>
    </div>
  )
}
