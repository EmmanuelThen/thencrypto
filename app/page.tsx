import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import RootLayout from './layout';
import Footer from '@/components/Footer';
import Card from '../components/Card';
import Sidebar from '@/components/Sidebar';
import ParallaxText from '@/components/ParallaxText';
import MainContent from '@/components/MainContent';
import Features from '@/components/Features';
import Title from '@/components/Title';




export default function Home() {
  return (
    <>
      <RootLayout>
        <section className=' snap-y snap-start snap-mandatory bg-[#347fc4]'>
          <Navbar />
          <Hero />
          <ParallaxText baseVelocity={-3}>
            Bitcoin • Ethereum • Litecoin • Tether • BNB • XRP • Cardano
          </ParallaxText>
          <ParallaxText baseVelocity={3}>
            Dogecoin • Solana • Polygon • TRON • Polkadot • Dai • Chainlink
          </ParallaxText>
        </section>
        <section>
          <Title />
        </section>
        <section className='w-[100%]'>
          <MainContent />
        </section>
      </RootLayout>
    </>
  )
}
