import React from 'react';
import styled from 'styled-components';
import Art from '../Art';
import Illustrations from '../sections/Illustrations';

const IllustrationStyles = styled.div`
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
        grid-template-columns: 250px 250px;
        grid-template-rows: auto;
        grid-column-gap: 3rem;
        grid-row-gap: 1rem;
        justify-items: center;
        align-items: end;

        * { box-sizing: border-box; }
    }

    img {
        margin: 1rem;
        border-radius: 16px;
        max-width: 250px;
        transition-duration: .3s;

        &:hover {
            cursor: pointer;
            filter: drop-shadow(6px 6px 0px rgba(255, 209, 102, 1));
        }
    }
`

const Vector = () => {
    return (
        <IllustrationStyles className='illustration-container'>
            <p className='section-title'>I see illustrating as a way of expressing feelings and ideas through colors, landscapes and characters<br /><br />Here are some of my favorite works:</p>
            <div className='grid-view-illustrations'>
                <a href='https://twitter.com/JoelTorres_7/status/1427272841498611716?s=20&t=WDatJEnLZCClY11OzTldtA' target="_blank" rel="noopener noreferrer">
                    <img loading='lazy' src={Art.beesClouds} alt='Illustration of a girl resting on a field appreciating bees.' />
                </a>
                <a href='https://twitter.com/JoelTorres_7/status/1429451678563151889?s=20&t=WDatJEnLZCClY11OzTldtA' target="_blank" rel="noopener noreferrer">
                    <img loading='lazy' src={Art.rainyBus} alt='Illustration of a little girl petting a cat on a rainy bus stop.' />
                </a>
                <a href='https://twitter.com/JoelTorres_7/status/1431971135961407488?s=20&t=WDatJEnLZCClY11OzTldtA' target="_blank" rel="noopener noreferrer">
                    <img loading='lazy' src={Art.shiningGirl} alt='Illustration of a girl holding a star and floating in space.' />
                </a>
                <a href='https://twitter.com/JoelTorres_7/status/1427994339796570112?s=20&t=WDatJEnLZCClY11OzTldtA' target="_blank" rel="noopener noreferrer">
                    <img loading='lazy' src={Art.wizard} alt='Illustration of a wizard smiling.' />
                </a>
            </div>
        </IllustrationStyles>
    )
}

export default Vector