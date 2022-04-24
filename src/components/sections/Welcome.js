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
`

const Welcome = () => {
    return (
        <Layout>
            <BackDots/>
            <SectionWelcome>
                <h2>
                    Ahoy! My name is
                </h2>
                <h1>Joel Torres</h1>
                <h1>I'm a <SpanBox>web developer</SpanBox></h1>
                <ScrollMessage/>
            </SectionWelcome>
        </Layout>
    )
}

export default Welcome