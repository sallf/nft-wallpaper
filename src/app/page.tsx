import { Banner } from '@/components/Banner/Banner'
import { Header } from '@/components/Header/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-midnight text-brand-white">
      <Header />
      <div className="container mx-auto mt-12">
        <div className="flex w-full flex-col gap-6 md:w-3/4">
          <div>
            <Banner>Introducing NFT Wallpapers</Banner>
          </div>
          <h1 className="text-display-lg">CC0 NFT Assets as Wallpapers</h1>
          <p className="text-brand-smokey">
            Grab the NFT you like for your phone wallpaper
          </p>
        </div>
      </div>
    </main>
  )
}
