import React from 'react';
import styled from 'styled-components';

const FooterStyle = styled.div`
    margin: 0 auto 2rem auto;

    p {
        color: #EF476F;
        font-weight: 500;
        font-size: 0.8rem;
        width: fit-content;
        line-height: 0.6rem;
        text-align: center;
        margin: 0 auto .8rem auto;
    }
`

const Footer = () => {
    return (
        <FooterStyle>
            <p>Designed &#38; Built by Joel Torres</p>
            <p>@2022</p>
        </FooterStyle>
    )
}

export default Footer