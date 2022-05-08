import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import anime from 'animejs';

const SplashLayout = styled.div`
    width: 100vw;
    height: 100vh;
    background: #fff;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 50;
    top: 0;
    left: 0;
    transition: 1s;

    #splash-logo {
        fill: #fff;
        margin: auto;
        transition-duration: 1s;
        animation: rainbow 4s linear infinite;
        -moz-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
        -webkit-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
        box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
        opacity: 0;
    }

    .fade-out {
        opacity: 0;
        display: none;
        transition: ease-in-out;
    }

    @keyframes rainbow {
        0% {
            fill: #EF476F;
        } 25% {
            fill: #FFD166;
        } 50% {
            fill: #118AB2;
        } 75% {
            fill: #06D6A0;
        } 100% {
            fill: #EF476F;
        }
    }
`

const Splash = () => {

    const [isMounted, setIsMounted] = useState(false);

    const finishLoading = () => {
        setIsMounted(true)
        document.getElementById('splash-container').style.display = 'none';
    }

    const animate = () => {
        const loader = anime.timeline({
            complete: () => finishLoading(),
        });

        loader
            .add({
                targets: '#splash-logo',
                opacity: 0,
                duration: 200,
            }).add({
                targets: '#splash-logo',
                opacity: 100,
                duration: 5000,
            }).add({
                targets: '#splash-logo',
                opacity: 0,
                duration: 200,
            }).add({
                targets: '#splash-container',
                opacity: 0,
                delay: 500,
                duration: 200,
            }).add({
                targets: '#splash-container',
                display: 'none',
                delay: 700,
                duration: 0,
            })
    };

    useEffect(() => {
        const timeout = setTimeout(() => setIsMounted(true), 10);
        animate();
        return () => clearTimeout(timeout);
    }, []);

    return (
        <SplashLayout id='splash-container'>
            <svg alt='Personal logo that looks like PI symbol.' id="nav-logo" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 38 37.998" width="40" height="39.998"><path d="M0 0v37.998h38V0Zm34.368 13.191h-6.126V28.738H22.575V13.191h-4.343v8.157q0 3.922 -1.975 5.854t-5.754 1.931q-2.203 0 -3.993 -0.758a7.608 7.608 0 0 1 -2.964 -2.189l3.091 -3.665q0.802 1.031 1.661 1.56a3.38 3.38 0 0 0 1.802 0.532q2.518 0 2.52 -2.92v-8.614H5.692v-4.381h28.676Z" fill="none" /><path id='splash-logo' d="M34.368 8.697v4.494h-6.126V28.738H22.575V13.191h-4.343v8.157q0 3.922 -1.975 5.854t-5.754 1.931q-2.203 0 -3.993 -0.758a7.608 7.608 0 0 1 -2.964 -2.189l3.091 -3.665q0.802 1.031 1.661 1.56a3.38 3.38 0 0 0 1.802 0.532q2.518 0 2.52 -2.92v-8.614H5.692v-4.381Z" fill="#073b4c" /></svg>
        </SplashLayout>
    )
}

export default Splash