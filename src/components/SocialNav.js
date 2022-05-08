import * as React from 'react'
import styled from 'styled-components'

const StyledSocialNav = styled.ul`
    position: fixed;
    bottom: 0;
    left: 0;
    max-width: 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 0 0 2rem;
    padding: 0;
    list-style: none;

    &:after {
        content: '';
        width: fit-content;
        display: block;
        width: 3px;
        height: 90px;
        margin: 0 auto;
        background-color: #EF476F;
        border-radius: 1rem;
    }

    a {
        margin-bottom: 1.5rem;
        color: currentColor;
        transition-duration: .3s;

        &:hover {
            color: #EF476F;
            animation: playful-rotation .3s linear 1;
        }
        
        &.converted:hover {
            svg {
                transition-duration: .8s;
                fill: #EF476F;
            }
        }
    }

    @keyframes playful-rotation {
        0% {
		    transform: rotate(0deg);
	    }
	    35% {
		    transform: rotate(-8deg);
	    }
	    75% {
		    transform: rotate(8deg);
	    }
	    100% {
		    transform: rotate(0deg);
	    }
    }
`

const SocialNav = () => {
    return (
        <StyledSocialNav id='social-nav'>
            <a href='https://twitter.com/JoelTorres_7' target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-twitter">
                    <title>Twitter</title>
                    <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                </svg>
            </a>
            <a href='https://github.com/joeltorres-7' target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-github">
                    <title>GitHub</title>
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
            </a>
            <a href='https://www.linkedin.com/in/joeltorres1/' target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    viewBox="0 0 24 24"
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-linkedin">
                    <title>LinkedIn</title>
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                </svg>
            </a>
            <a href='https://codepen.io/joeltorres-7' target="_blank" rel="noopener noreferrer">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-codepen">
                    <title>CodePen</title>
                    <polygon points="12 2 22 8.5 22 15.5 12 22 2 15.5 2 8.5 12 2"></polygon>
                    <line x1="12" y1="22" x2="12" y2="15.5"></line>
                    <polyline points="22 8.5 12 15.5 2 8.5"></polyline>
                    <polyline points="2 15.5 12 8.5 22 15.5"></polyline>
                    <line x1="12" y1="2" x2="12" y2="8.5"></line>
                </svg>
            </a>
            <a href='https://dribbble.com/joeltorres' className='converted' target="_blank" rel="noopener noreferrer">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" fill="#073B4C" height="24" viewBox="0 0 9.6 9.6">
                    <path d="M0 4.8c0 -0.87 0.214 -1.674 0.643 -2.41 0.429 -0.736 1.011 -1.318 1.747 -1.747C3.126 0.214 3.93 0 4.8 0c0.87 0 1.674 0.214 2.41 0.643 0.736 0.429 1.318 1.011 1.747 1.747 0.429 0.736 0.643 1.539 0.643 2.41s-0.214 1.674 -0.643 2.41c-0.429 0.736 -1.011 1.318 -1.747 1.747 -0.736 0.429 -1.539 0.643 -2.41 0.643 -0.87 0 -1.674 -0.214 -2.41 -0.643 -0.736 -0.429 -1.318 -1.011 -1.747 -1.747C0.214 6.474 0 5.67 0 4.8zm0.797 0c0 0.998 0.336 1.878 1.008 2.64 0.307 -0.602 0.794 -1.174 1.459 -1.718 0.666 -0.544 1.315 -0.886 1.949 -1.027 -0.096 -0.224 -0.189 -0.426 -0.278 -0.605 -1.101 0.352 -2.291 0.528 -3.571 0.528 -0.25 0 -0.435 -0.003 -0.557 -0.01 0 0.026 -0.002 0.058 -0.005 0.096 -0.003 0.038 -0.005 0.07 -0.005 0.096zm0.125 -0.989c0.141 0.013 0.349 0.019 0.624 0.019 1.069 0 2.083 -0.144 3.043 -0.432 -0.486 -0.864 -1.021 -1.584 -1.603 -2.16 -0.506 0.256 -0.939 0.611 -1.301 1.066 -0.362 0.454 -0.616 0.957 -0.763 1.507zm1.43 4.147c0.723 0.563 1.539 0.845 2.448 0.845 0.474 0 0.944 -0.09 1.411 -0.269 -0.128 -1.094 -0.378 -2.154 -0.749 -3.178 -0.589 0.128 -1.182 0.451 -1.781 0.97C3.083 6.845 2.64 7.389 2.352 7.958zM3.821 0.931c0.563 0.582 1.085 1.309 1.565 2.179 0.87 -0.365 1.526 -0.829 1.968 -1.392 -0.742 -0.614 -1.594 -0.922 -2.554 -0.922 -0.326 0 -0.653 0.045 -0.979 0.134zm1.91 2.861c0.096 0.205 0.205 0.464 0.326 0.778 0.474 -0.045 0.989 -0.067 1.546 -0.067 0.397 0 0.79 0.01 1.181 0.029 -0.051 -0.87 -0.365 -1.645 -0.941 -2.323 -0.416 0.621 -1.12 1.149 -2.112 1.584zm0.566 1.45c0.326 0.947 0.547 1.92 0.662 2.918 0.506 -0.326 0.918 -0.746 1.238 -1.258 0.32 -0.512 0.512 -1.066 0.576 -1.661 -0.467 -0.032 -0.893 -0.048 -1.277 -0.048 -0.352 0 -0.752 0.016 -1.2 0.048z" />
                </svg>
            </a>
        </StyledSocialNav>
    )
}

export default SocialNav