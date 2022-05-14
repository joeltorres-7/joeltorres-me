import * as React from 'react'
import Layout from '../Layout';
import { Link } from "gatsby";
import styled from 'styled-components';
import GengoPreview from '../../images/previews/gengo-workflow.mp4';
import GengoLogo from '../../images/elements/gengo-logo.webp';
import SenaPreview from '../../images/previews/sena-workflow.mp4';
import SenaLogo from '../../images/elements/sena-responsive-logo.svg';
import SenaPoster from '../../images/elements/sena-responsive-poster.webp';

// Styles

const SectionProjects = styled.section`
    opacity: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0;
    min-height: 100vh;
    margin-top: 2rem;

    h2 {
        display: inline-flex;
        margin-top: 1rem;
        margin-bottom: 3rem;
        color: #EF476F;
    }

    p {
        color: currentColor;
        text-align: center;
        max-width: 30vw;
    }

    img {
        margin-top: 2rem;
        width: 200px;
        padding: 1rem;
    }

    .left {
        justify-content: flex-start;
    }

    @keyframes portraitBorder {
        0% {
            padding: 1rem;
        } 50% {
            padding: .5rem;
        } 100% {
            padding: 1rem;
        }
    }
`;

const FeaturedProject = styled.div`
    opacity: 0;
    display: flex;
    flex-direction: row;
    margin: 5rem 0;
`

const Device = styled.div`
    text-align:center;
    width: fit-content;
    position: relative;
    margin: 0 auto;
    border: 10px #111 solid;
    border-top-width: 16px;
    border-bottom-width: 14px;
    border-radius: 16px;
    box-shadow: inset 0 0 0 5px #111;

    &::before {
        content: '';
        display: block;
        width: 8px;
        height: 8px;
        position: absolute;
        top: 0px;
        left: 50%;
        transform: translate(-50%, -50%);
        background: #333;
        border-radius: 10px;
        border: 6px #111 solid;
    }

    .notch::before {
        width: 20px;
        height: 10px;
        margin: 0 auto;
        background-color: #111;
        border-bottom-left-radius: 2.334vh;
        border-bottom-right-radius: 2.334vh;
    }

    .preview {
        object-fit: fill;
    }

    &:hover {
        animation: playful .3s linear 1;
        cursor: pointer;
    }

    @keyframes playful {
        0% {
		transform: rotate(0deg);
	    }
	    25% {
	    	transform: rotate(1deg);
	    }
	    75% {
	    	transform: rotate(-1deg);
	    }
	    100% {
	    	transform: rotate(0deg);
	    }
    }
`

const Description = styled.div`
    display: flex;
    flex-direction: column;

    img, p, a {
        margin-left: 3rem;
    }

    p {
        background-color: rgba(255, 255, 255, .8);  
    backdrop-filter: blur(1rem);
    -webkit-backdrop-filter: blur(1rem);
        box-shadow: 3px 5px 8px rgba(0,0,0,0.05);
        font-size: 0.9rem;
        color: #EF476F;
        padding: 1.8rem;
        min-width: 30vw;
        width: fit-content;
        text-align: left;
        line-height: 1.3rem;
        border-radius: 16px;
        margin-top: 0;
    }

    a {
        margin-top: 1rem;
        padding: 1rem 3rem;
        background: #EF476F;
        font-size: 0.8rem;
        color: #fff;
        font-weight: 600;
        width: fit-content;
        border-radius: 2rem;
        transition-duration: 0.3s;
        text-decoration: none;

        &:hover {
            cursor: pointer;
            -moz-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
            -webkit-box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
            box-shadow: 2px 4px 10px rgba(239, 71, 111, 0.6);
            animation: playful-rotation .3s linear 1;
        }
    }

    .tags {
        width: fit-content;
        display: flex;
        flex-direction: row;
        margin: 1rem 0 .5rem 3rem;

        span {
            font-size: 0.8rem;
            width: fit-content;
            color: #EF476F;
            margin-left: 1rem;
            margin-right: 1rem;
        }
    }

    &.right {
        img, p, a {
            margin-left: 0rem;
            margin-right: 3rem;
        }

        span, p {
            color: #118AB2;
        }

        img {
            margin-left: 2rem;
        }

        a {
            align-self: flex-end;
            background: #118AB2;

            &:hover {
            cursor: pointer;
            -moz-box-shadow: 2px 4px 10px rgba(17, 138, 178, 0.6);
            -webkit-box-shadow: 2px 4px 10px rgba(17, 138, 178, 0.6);
            box-shadow: 2px 4px 10px rgba(17, 138, 178, 0.6);
            animation: playful-rotation .3s linear 1;
        }
        }

        .tags {
            margin: 1rem 0px .5rem 0rem;
        }
    }

    @keyframes playful-rotation {
        0% {
		transform: rotate(0deg);
	    }
	    25% {
	    	transform: rotate(3deg);
	    }
	    75% {
	    	transform: rotate(-3deg);
	    }
	    100% {
	    	transform: rotate(0deg);
	    }
    }
`;

