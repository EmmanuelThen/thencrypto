import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import RootLayout from './layout';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <>
      <RootLayout>
        <Navbar />
        <Hero />
        <Footer />
      </RootLayout>
    </>
  )
}
