import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import RootLayout from './layout';
import Footer from '@/components/Footer';
import Card from '../components/Card';
import Sidebar from '@/components/Sidebar';
import ParallaxText from '@/components/ParallaxText';
import MainContent from '@/components/MainContent';



export default function Home() {
  return (
    <>
      <RootLayout>
        <Navbar />
        <Hero />
        <main className=' w-[100%]'>
          <section>
            <ParallaxText baseVelocity={-3}>
              Bitcoin • Ethereum • Litecoin • Tether • BNB • XRP • Cardano
            </ParallaxText>
            <ParallaxText baseVelocity={3}>
              Dogecoin • Solana • Polygon • TRON • Polkadot • Dai • Chainlink
            </ParallaxText>
          </section>

          <section id='canvas_container'>
            <MainContent />
            
          </section>
          

        </main>
        <Footer />
      </RootLayout>
    </>
  )
}
