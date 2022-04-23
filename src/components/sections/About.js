import * as React from 'react';
import Layout from '../Layout';
import styled from 'styled-components';
import ScrollMessage from '../ScrollMessage';
import selfPortrait from '../../images/elements/portrait-joel.png';
import Programming from '../skill-bars/Programming';

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
    align-items: center;
    justify-content: center;
    padding: 0 0 2rem 0;
    min-height: 100vh;
    margin-top: 2rem;

    h3 {
        display: inline-flex;
        margin-top: 1rem;
        font-weight: 600;
        margin-bottom: 1rem;
        color: currentColor;
    }

    p {
        max-width: 60vh;
        text-align: center;
        font-weight: 500;
    }
`

const SkillGuide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    h4 {
        color: #fff;
        font-weight: 600;
        background: #FFD166;
        padding: .7rem 1.7rem;
        border-radius: 14px;
    }

    svg {
        margin: 1rem;
        padding: 1rem;
        transition-duration: .3s;

        &:hover {
            cursor: pointer;
        }

        &.back-skill:hover {
            transform: translateX(-.2rem);
        }

        &.next-skill:hover {
            transform: translateX(.2rem);
        }
    }
`

const SkillsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const About = () => {

    // View

    return (
        <Layout>
            <SectionAbout>
                <h2>Who am I?</h2>
                <p>I'm Joel, a 19-year-old guy who enjoys creating things for the world.<br/><br/>I consider myself as a constant learner, this is the reason why I have knowledge and +3 years of experience in Web & Mobile Development, UI/UX Design and Language Teaching.</p>
                <img src={selfPortrait}/>
            </SectionAbout>
            <StructureData>
                <h3>Do you like structured data?</h3>
                <p>Here are some of my skills and technologies I've worked with so far:</p>

                <SkillsContainer>
                    <SkillGuide>
                        <svg class="back-skill" viewBox="-100.9 99.1 61.9 105.9" fill="#FFD166" width="12px" margin-right="4px"><path d="M-98.2 158.8l43.5 43.5c1.7 1.7 4 2.7 6.5 2.7s4.8-1 6.5-2.7c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5l-37.2-37.2 37.2-37.2c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.6-6.5c-1.8-1.9-4.2-2.8-6.6-2.8-2.3 0-4.6.9-6.5 2.6-11.5 11.4-41.2 41-43.3 43l-.2.2c-3.6 3.6-3.6 10.3 0 13.9z"></path></svg>
                        <h4 id='skillset-title'>Development</h4>
                        <svg class="next-skill" viewBox="-100.9 99.1 61.9 105.9" fill="#FFD166" width="12px" margin-left="4px"><path d="M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"></path></svg>
                    </SkillGuide>

                    <Programming />
                </SkillsContainer>
            </StructureData>
        </Layout>
    )
}

export default About