import { Banner } from '@/components/Banner/Banner'
import { Header } from '@/components/Header/Header'

export default function Home() {
  return (
    <main className="min-h-screen bg-brand-midnight text-brand-white">
      <Header />
      <div className="container mx-auto">
        <Banner>Introducing NFT Wallpapers</Banner>
        <h1 className="text-display-lg">CCO NFT Assets as Wallpapers</h1>
      </div>
    </main>
  )
}
