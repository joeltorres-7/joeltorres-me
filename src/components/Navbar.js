import * as React from 'react'
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
        padding: 1rem 2rem;
        font-weight: 600;
        transition-duration: .5s;

        &:hover {
            color: #EF476F;
            cursor: pointer;
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
            <p>project</p>
            <img src={Logo}/>
            <p>illustrations</p>
            <p>let's talk</p>
        </StyledNavbar>
    )
}

export default Navbar;