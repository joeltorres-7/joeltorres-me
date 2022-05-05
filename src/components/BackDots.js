import * as React from 'react'
import styledComponents from 'styled-components'
import styled from 'styled-components'

const DotDefault = styled.div`
    div {
        z-index: -1;
        animation: dot-anim 8s linear infinite;
        
        &.pink-dot {
            height: 3.5rem;
            width: 3.5rem;
            position: fixed;
            bottom: 2rem;
            right: 3rem;
            border-radius: 100%;
            background: #EF476F;
        }

        &.blue-dot {
            height: 6rem;
            width: 6rem;
            position: fixed;
            top: 12rem;
            right: 14rem;
            border-radius: 100%;
            background: #118AB2;
        }

        &.yellow-dot {
            height: 1rem;
            width: 1rem;
            position: fixed;
            top: 5rem;
            right: 3rem;
            border-radius: 100%;
            background: #FFD166;
        }

        &.pink-dot-rev {
            height: 1.5rem;
            width: 1.5rem;
            position: fixed;
            bottom: 6rem;
            left: 8rem;
            border-radius: 100%;
            background: #EF476F;
        }

        &.blue-dot-rev {
            height: 4rem;
            width: 4rem;
            position: fixed;
            top: 6rem;
            left: 4rem;
            border-radius: 100%;
            background: #118AB2;
        }

        &.yellow-dot-rev {
            height: 3rem;
            width: 3rem;
            position: fixed;
            bottom: 15rem;
            left: 12rem;
            border-radius: 100%;
            background: #FFD166;
        }

        @keyframes dot-anim {
	        0% {
	        	transform: scale(1);
	        }
	        50% {
	        	transform: scale(1.5);
	        }
	        100% {
	        	transform: scale(1);
	        }
        }
    }
`

const BackDots = () => {
    return (
        <DotDefault id='dot-box'>
            <div className='pink-dot' />
            <div className='blue-dot' />
            <div className='yellow-dot' />
            <div className='pink-dot-rev' />
            <div className='blue-dot-rev' />
            <div className='yellow-dot-rev' />
        </DotDefault>
    )
}

export default BackDots;