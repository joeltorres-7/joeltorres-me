import React from 'react';
import styled from 'styled-components';
import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from '../components/Navbar'

const Menu = styled.div`

    // Glass Menu

    background-color: rgba(255, 255, 255, .8);  
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
    box-shadow: 0px 10px 5px rgb(239, 71, 111, 0.1);
    width: 100%;
    height: 0;
    z-index: 5;
    padding: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: fixed;
    visibility: hidden;
    top: 0px;
    transition-duration: 1.5s;
    opacity: 0;

    // Items

    a {
        padding: 2rem 0;
        font-weight: 600;
        font-size: 1.6rem;
    }

    &.show-menu {
        height: 100%;
        visibility: visible;
        transition-duration: 1.5s;
        opacity: 100;
    }
`

const MobileMenu = () => {

    const hideMenu = () => {
        document.getElementById("menu-icon-checkbox").checked = false;
        document.getElementById("mobile-menu").classList.remove('show-menu');
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
    }

    return (
        <Menu id='mobile-menu'>
            <Link to="about"
                onClick={hideMenu}
                spy={true}
                smooth={true}
                offset={0}
                duration={600} className='link'>about</Link>
            <Link to="projects"
                onClick={hideMenu}
                spy={true}
                smooth={true}
                offset={-60}
                duration={700} className='yellow link'>projects</Link>
            <Link to="illustrations"
                onClick={hideMenu}
                spy={true}
                smooth={true}
                offset={-60}
                duration={700} className='blue link'>illustrations</Link>
            <Link to="lets-talk"
                onClick={hideMenu}
                spy={true}
                smooth={true}
                offset={20}
                duration={800}
                className='green link'>let's talk</Link>
        </Menu>
    )
}

export default MobileMenu