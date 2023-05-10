import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import RootLayout from './layout';
import Footer from '@/components/Footer';
import Card from '../components/Card';

export default function Home() {
  return (
    <>
      <RootLayout>
        <Navbar />
        <Hero />
        <Card />
        <Footer />
      </RootLayout>
    </>
  )
}
