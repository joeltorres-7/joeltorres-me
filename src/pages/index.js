import * as React from "react"
import Layout from '../components/Layout'
import Welcome from '../components/sections/Welcome'

// markup
const IndexPage = () => {
  return (
    <main>
      <Layout>
        <Welcome />
      </Layout>
    </main>
  )
}

export default IndexPage
