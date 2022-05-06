import * as React from 'react'
import Layout from '../Layout';
import styled from 'styled-components';
import Art from '../Art';

const LetsTalkSection = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-height: 90vh;
    margin: 1rem auto;
    text-align: center;

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

    a {
        margin-top: .8rem;
        padding: 1rem 3rem;
        background: #EF476F;
        font-size: 0.8rem;
        color: #fff;
        font-weight: 600;
        text-decoration: none;
        width: fit-content;
        border-radius: 2rem;
        transition-duration: 0.3s;

        &:hover {
            cursor: pointer;
            -moz-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
            -webkit-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
            box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
            animation: playful-rotation .3s linear 1;
        }
    }

    img {
        margin: 2rem auto;
        max-width: 100px;
        transition-duration: .3s;

        &:hover {
            cursor: pointer;
            filter: drop-shadow(10px 4px 2px rgba(255, 209, 102, 0.4));
        }
    }
`

const LetsTalk = () => {
    return (
        <Layout>
            <LetsTalkSection id="lets-talk">
                <h2>Let's change the world<br/>together!</h2>
                <p className='section-title'>I'm always open to new ideas, opportunities, and interactions. Anyway, I think anyone can change and improve the world :)</p>
                <img className='medium' src={ Art.happy } alt='An image of happy cat.' />
                <p>See you soon!</p>
                <a href='mailto:thisisjoeltorres@gmail.com'>Say Hello!</a>
            </LetsTalkSection>
        </Layout>
    )
}

export default LetsTalk