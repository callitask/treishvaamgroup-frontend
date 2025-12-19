import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import HeroSection from '@/components/home/HeroSection'
import SnapshotSection from '@/components/home/SnapshotSection'

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SnapshotSection />
      </main>
      <Footer />
    </>
  )
}
