import Hero from '@/components/Hero';
import ParallaxText from '@/components/ParallaxText';
import MainContent from '@/components/MainContent';
import Title from '@/components/Title';
import Card from '@/components/Card';

export default function Home() {
  return (
    <>
      <section className='snap-center bg-[#347fc4]'>
        <Hero />
        <ParallaxText baseVelocity={-3}>
          Bitcoin • Ethereum • Litecoin • Tether • BNB • XRP • Cardano
        </ParallaxText>
        <ParallaxText baseVelocity={3}>
          Dogecoin • Solana • Polygon • TRON • Polkadot • Dai • Chainlink
        </ParallaxText>
        <section className='p-5'>
          
          <Card amountOfCoins={4} display='hidden' mdColsNum='md:grid-cols-4' lgColsNum='md:grid-cols-4'/>
        </section>
      </section>
      <section className='w-[100%]'>
        <MainContent />
      </section>
    </>
  )
}
