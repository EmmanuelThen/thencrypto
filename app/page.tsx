import Image from 'next/image'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import RootLayout from './layout';
import Footer from '@/components/Footer';
import Card from '../components/Card';
import Sidebar from '@/components/Sidebar';

export default function Home() {
  return (
    <>
      <RootLayout>
        <Navbar />
        <Hero />
        <main className='flex justify-center w-[100%] bg-[#347fc4]'>
          <Sidebar />
          <Card />
        </main>
        <Footer />
      </RootLayout>
    </>
  )
}
