import React, { useState, useEffect } from 'react'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import styled from 'styled-components'
import Logo from '../images/logo/joeltorres-logo.svg'

// Markup

const StyledNavbar = styled.nav`
    z-index: 10;
    padding: 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    p {
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
    return (
        <StyledNavbar>
            <p>about</p>
            <p className='yellow'>project</p>
            <img src={Logo}/>
            <p className='blue'>illustrations</p>
            <p className='green'>let's talk</p>
        </StyledNavbar>
    )
}

export default Navbar;