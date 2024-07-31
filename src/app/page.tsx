'use client'

import { Banner } from '@/components/Banner/Banner'
import { Carousel } from '@/components/Carousel/Carousel'
import { Header } from '@/components/Header/Header'
import { Toggle } from '@/components/Toggle/Toggle'
import { Labels } from '@/utils/types'
import { useState } from 'react'

export default function Home() {
  // --------------------- ===
  //  STATE
  // ---------------------
  const [activeLabel, setActiveLabel] = useState<Labels>('Phone')

  // --------------------- ===
  //  RENDER
  // ---------------------
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
          <div>
            <Toggle
              labels={['Phone', 'Watch'] as Labels[]}
              activeLabel={activeLabel}
              setActiveLabel={setActiveLabel}
            />
          </div>
        </div>
        <Carousel activeLabel={activeLabel} />
      </div>
    </main>
  )
}
