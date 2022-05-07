import React from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Logo from '../images/logo/joeltorres-logo.svg';
import { Link, animateScroll as scroll } from "react-scroll";

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
      background-color: rgba(255, 255, 255, .8);  
      backdrop-filter: blur(1rem);
      -webkit-backdrop-filter: blur(1rem);
      box-shadow: 0px 10px 5px rgb(239, 71, 111, 0.1);
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
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

    svg {
        padding: 1rem 2rem;
        width: 38px;
        height: 38px;
        transition-duration: 0.3s;
        
        &:hover {
          cursor: pointer;
        }

        path {
          transition-duration: 0.4s;
        }
    }

    // Logo Styles

    .red-fill {
      fill: #EF476F;
    }

    .yellow-fill {
      fill: #FFD166;
    }

    .blue-fill {
      fill: #118AB2;
    }

    .green-fill {
      fill: #06D6A0;
    }

    // Hamburger Menu

    .menu-icon {
      position: relative;
      width: 100px;
      height: 80px;
      cursor: pointer;
      display: none;

    .menu-icon__cheeckbox {
      display: block;
      width: 100%;
      height: 100%;
      position: relative;
      cursor: pointer;
      z-index: 2;
      -webkit-touch-callout: none;
      position: absolute;
      opacity: 0;
    }

    div {
      margin: auto;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      bottom: 0;
      width: 26px;
      height: 12px;
    }

    span {
      position: absolute;
      display: block;
      width: 100%;
      height: 2px;
      background-color: #118AB2;
      border-radius: 3px;
      transition: all 0.2s cubic-bezier(0.1, 0.82, 0.76, 0.965);

      &:first-of-type {
        top: 0;
      }
      &:last-of-type {
        bottom: 0;
      }
    }
    &.active,
    .menu-icon__cheeckbox:checked + div {
      span {
        &:first-of-type {
          transform: rotate(45deg);
          top: 5px;
          background-color: #EF476F;
        }
        &:last-of-type {
          transform: rotate(-45deg);
          bottom: 5px;
          background-color: #EF476F;
        }
      }
    }

    &.active:hover span:first-of-type,
    &.active:hover span:last-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:first-of-type,
    &:hover .menu-icon__cheeckbox:checked + div span:last-of-type {
      width: 22px;
    }

    &:hover {
      
      // No need hover effect on mobile.

      @media (min-width: 1024px) {
        span:first-of-type {
          width: 26px;
        }

        span:last-of-type {
          width: 12px;
        }
      }
    }
  }
`;

const Navbar = () => {

  // Scroll Down
  // const isBrowser = typeof window !== "undefined"

  let mobileMenuActive = true;

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

  // Open Menu

  const openMenu = () => {
    mobileMenuActive = mobileMenuActive !== true;
    document.getElementById("mobile-menu").classList.toggle('show-menu');
    document.getElementById("navbar").classList.toggle('hide-shadow');
    window.onscroll = mobileMenuActive ? function () {
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
    } : false;
  }

  // Change logo color if hover

  const aboutHover = () => {
    document.getElementById("logo-letter").classList.toggle('red-fill');
  }

  const projectsHover = () => {
    document.getElementById("logo-letter").classList.toggle('yellow-fill');
  }

  const illustrationsHover = () => {
    document.getElementById("logo-letter").classList.toggle('blue-fill');
  }

  const talkHover = () => {
    document.getElementById("logo-letter").classList.toggle('green-fill');
  }

  // Return View

  return (
    <StyledNavbar id='navbar' className='hide-shadow'>
      <Link to="about"
        onMouseOver={aboutHover}
        onMouseLeave={aboutHover}
        spy={true}
        smooth={true}
        offset={0}
        duration={600} className='link'>about</Link>
      <Link to="projects"
        onMouseOver={projectsHover}
        onMouseLeave={projectsHover}
        spy={true}
        smooth={true}
        offset={-60}
        duration={700} className='yellow link'>projects</Link>

      <svg alt='Personal logo that looks like PI symbol.' id="nav-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 37.998" width="38" height="37.998"><path d="M0 0v37.998h38V0Zm34.368 13.191h-6.126V28.738H22.575V13.191h-4.343v8.157q0 3.922 -1.975 5.854t-5.754 1.931q-2.203 0 -3.993 -0.758a7.608 7.608 0 0 1 -2.964 -2.189l3.091 -3.665q0.802 1.031 1.661 1.56a3.38 3.38 0 0 0 1.802 0.532q2.518 0 2.52 -2.92v-8.614H5.692v-4.381h28.676Z" fill="none" /><path id='logo-letter' d="M34.368 8.697v4.494h-6.126V28.738H22.575V13.191h-4.343v8.157q0 3.922 -1.975 5.854t-5.754 1.931q-2.203 0 -3.993 -0.758a7.608 7.608 0 0 1 -2.964 -2.189l3.091 -3.665q0.802 1.031 1.661 1.56a3.38 3.38 0 0 0 1.802 0.532q2.518 0 2.52 -2.92v-8.614H5.692v-4.381Z" fill="#073b4c" /></svg>

      <Link to="illustrations"
        onMouseOver={illustrationsHover}
        onMouseLeave={illustrationsHover}
        spy={true}
        smooth={true}
        offset={-60}
        duration={700} className='blue link'>illustrations</Link>
      <Link
        to="lets-talk"
        onMouseOver={talkHover}
        onMouseLeave={talkHover}
        spy={true}
        smooth={true}
        offset={20}
        duration={800}
        className='green link'>let's talk</Link>

      <div class="menu-icon" onClick={openMenu}>
        <input id="menu-icon-checkbox" class="menu-icon__cheeckbox" type="checkbox" />
        <label for="menu-icon-checkbox"></label>
        <div>
          <span></span>
          <span></span>
        </div>
      </div>

    </StyledNavbar>
  )
}

export default Navbar