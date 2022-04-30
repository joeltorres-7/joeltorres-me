import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Normalize } from 'styled-normalize'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap');

    html {
        padding: 0;
        margin: 0;
    }

    body {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-family: 'Montserrat', sans-serif;
        font-weight: 500;
        color: #0B3B4B;
    }

    h1 {
        font-size: 2.4rem;
        font-weight: 600;
        margin: 0;
    }

    h2 {
        font-size: 1.2rem;
        font-weight: 600;
        margin: .2rem;
    }

    p {
        font-size: .9rem;
    }

    // Queries: Width

    @media only screen and (max-width: 1300px) {

        // Welcome Page

        #rolling-box {
            min-width: 30vw;
        }

    }

    @media only screen and (max-width: 1000px) {

        // Welcome Page

        #rolling-box {
            min-width: 35vw;
        }

    }

    @media only screen and (max-width: 810px) {

        // Welcome Page

        #rolling-box {
            min-width: 45vw;
        }

    }

    @media only screen and (max-width: 650px) {

        // Welcome Page

        #rolling-box {
            min-width: 45vw;
        }

        #gatsby-focus-wrapper {
            overflow: hidden;
        }

        #navbar {
            justify-content: space-between;

            .link {
                display: none;
            }

            .menu-icon {
                display: block;

            #nav-logo {
                justify-self: flex-start;
            }
        }

    }

    // Queries: Height

    @media only screen and (max-height: 430px) {

        // Welcome Page

        #social-nav, #scroll-message {
            display: none;
        }

    }
}
`;

export default GlobalStyles;