import * as React from "react"
import Layout from '../components/Layout'
import Welcome from '../components/sections/Welcome'
import Navbar from "../components/Navbar";
import SocialNav from '../components/SocialNav';
import About from "../components/sections/About";

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Navbar />
        <SocialNav />
        <Welcome />
        <About />
      </Layout>
    </main>
  )
}

export default IndexPage
