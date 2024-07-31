import Image from 'next/image'
import logo from '@images/logo.svg'

export const Header = () => {
  // --------------------- ===
  //  RENDER
  // ---------------------
  return (
    <header className="flex h-20 w-full items-center justify-center">
      <Image src={logo} width={22} alt="" />
    </header>
  )
}
