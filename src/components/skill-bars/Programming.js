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

const Programming = ({ color }) => {
    return (
        <SkillDetails>
            <SkillItem color={color}>
                <h4 className='top'>Programming Languages</h4>
                <div class="skill-bar">
                    <span>Javascript (ES6+)</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Java</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Python</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>

                <h4>Web, Frameworks & Libraries</h4>
                <div class="skill-bar">
                    <span>HTML5</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>CSS</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>SCSS</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Tailwind CSS</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Vue.js</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Gatsby.js</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>React.js</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>

                <h4>Software & Tools</h4>
                <div class="skill-bar">
                    <span>Visual Studio Code</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Android Studio</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>IntelliJ IDEA</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Node.js</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Git</span>
                    <div class="skill-level">
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="fill dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
                <div class="skill-bar">
                    <span>Firebase</span>
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

export default Programming