import React from 'react';
import styled from 'styled-components';

const SkillItem = ({ children, color }) => {

    const SkillBar = styled.nav`
    display: flex;
    flex-direction: column;
    align-items: center;

    h4 {
        margin-top: 3rem;
        font-weight: 600;
    }

    span {
        color: ${color};
    }

    div {
        margin: 0.8rem auto;
        font-family: Montserrat, sans-serif;
        font-weight: 600;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: fit-content;

        &.skill-bar {
            margin: 1rem 0 0 0;
            width: 16rem;
            display: flex;
            flex-direction: row;
            justify-content: space-between;
        }

        &.skill-level {
            margin: 0.2rem 0;
            flex-direction: row;
        }
    
        &.dot {
            margin: 0.2rem 0.2rem;
            width: 10px;
            height: 10px;
            border-radius: 100%;
            border: 0.1rem ${color} solid;
        }
    
        &.fill {
            background: ${color};
        }
    }

    .fadeIn {
        animation: fadeIn 0.5s;
        animation-fill-mode: forwards;
    }

    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 100;
      }
    }
    `

    return (
        <SkillBar>
            {children}
        </SkillBar>
    )
}

export default SkillItem