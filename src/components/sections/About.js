import * as React from 'react';
import Layout from '../Layout';
import styled from 'styled-components';
import ScrollMessage from '../ScrollMessage';
import selfPortrait from '../../images/elements/portrait-joel.png';

const SectionAbout = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-height: 100vh;
    margin-top: 2rem;

    h2 {
        display: inline-flex;
        margin-top: 1rem;
        margin-bottom: 3rem;
        color: #EF476F;
    }

    p {
        color: currentColor;
        text-align: center;
        max-width: 60vh;
    }

    img {
        margin-top: 2rem;
        width: 150px;
        height: 150px;
        border: 1px #FFD166 solid;
        border-radius: 100%;
        padding: 1rem;
    }

    @keyframes portraitBorder {
        0% {
            padding: 1rem;
        } 50% {
            padding: .5rem;
        } 100% {
            padding: 1rem;
        }
    }
`;

const StructureData = styled.div`
    display: flex;
    flex-direction: column;
`

const About = () => {
    return (
        <Layout>
            <SectionAbout>
                <h2>Who am I?</h2>
                <p>I'm Joel, a 19-year-old guy who enjoys creating things for the world.<br/><br/>I consider myself as a constant learner, this is the reason why I have knowledge and +3 years of experience in Web & Mobile Development, UI/UX Design and Language Teaching.</p>
                <img src={selfPortrait}/>
            </SectionAbout>
            <StructureData>

            </StructureData>
        </Layout>
    )
}

export default About