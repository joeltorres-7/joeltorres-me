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

// markup

const IndexPage = () => {
  return (
    <Layout>
      <Navbar />
      <SocialNav />
      <Welcome />
      <About id="about" />
      <Projects id="projects" />
      <Illustrations id="illustrations" />
      <LetsTalk id="lets-talk" />
      <Footer />
    </Layout>
  )
}

export default IndexPage
