import * as React from 'react'
import Layout from '../Layout';
import styled from 'styled-components';
import Art from '../Art';

const SectionIllustrations = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-height: 100vh;
    margin: 3rem auto;

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
`

const IllustratorGuide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    h4 {
        color: #fff;
        font-weight: 600;
        background: #EF476F;
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

const IllustratorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Vectors = styled.div`
    display: flex;
    flex-direction: column;

    p {
        margin: 2rem auto;
        line-height: 1.2rem;
        max-width: 24vw;
        color: #EF476F;
    }

    div {
        margin-top: 1rem;
        display: grid;
        grid-template-columns: 100px 100px 100px;
        grid-template-rows: auto;
        grid-column-gap: 6rem;
        grid-row-gap: 3rem;
        justify-items: center;
        align-items: end;

        * { box-sizing: border-box; }
    }

    img {
        max-width: 90px;
        transition-duration: .3s;

        &:hover {
            cursor: pointer;
            filter: drop-shadow(10px 4px 2px rgba(255, 209, 102, 0.4));
        }

        &.small {
            max-width: 100px;
        }

        &.medium {
            max-width: 90px;
        }

        &.big {
            max-width: 80px;
        }

        &.really-big {
            max-width: 65px;
        }
    }
`

const Illustrations = () => {
    return (
        <Layout>
            <SectionIllustrations>
                <h2>Illustrations</h2>
                <p>The majority of my projects start with the vision of helping someone reach a goal or learn a new skill.<br/><br/>Here are some of them:</p>

                <IllustratorContainer>
                    <IllustratorGuide>
                        <svg className="back-skill" viewBox="-100.9 99.1 61.9 105.9" fill="#EF476F" width="12px" margin-right="4px"><path d="M-98.2 158.8l43.5 43.5c1.7 1.7 4 2.7 6.5 2.7s4.8-1 6.5-2.7c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5l-37.2-37.2 37.2-37.2c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.6-6.5c-1.8-1.9-4.2-2.8-6.6-2.8-2.3 0-4.6.9-6.5 2.6-11.5 11.4-41.2 41-43.3 43l-.2.2c-3.6 3.6-3.6 10.3 0 13.9z"></path></svg>
                        <h4 id='skillset-title'>Vectors</h4>
                        <svg className="next-skill" viewBox="-100.9 99.1 61.9 105.9" fill="#EF476F" width="12px" margin-left="4px"><path d="M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"></path></svg>
                    </IllustratorGuide>

                    <Vectors>
                        <p>So far, I have made a lot of vector illustrations for my mobile app, <b>Gengo!</b><br/><br/>Here are some of them:</p>
                        <div className='grid-view'>
                            <img src={ Art.badges } alt='' />
                            <img src={ Art.worldwide } alt='' />
                            <img src={ Art.heart } alt='' />
                            <img className='big' src={ Art.email } alt='' />
                            <img className='small' src={ Art.workout } alt='' />
                            <img className='medium' src={ Art.happy } alt='' />
                            <img className='medium' src={ Art.knowledge } alt='' />
                            <img className='really-big' src={ Art.confused } alt='' />
                            <img className='small' src={ Art.languages } alt='' />
                        </div>
                    </Vectors>

                </IllustratorContainer>
            </SectionIllustrations>
        </Layout>
    )
}

export default Illustrations