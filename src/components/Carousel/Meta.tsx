import { Labels, Wallpaper } from '@/utils/types'
import { Btn } from '../Btn/Btn'
import { IconBtn } from '../IconBtn/IconBtn'
import copyIcon from '@images/copy-icon.svg'

interface Props {
  wallpaper: Wallpaper
  activeLabel: Labels
}

export const Meta = (props: Props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const { wallpaper, activeLabel } = props

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className="flex h-full flex-col justify-between">
      <div>
        <div className="flex flex-col gap-2">
          <p className="text-caption-lg text-brand-lavender">
            Wallpapers of Unsplash
          </p>
          <h4 className="text-body-md">{wallpaper.title}</h4>
          <p
            className={`hidden text-caption-lg text-brand-lavender ${activeLabel === 'Phone' ? 'md:block' : ''}`}
          >
            Description for this item, would be a metadata for the collection as
            a fallback
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <p className="flex justify-between text-caption-md">
            <span className="text-brand-lavender">Total Assets:</span>
            <span>{wallpaper.qty}</span>
          </p>
          <hr className="w-full border-t-brand-clay" />
          <p className="flex justify-between text-caption-md">
            <span className="text-brand-lavender">Asset Type:</span>
            <span>ERC-721</span>
          </p>
        </div>
      </div>
      <div className="flex w-full gap-2">
        <div className="hidden md:block">
          <IconBtn
            icon={copyIcon}
            label="Copy"
            onClick={() => {
              const url = new URL(wallpaper.src, window.location.href)
              navigator.clipboard.writeText(url.href)
            }}
          />
        </div>
        <div className="flex w-full flex-col">
          <Btn
            // download wallpaper.src on click
            onClick={() => {
              const a = document.createElement('a')
              a.href = wallpaper.src
              a.download = wallpaper.title
              a.click()
            }}
          >
            <span className="hidden md:inline">Download</span>
            <span className="md:hidden">Save</span>
          </Btn>
        </div>
      </div>
    </div>
  )
}
