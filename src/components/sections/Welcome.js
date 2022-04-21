import * as React from 'react'
import Layout from '../Layout';
import styled from 'styled-components';
import BackDots from '../BackDots';

// Styles

const SectionWelcome = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-height: 80vh;

    h1 {
        display: inline-flex;
        margin: .1rem;
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
            </SectionWelcome>
        </Layout>
    )
}

export default Welcome