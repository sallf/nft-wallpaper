import { Wallpaper } from '@/utils/types'
import { Btn } from '../Btn/Btn'

interface Props {
  wallpaper: Wallpaper
}

export const Meta = (props: Props) => {
  // --------------------- ===
  //  PROPS
  // ---------------------
  const { wallpaper } = props

  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div className="flex h-full w-[250px] flex-col justify-between">
      <div>
        <div className="flex flex-col gap-2">
          <p className="text-caption-lg text-brand-lavender">
            Wallpapers of Unsplash
          </p>
          <h4 className="text-body-md">{wallpaper.title}</h4>
          <p className="text-caption-lg text-brand-lavender">
            Description for this item, would be a metadata for the collection as
            a fallback
          </p>
        </div>
        <div className="mt-6 flex flex-col gap-2">
          <p className="flex justify-between text-caption-md">
            <span className="text-brand-lavender">Total Assets:</span>
            <span>{wallpaper.qty}</span>
          </p>
          <hr className="w-full border-brand-clay" />
          <p className="flex justify-between text-caption-md">
            <span className="text-brand-lavender">Asset Type:</span>
            <span>ERC-721</span>
          </p>
        </div>
      </div>
      <div className="flex w-full flex-col">
        <Btn>Download</Btn>
      </div>
    </div>
  )
}