const Projects = () => {

    // OnScroll Animations

    const domRef = React.useRef();
    const domRefGengo = React.useRef();
    const domRefSena = React.useRef();
    const [isVisible, setVisible] = React.useState(false);
    const [isGengoVisible, setGengoVisible] = React.useState(false);
    const [isSenaVisible, setSenaVisible] = React.useState(false);

    React.useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            // In your case there's only one element to observe:     
            if (entries[0].isIntersecting) {
            
              // Not possible to set it back to false like this:

                setVisible(true);
                observer.unobserve(domRef.current);
        
            }
          }, {rootMargin: '0%'});

          const observerGengo = new IntersectionObserver(entries => {
            // In your case there's only one element to observe:     
            if (entries[0].isIntersecting) {
            
              // Not possible to set it back to false like this:
            
                setGengoVisible(true)
                observer.unobserve(domRefGengo.current);
        
            }
          }, {rootMargin: '0%'});

          const observerSena = new IntersectionObserver(entries => {
            // In your case there's only one element to observe:     
            if (entries[0].isIntersecting) {
            
              // Not possible to set it back to false like this:

                setSenaVisible(true);
                observer.unobserve(domRefSena.current);
        
            }
          }, {rootMargin: '0%'});
          
          observer.observe(domRef.current);
          observerGengo.observe(domRefGengo.current);
          observerSena.observe(domRefSena.current);
          
          return () => {
            observer.unobserve(domRef.current)
            observer.unobserve(domRefGengo.current)
            observer.unobserve(domRefSena.current)
          };
    })

    return (
        <Layout>
            <SectionProjects id="projects" ref={ domRef } className={ isVisible ? ' fade-in-top' : '' }>
                <h2>Projects</h2>
                <p className='section-title'>The majority of my projects start with the vision of helping someone reach a goal or learn a new skill.<br/><br/>Here are some of them:</p>

                <FeaturedProject id='featured-gengo' ref={ domRefGengo } className={ isGengoVisible ? ' fade-in-right' : '' }>
                    <Device className='devices'>
                        <div className='notch'></div>
                        <video loop muted autoplay="autoplay" width="200" className='preview' disablePictureInPicture controlsList="nodownload">
                            <source src={GengoPreview}  type="video/mp4"/>
                        </video>
                    </Device>
                    <Description className='project-description'>
                        <img loading='lazy' src={GengoLogo} alt='Logo for Gengo Project.' />
                        <p className='project-text'>Learning a language is hard. But, it doesn't have to be that way.<br/><br/>Gengo is a project to show anyone in the world, no matter their background or age, can learn any language and reach fluency in 4 months.</p>
                        <div className='tags'>
                            <span>Android</span>
                            <span>Java</span>
                            <span>UI/UX</span>
                            <span>Project Management</span>
                        </div>
                        <Link to="/gengo-project/" className="project-button" target="_blank" rel="noopener noreferrer">More about Gengo</Link>
                    </Description>
                </FeaturedProject>

                <FeaturedProject id='featured-sena' ref={ domRefSena } className={ isSenaVisible ? ' fade-in-left' : '' }>
                    <Description className='right project-description'>
                        <img loading='lazy' src={SenaLogo} alt='Logo for Sena Responsive Redesign project.' />
                        <p className='project-text'>As an opportunity to improve the design, responsiveness and accessibility from SENA Territorium, a Colombian web platform used for educational purposes, I gave my first steps in Web Design & Development through this project.</p>
                        <div className='tags'>
                            <span>HTML5</span>
                            <span>SCSS</span>
                            <span>JavaScript</span>
                            <span>Responsive Design</span>
                        </div>
                        <a className="project-button" href='https://www.behance.net/gallery/130902295/SENA-Territorium-Minimal-Redesign' target="_blank" rel="noopener noreferrer">See on Behance</a>
                    </Description>
                    <Device className='devices'>
                        <div className='notch'></div>
                        <video loop muted width="200" autoplay="autoplay" className='preview' poster={SenaPoster} controlsList="nodownload">
                            <source src={SenaPreview}  type="video/mp4"/>
                        </video>
                    </Device>
                </FeaturedProject>

            </SectionProjects>
        </Layout>
    )
}

export default Projects