import {useState} from 'react'
import HeroBgAnimation from '../HeroBgAnimation'
import { HeroContainer, HeroBg, HeroLeftContainer, Img, HeroRightContainer, HeroInnerContainer, TextLoop,
     Title, Span, SubTitle,Wrapper,Bodys, ResumeButton } from './HeroStyle'
import HeroImg from '../../images/girls_2.png'
import Typewriter from 'typewriter-effect';
import { Bio } from '../../data/constants';
import Skills from '../Skills';
import Experience from '../Experience';
import Education from '../Education';
import Contact from '../Contact'
import Projects from '../Projects';
import Footer from '../Footer';
import ProjectDetails from "../ProjectDetails";


const HeroSection = () => {
  const [openModal, setOpenModal] = useState({ state: false, project: null });

    
    return (
        <div id="about">
            <HeroContainer>
                <HeroBg>
                    <HeroBgAnimation />
                </HeroBg>
                <HeroInnerContainer >
                    <HeroLeftContainer id="Left">
                        <TextLoop>
                        <Title style={{color:'#cb1d1d',fontSize:'30px'}}>   
                        <Typewriter options={{
                                strings: Bio.name,
                                autoStart: true,
                                loop: true,
                            }} />
                        </Title>
                        </TextLoop>
                        <TextLoop>
                            I am a
                            <Span>
                                <Typewriter
                                    options={{
                                        strings: Bio.roles,
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                            </Span>
                        </TextLoop>
                        <SubTitle>{Bio.description}</SubTitle>
                        <ResumeButton href={Bio.resume} target='display'>Check Resume</ResumeButton>
                    </HeroLeftContainer>

                    <HeroRightContainer id="Right">

                        <Img src={HeroImg} alt="hero-image" />
                    </HeroRightContainer>
                </HeroInnerContainer>
            </HeroContainer>
           <Bodys>
          <Wrapper>
            <Skills />
            <Experience />
          </Wrapper>
          <Projects openModal={openModal} setOpenModal={setOpenModal} />
          <Wrapper>
            <Education />
            <Contact />
          </Wrapper>
          <Footer />
          {openModal.state &&
            <ProjectDetails openModal={openModal} setOpenModal={setOpenModal} />
          }
        </Bodys>

        </div>
    )
}

export default HeroSection