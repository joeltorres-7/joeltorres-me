import * as React from "react"
import Layout from '../components/Layout'
import Welcome from '../components/sections/Welcome'
import Navbar from "../components/Navbar";
import SocialNav from '../components/SocialNav';

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Navbar />
        <SocialNav />
        <Welcome />
      </Layout>
    </main>
  )
}

export default IndexPage
