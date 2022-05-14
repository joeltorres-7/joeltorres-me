import * as React from 'react'
import Layout from '../Layout';
import styled from 'styled-components';
import Vector from '../illustration-genre/Vector';
import Illustration from '../illustration-genre/Illustration';

const SectionIllustrations = styled.div`
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-height: 100vh;
    margin: 3rem auto;

    h2 {
        display: inline-flex;
        margin-top: 1rem;
        margin-bottom: 3rem;
        color: #EF476F;
    }

    p {
        color: currentColor;
        text-align: center;
        max-width: 60vh;
    }
`

const IllustratorContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Illustrations = () => {

    const countArt = React.useRef(0);
    const artArray = [<Vector />, <Illustration />];
    const artTitleArray = ["Vectors", "Illustrations"];
    const artColorArray = ["#FFD166", "#EF476F"];
    const [currentArtTitle, setCurrentArtTitle] = React.useState('Vectors');
    const [artColor, setArtColor] = React.useState('#FFD166');
    const [currentArt, setCurrentArt] = React.useState(<Vector />);

    const previousArt = () => {
        countArt.current  = countArt.current != 0 ? countArt.current - 1 : 1;
        setCurrentArt(artArray[countArt.current]);
        setCurrentArtTitle(artTitleArray[countArt.current]);
        setArtColor(artColorArray[countArt.current]);
    }

    const nextArt = () => {
        countArt.current  = countArt.current < 1 ? countArt.current + 1 : 0;
        setCurrentArt(artArray[countArt.current]);
        setCurrentArtTitle(artTitleArray[countArt.current]);
        setArtColor(artColorArray[countArt.current]);
    }

    const IllustratorGuide = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    font-weight: 600;

    h4 {
        color: #fff;
        font-weight: 600;
        background: ${artColor};
        padding: .7rem 1.7rem;
        border-radius: 14px;
        transition-duration: 0.2s;

        &:hover {
            cursor: pointer;
        }

        &:active {
            transform: scale(1.05);
        }
    }

    svg {
        margin: 1rem;
        padding: 1rem;
        transition-duration: .3s;
        fill: ${artColor};

        &:hover {
            cursor: pointer;
        }

        &.back-skill:hover {
            transform: translateX(-.2rem);
        }

        &.next-skill:hover {
            transform: translateX(.2rem);
        }
    }
`

    // OnScroll Animations

    const domRef = React.useRef();
    const [isVisible, setVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // In your case there's only one element to observe:     
            if (entries[0].isIntersecting) {
            
              // Not possible to set it back to false like this:

                setVisible(true);
                observer.unobserve(domRef.current);
        
            }
          }, {rootMargin: '0%'});

          observer.observe(domRef.current);
          
          return () => {
            observer.unobserve(domRef.current)
          };
    })

    return (
        <Layout>
            <SectionIllustrations id="illustrations" ref={ domRef } className={ isVisible ? ' fade-in-top' : '' }>
                <h2>Illustrations</h2>
                <p className='section-title'>The majority of my projects start with the vision of helping someone reach a goal or learn a new skill.<br/><br/>Here are some of them:</p>

                <IllustratorContainer>
                    <IllustratorGuide>
                        <svg onClick={previousArt} className="back-skill" viewBox="-100.9 99.1 61.9 105.9" fill="#EF476F" width="12px" margin-right="4px"><path d="M-98.2 158.8l43.5 43.5c1.7 1.7 4 2.7 6.5 2.7s4.8-1 6.5-2.7c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.7-6.5l-37.2-37.2 37.2-37.2c1.7-1.7 2.7-4 2.7-6.5s-1-4.8-2.6-6.5c-1.8-1.9-4.2-2.8-6.6-2.8-2.3 0-4.6.9-6.5 2.6-11.5 11.4-41.2 41-43.3 43l-.2.2c-3.6 3.6-3.6 10.3 0 13.9z"></path></svg>
                        <h4 id='artset-title'>{currentArtTitle}</h4>
                        <svg onClick={nextArt} className="next-skill" viewBox="-100.9 99.1 61.9 105.9" fill="#EF476F" width="12px" margin-left="4px"><path d="M-41.7 145.3l-43.5-43.5c-1.7-1.7-4-2.7-6.5-2.7s-4.8 1-6.5 2.7c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.7 6.5L-61 152l-37.2 37.2c-1.7 1.7-2.7 4-2.7 6.5s1 4.8 2.6 6.5c1.8 1.9 4.2 2.8 6.6 2.8 2.3 0 4.6-.9 6.5-2.6 11.5-11.4 41.2-41 43.3-43l.2-.2c3.6-3.6 3.6-10.4 0-13.9z"></path></svg>
                    </IllustratorGuide>

                    {currentArt}
                </IllustratorContainer>
            </SectionIllustrations>
        </Layout>
    )
}

export default Illustrations