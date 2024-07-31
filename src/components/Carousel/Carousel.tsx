import { wallpapers } from './wallpapers'

interface Props {}

export const Carousel = () => {
  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <div>
      {wallpapers.map((wallpaper, i) => (
        <div key={i} />
      ))}
    </div>
  )
}
