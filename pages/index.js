import Head from 'next/head'
import Link from 'next/link'
import HeroSection from '../components/HeroSection/HeroSection'
import Navbar from '../components/Navbar/Navbar'
import MouseScroll from '../components/UI/Mouse-Scroll/MouseScroll'
import Scrollspy from 'react-scrollspy'
import AboutSection from '../components/AboutSection/AboutSection'
import SkillSection from '../components/SkillSection/SkillSection'
import ProjectsSection from '../components/ProjectsSection/ProjectsSection'
import ContactSection from '../components/ContactSection/ContactSection'
import Footer from '../components/Footer/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />


        {/* Google Fonts Link */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin></link>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@400;600&family=Poppins:wght@400;600;700&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet"></link>  
      </Head>

      <main>
        <header id='home'>        
          <Navbar />
          <HeroSection />
          <MouseScroll />
        </header>
          <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
     </> 
  )
}
