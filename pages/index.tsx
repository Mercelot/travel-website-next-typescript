import Head from 'next/head'
import Navbar from '../components/Navbar'
import HeroSection from "../components/HeroSection";

export default function Home() {
    return (
    <div>
      <Head>
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script src="https://kit.fontawesome.com/b5de23c602.js" crossOrigin="anonymous"></script>
          <title></title>
      </Head>
      <Navbar/><HeroSection/>
    </div>
  )
}
