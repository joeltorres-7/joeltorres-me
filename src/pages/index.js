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

// markup

const IndexPage = () => {
  return (
    <Layout>
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
