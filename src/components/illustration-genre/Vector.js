import React from 'react';
import styled from 'styled-components';
import Art from '../Art';

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

const Vector = () => {
    return (
        <Vectors className='illustration-container'>
            <p>So far, I have made a lot of vector illustrations for my mobile app, <b>Gengo!</b><br /><br />Here are some of them:</p>
            <div className='grid-view-vectors'>
                <img src={Art.badges} alt='' />
                <img src={Art.worldwide} alt='' />
                <img src={Art.heart} alt='' />
                <img className='big' src={Art.email} alt='' />
                <img className='small' src={Art.workout} alt='' />
                <img className='medium' src={Art.happy} alt='' />
                <img className='medium' src={Art.knowledge} alt='' />
                <img className='really-big' src={Art.confused} alt='' />
                <img className='small' src={Art.languages} alt='' />
            </div>
        </Vectors>
    )
}

export default Vector