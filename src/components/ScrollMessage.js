import React from 'react';
import styled from 'styled-components';

const ScrollContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    bottom: 1rem;
    margin: 1rem auto;
    align-items: center;
    justify-content: center;
    width: fit-content;

    p {
        color: rgba(0, 0, 0, .5);
        font-weight: 600;
    }

    svg {
        animation: arrowPointer 4s linear infinite;
    }

    @keyframes arrowPointer {
        0% {
            transform: translateY(0rem);
        } 50% {
            transform: translateY(.5rem);
        } 75%, 100% {
            transform: translateY(0rem);
        }
    }
`

const ScrollMessage = () => {
    return (
        <ScrollContainer id='scroll-message'>
            <p>Scroll down</p>
            <svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" fill="#FFD166" y="0px" viewBox="0 0 28 28" enable-background="new 0 0 1000 1000" width="28" height="28"><metadata> Svg Vector Icons : http://www.onlinewebfonts.com/icon </metadata><g><path d="M14 21.386c-0.269 0 -0.54 -0.104 -0.748 -0.308L0.588 8.414c-0.412 -0.412 -0.412 -1.081 0 -1.492c0.412 -0.412 1.081 -0.412 1.492 0L14 18.838l11.917 -11.917c0.412 -0.412 1.081 -0.412 1.492 0s0.412 1.081 0 1.492L14.745 21.078C14.54 21.283 14.272 21.386 14 21.386z"/></g></svg>
        </ScrollContainer>
    )
}

export default ScrollMessage