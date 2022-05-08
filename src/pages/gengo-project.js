import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/Layout"
import Navbar from "../components/Navbar";
import SocialNav from '../components/SocialNav';
import styled from 'styled-components';
import BackDots from "../components/BackDots";
import MobileMenu from "../components/MobileMenu";
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
    transition-duration: 0.3s;
    font-size: 2.8rem;
    
    &:hover {
      cursor: pointer;
      -moz-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
      -webkit-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
      box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
    }
  }

  h3 {
      display: inline-flex;
      margin: 2rem;
      max-width: 30vw;
      text-align: center;
      font-weight: 600;
  }

  a {
    margin-top: 1rem;
    padding: 1rem 3rem;
    background: #EF476F;
    font-size: 0.8rem;
    color: #fff;
    font-weight: 600;
    width: fit-content;
    border-radius: 2rem;
    transition-duration: 0.3s;
    text-decoration: none;

    &:hover {
        cursor: pointer;
        -moz-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
        -webkit-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
        box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
        animation: playful-rotation .3s linear 1;
    }
  }
`

// markup
const NotFoundPage = () => {
  return (
    <Layout>

      {/* Page Title */}

      <Helmet>
        <meta charSet="utf-8" />
        <title>Yikes! Page Not Found | Joel Torres</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>

      {/* Sections */}

      <MobileMenu />
      <Navbar />
      <SocialNav />
      <BackDots />
      <NotFoundLayout>
        <h2>Gengo</h2>
        <h3>The page you're looking for doesn't exist or has been moved.</h3>
        <Link to="/" className="project-button" target="_blank" rel="noopener noreferrer">Go Home</Link>
      </NotFoundLayout>
    </Layout>
  )
}

export default NotFoundPage
