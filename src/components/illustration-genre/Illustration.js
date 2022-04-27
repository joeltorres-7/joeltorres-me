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
        <IllustrationStyles>
            <p>I see illustrating as a way of expressing feelings and ideas through colors, landscapes and characters<br /><br />Here are some of my favorite works:</p>
            <div className='grid-view'>
                <img src={Art.beesClouds} alt='' />
                <img src={Art.rainyBus} alt='' />
                <img src={Art.shiningGirl} alt='' />
                <img src={Art.wizard} alt='' />
            </div>
        </IllustrationStyles>
    )
}

export default Vector