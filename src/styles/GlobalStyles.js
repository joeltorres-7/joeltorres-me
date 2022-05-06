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

        // Background Dots

        #dot-box {
            .pink-dot {
                height: 1.5rem;
                width: 1.5rem;
                position: fixed;
                bottom: 2rem;
                right: 3rem;
                border-radius: 100%;
                background: #EF476F;
            }

            .blue-dot {
                height: 4rem;
                width: 4rem;
                position: fixed;
                top: 16rem;
                right: 6rem;
                border-radius: 100%;
                background: #118AB2;
            }

            .yellow-dot {
                height: 1rem;
                width: 1rem;
                position: fixed;
                top: 5rem;
                right: 3rem;
                border-radius: 100%;
                background: #FFD166;
            }

            .pink-dot-rev {
                height: 1rem;
                width: 1rem;
                position: fixed;
                bottom: 4rem;
                left: 5rem;
                border-radius: 100%;
                background: #EF476F;
            }

            .blue-dot-rev {
                height: 3rem;
                width: 3rem;
                position: fixed;
                top: 6rem;
                left: 3rem;
                border-radius: 100%;
                background: #118AB2;
            }

            .yellow-dot-rev {
                height: 1.8rem;
                width: 1.8rem;
                position: fixed;
                bottom: 10rem;
                left: 10rem;
                border-radius: 100%;
                background: #FFD166;
            }
        }

    }

    @media only screen and (max-width: 810px) {

        // Welcome Page

        #rolling-box {
            min-width: 45vw;
        }

        #featured-gengo, #featured-sena {
            flex-direction: column;
        }

        div.project-description, .project-button {
            justify-content: center;
            align-items: center;
            margin: 1rem auto;
            flex-direction: column;
        }

        .project-description > img {
            margin: 0 auto;
        }

        .project-description > div.tags {
            margin: 1.5rem auto !important;
            display: grid;
            grid-template-columns: 100px 100px;
            grid-template-rows: auto;
            grid-column-gap: 1rem;
            grid-row-gap: 1rem;
        }

        .project-description > p.project-text {
            margin: 0 auto;
            min-width: 50vw;
            text-align: center;
        }

        .illustration-container > p {
            margin: 3rem auto;
            min-width: 50vw;
            text-align: center;
        }

        .devices {
            display: none;
        }

        a.project-button {
            margin: 0rem auto;
        }

        p.section-title {
            max-width: 60vw !important;
        }

        /* Grid View for Illustrations */

        div .grid-view-vectors, div .grid-view-illustrations {
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            margin: auto;
            max-width: 50vw;

            &:img {
                flex-grow: 1;
                margin: auto;
            }
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

        #carousel {
            flex-direction: column;

            h1 {
                margin-bottom: 0.6rem;
            }
        }

        #social-nav, #scroll-message {
            display: none;
        }

        #navbar {
            justify-content: space-between;

            .link {
                display: none;
            }

            .menu-icon {
                display: block;
            }

            #nav-logo {
                justify-self: flex-start;
            }
        }

        // Dots

        #dot-box {
            .blue-dot {
                height: 2rem;
                width: 2rem;
                position: fixed;
                top: 14rem;
                right: 4rem;
                border-radius: 100%;
                background: #118AB2;
            }

            .blue-dot-rev {
                height: 1.5rem;
                width: 1.5rem;
                position: fixed;
                top: 6rem;
                left: 3rem;
                border-radius: 100%;
                background: #118AB2;
            }

            .yellow-dot-rev, .pink-dot {
                display: none;
            }
        }

        .section-subtitle {
            line-break: auto;
            max-width: 60vw;
            text-align: center;
        }
    }

    @media only screen and (max-width: 550px) {
        #rolling-box {
            min-width: 55vw;
        }
    }

    @media only screen and (max-width: 450px) {
        #rolling-box {
            min-width: 65vw;
        }

        p .section-title {
            min-width: 60vw;
        }
    }

    @media only screen and (max-width: 380px) {
        #rolling-box {
            min-width: 76vw;
        }

        .section-title {
            min-width: 40vw;
        }
    }

    // Queries: Height

    @media only screen and (max-height: 430px) {

        // Welcome Page

        #social-nav, #scroll-message {
            display: none;
        }

    }
`;

export default GlobalStyles;