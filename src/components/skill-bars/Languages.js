import React from 'react';
import styled from 'styled-components';
import SkillItem from '../SkillItem';
import PropTypes from 'prop-types';

const SkillDetails = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .top {
        margin-top: 1rem;
    }
`

const Languages = ({ color }) => {

    React.useEffect(() => {
        console.log("Update")
        console.log("Current Languages: " + color)
    }, [color])

    return (
        <SkillDetails>
            <SkillItem color={color}>
                <h4 className='top'>Languages I Speak</h4>
                <div class="skill-bar">
                    <span>English</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Spanish</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Japanese</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Italian</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
            </SkillItem>
        </SkillDetails>
    )
}

export default Languages