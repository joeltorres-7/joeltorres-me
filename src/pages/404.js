import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar";
import SocialNav from '../components/SocialNav';
import styled from 'styled-components';
import BackDots from "../components/BackDots";
import { Helmet } from "react-helmet"

const NotFoundLayout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  min-height: 100vh;

  h2 {
    background: #EF476F;
    color: #fff;
    border-radius: 12px;
    padding: .6rem .9rem;
    margin: 0 .8rem;
    font-size: 2.8rem;
    -moz-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
    -webkit-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
    box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
  }

  h3 {
      display: inline-flex;
      margin: 2rem;
      max-width: 30vw;
      text-align: center;
      font-weight: 600;
  }
`

// markup
const NotFoundPage = () => {
  return (
    <Layout>

      {/* Page Title */}

      <Helmet>
        <meta charSet="utf-8" />
        <title>404 - Not Found</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {/* Sections */}

      <Navbar />
      <SocialNav />
      <BackDots />
      <NotFoundLayout>
        <h2>404</h2>
        <h3>The page you're looking for doesn't exist or has been moved.</h3>
      </NotFoundLayout>
    </Layout>
  )
}

export default NotFoundPage
