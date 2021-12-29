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
        <meta charset='utf-8' />
          <meta name="viewport" content='width=device-width, initial-scale=1,shring-to-fit=no' />
        <meta name="description" content="JavaScript Developer " />
        <meta name="keyword" content='portfolio, javascript, nexjs, reactks,developer, front-end' />

        <meta property='og:title' content='Saurav Purohit | Front End Developer' />
        <meta  property='og:description' content='JavaScript Developer' />
        <meta property="og:type" content='"website' />
        <meta property='og:url' content="" />
        <link
          rel="icon"
          type="image/svg+xml"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%22256%22 height=%22256%22 viewBox=%220 0 100 100%22><rect width=%22100%22 height=%22100%22 rx=%2220%22 fill=%22%23008bc4%22></rect><path d=%22M27.64 72.43Q22.72 72.43 18.22 70.85Q13.71 69.28 11.26 66.69L11.26 66.69L13.08 63.10Q15.48 65.50 19.45 66.98Q23.41 68.46 27.64 68.46L27.64 68.46Q33.56 68.46 36.52 66.29Q39.48 64.11 39.48 60.65L39.48 60.65Q39.48 58.00 37.87 56.43Q36.27 54.85 33.94 54.00Q31.60 53.15 27.45 52.14L27.45 52.14Q22.47 50.88 19.51 49.72Q16.55 48.55 14.44 46.16Q12.33 43.76 12.33 39.67L12.33 39.67Q12.33 36.33 14.09 33.59Q15.85 30.85 19.51 29.21Q23.16 27.57 28.58 27.57L28.58 27.57Q32.36 27.57 35.98 28.61Q39.61 29.65 42.25 31.48L42.25 31.48L40.68 35.20Q37.90 33.37 34.75 32.45Q31.60 31.54 28.58 31.54L28.58 31.54Q22.78 31.54 19.85 33.78Q16.93 36.01 16.93 39.54L16.93 39.54Q16.93 42.19 18.53 43.79Q20.14 45.40 22.56 46.25Q24.99 47.10 29.08 48.11L29.08 48.11Q33.94 49.31 36.93 50.47Q39.92 51.64 42.00 54.00Q44.08 56.36 44.08 60.39L44.08 60.39Q44.08 63.73 42.28 66.47Q40.49 69.22 36.77 70.82Q33.05 72.43 27.64 72.43L27.64 72.43ZM70.73 27.95Q79.17 27.95 83.96 31.98Q88.75 36.01 88.75 43.07L88.75 43.07Q88.75 50.13 83.96 54.13Q79.17 58.13 70.73 58.13L70.73 58.13L58.88 58.13L58.88 72.05L54.22 72.05L54.22 27.95L70.73 27.95ZM70.60 54.03Q77.15 54.03 80.62 51.17Q84.08 48.30 84.08 43.07L84.08 43.07Q84.08 37.71 80.62 34.85Q77.15 31.98 70.60 31.98L70.60 31.98L58.88 31.98L58.88 54.03L70.60 54.03Z%22 fill=%22%23fff%22></path></svg>"
        />

        {/* Google Fonts Link */}
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossorigin
        ></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&family=Montserrat:wght@400;600&family=Poppins:wght@400;600;700&family=Ubuntu:wght@400;700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <main>
        <header id="home">
          <Navbar />
          <HeroSection />
        </header>
        <AboutSection />
        <SkillSection />
        <ProjectsSection />
        <ContactSection />
        <Footer />
      </main>
    </>
  );
}
