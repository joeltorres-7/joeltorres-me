import React from 'react';
import styled from 'styled-components';
import Art from '../Art';
import { StaticImage } from "gatsby-plugin-image";

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
            <p className='section-title'>So far, I have made a lot of vector illustrations for my mobile app, <b>Gengo!</b><br /><br />Here are some of them:</p>
            <div className='grid-view-vectors'>
                <img loading='lazy' src={Art.badges} alt='A cat holding a star.' />
                <img loading='lazy' src={Art.worldwide} alt='A cat behind an earth globe.' />
                <img loading='lazy' src={Art.heart} alt='A cat holding a heart.' />
                <img loading='lazy' className='big' src={Art.email} alt='A cat holding a letter.' />
                <img loading='lazy' className='small' src={Art.workout} alt='A cat holding two dumbbells' />
                <img loading='lazy' className='medium' src={Art.happy} alt='A cat smiling.' />
                <img loading='lazy' className='medium' src={Art.knowledge} alt='A cat' />
                <img loading='lazy' className='really-big' src={Art.confused} alt='A cat head with two interrogation signs.' />
                <img loading='lazy' className='small' src={Art.languages} alt='A cat head with two languages signs.' />
            </div>
        </Vectors>
    )
}

export default Vector