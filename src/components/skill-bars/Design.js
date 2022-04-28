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

const Design = ({ color }) => {

    React.useEffect(() => {
        console.log("Update")
        console.log("Current Design: " + color)
    }, [color])

    return (
        <SkillDetails>
            <SkillItem color={color}>
            <h4 className='top'>Creative Software</h4>
                <div class="skill-bar">
                    <span>Adobe Photoshop CC</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Adobe Illustrator CC</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Figma</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Adobe XD</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
            </SkillItem>
        </SkillDetails>
    )
}

export default Design