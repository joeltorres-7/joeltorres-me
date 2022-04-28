import * as React from 'react'
import Layout from '../Layout';
import styled from 'styled-components';
import BackDots from '../BackDots';
import ScrollMessage from '../ScrollMessage';

// Styles

const SectionWelcome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-height: 100vh;

    h1 {
        display: inline-flex;
        margin: .1rem;
        width: fit-content;
        white-space: nowrap;
    }

    #carousel {
        display: flex;
        align-items: center;
        justify-content: center;
        margin: .5rem;
    }

    // Set Scrollbar for Firefox

    html {
        overflow-y: scroll;
        scrollbar-color: #0A4C95 #C2D2E4;
    }

    // Set scrollbar default for Chrome

     /* width */
    html::-webkit-scrollbar {
        width: 6px;
    }

    /* Track */
    html::-webkit-scrollbar-track {
        background: #f1f1f1;
    }

    /* Handle */
    html::-webkit-scrollbar-thumb {
        background: #888;
    }

    /* Handle on hover */
    html::-webkit-scrollbar-thumb:hover {
        background: #555;
    } 
`;

const SpanBox = styled.span`
    background: #EF476F;
    color: #fff;
    border-radius: 12px;
    padding: .3rem .6rem;
    margin: 0 .8rem;
    height: 3.125rem;
    line-height: 4rem;
    position: relative;
    overflow: hidden; 
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align:center;
    transition-duration: 0.3s;
    font-size: 2em;
    min-width: 22vw;
    font-weight: 600;

    #rolltext {
      position: absolute;
      top: 0;
      animation: slide 5s infinite;  
    }

    @keyframes slide {
        0%{
            top:0;
        }
        25%{
            top: -4rem;    
        }
        50%{
            top: -8rem;
        }
        72.5%{
            top: -12.25rem;
        }
    }

    &:hover {
        cursor: pointer;
    }

    &:active {
        transform: scale(1.02);
        margin: 0.5rem 1rem;
        padding-left: 1rem;
    }
`

const Welcome = () => {
    return (
        <Layout>
            <BackDots />
            <SectionWelcome>
                <h2>Ahoy! My name is</h2>
                <h1>Joel Torres</h1>
                <div id='carousel'>
                    <h1 id='i-am-text'>I'm a</h1>
                    <SpanBox id='rolling-box'>
                        <span id="rolltext">Web Developer
                            <br />
                            UI/UX Designer
                            <br />
                            Mobile Developer
                            <br />
                            <span id="spare-time">Polyglot</span><br />
                        </span>
                    </SpanBox>
                </div>
                <ScrollMessage />
            </SectionWelcome>
        </Layout>
    )
}

export default Welcome