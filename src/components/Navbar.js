import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Logo from '../images/logo/joeltorres-logo.svg';
import scrollTo from 'gatsby-plugin-smoothscroll';

// Markup

const StyledNavbar = styled.nav`
    z-index: 10;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    // Hide Navbar: https://www.w3schools.com/howto/howto_js_navbar_hide_scroll.asp

    &#navbar {
      background: #fff;
      box-shadow: 0px 10px 5px rgb(239, 71, 111, 0.1);
      position: fixed;
      top: 0;
      width: 100%;
      transition: top 0.3s;
    }

    &#navbar.hide-shadow {
      transition: top 0.3s;
      box-shadow: 0px 10px 5px rgb(239, 71, 111, 0.0);
    }

    .link {
        text-decoration: none;
        color: currentColor;
        font-size: 0.9rem;
        padding: .6rem 1.2rem;
        margin: .6rem .8rem;
        font-weight: 600;
        transition-duration: .5s;
        border-radius: 12px;

        &:hover {
            color: #EF476F;
            cursor: pointer;
        }

        &.yellow:hover {
          color: #FFD166;
        }

        &.blue:hover {
          color: #118AB2;
        }

        &.green:hover {
          color: #06D6A0;
        }
    }

    img {
        padding: 1rem 2rem;
        width: 38px;
        height: 38px;
    }
`;

const Navbar = () => {

  // Scroll Down
  // const isBrowser = typeof window !== "undefined"

  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (currentScrollPos <= 5) {
      document.getElementById("navbar").classList.add('hide-shadow');
    } else if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").classList.remove('hide-shadow');
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").classList.remove('hide-shadow');
      document.getElementById("navbar").style.top = "-80px";
    }
    prevScrollpos = currentScrollPos;
  }

  // Return View

  return (
      <StyledNavbar id='navbar' className='hide-shadow'>
        <a onClick={() => scrollTo('#about')} className='link'>about</a>
        <a onClick={() => scrollTo('#projects')} className='yellow link'>projects</a>
        <img src={Logo} />
        <a onClick={() => scrollTo('#illustrations')} className='blue link'>illustrations</a>
        <a onClick={() => scrollTo('#lets-talk')} className='green link'>let's talk</a>
      </StyledNavbar>
  )
}

export default Navbar;