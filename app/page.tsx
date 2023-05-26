import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import RootLayout from './layout';
import ParallaxText from '@/components/ParallaxText';
import MainContent from '@/components/MainContent';
import Title from '@/components/Title';

export default function Home() {
  return (
    <>
      <section className=' snap-center bg-[#347fc4]'>
        <Hero />
        <ParallaxText baseVelocity={-3}>
          Bitcoin • Ethereum • Litecoin • Tether • BNB • XRP • Cardano
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
          Dogecoin • Solana • Polygon • TRON • Polkadot • Dai • Chainlink
        </ParallaxText>
        <section>
          <Title />
        </section>
      </section>
      <section className='w-[100%]'>
        <MainContent />
      </section>
    </>
  )
}
