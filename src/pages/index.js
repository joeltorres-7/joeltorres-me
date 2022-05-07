import * as React from "react"
import Layout from '../components/Layout'
import Welcome from '../components/sections/Welcome'
import Navbar from "../components/Navbar";
import SocialNav from '../components/SocialNav';
import About from "../components/sections/About";
import Projects from "../components/sections/Projects";
import Illustrations from "../components/sections/Illustrations";
import LetsTalk from "../components/sections/LetsTalk";
import Footer from "../components/Footer";
import MobileMenu from "../components/MobileMenu";
import { Helmet } from "react-helmet"

// markup

const IndexPage = () => {
  return (
    <Layout>

      {/* Page Title */}

      <Helmet htmlAttributes={{
        lang: 'en',
      }}>
        <meta charSet="utf-8" />
        <meta name="description" content="Joel Torres is Web & Mobile Developer, UI/UX Designer and Polyglot who uses the power of technology to improve education and services."></meta>
        <title>Joel Torres</title>
        <link rel="apple-touch-icon" href="../images/favicons" />
        <link rel="icon" type="image/x-icon" href="../images/favicons/favicon.ico"></link>
        <link rel="canonical" href="http://joeltorres.me/" />
      </Helmet>

      {/* Sections */}

      <MobileMenu />
      <Navbar />
      <SocialNav />
      <Welcome />
      <About />
      <Projects />
      <Illustrations />
      <LetsTalk />
      <Footer />
    </Layout>
  )
}

export default IndexPage
