"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
// import { motion } from "framer-motion";
import data from "@/data.json";
import git from "@/../public/git.svg";
import html5 from "@/../public//html5.svg";
import Image from "next/image";

// 🌻Main Component
const ResumePage: React.FC = () => {
  useEffect(() => {
    const reveals = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          obs.unobserve(entry.target);
        }
      });
    });

    reveals.forEach((el) => observer.observe(el));
  }, []);

  return (
    <Section>
      <Header>
        <MainHeading>Resume</MainHeading>
        <Subheading>
          Learn more about my skills, qualifications and experiences.
        </Subheading>
      </Header>

      <Body>
        {/* Work Experience */}
        <Content>
          <ContentLeft>
            <Heading>Work Experience</Heading>
            <SubheadingBody>PRESENT & PREVIOUS JOBS</SubheadingBody>
          </ContentLeft>
          <ContentRight>
            <Wrapper>
              {data.work.map((work: any, i: number) => (
                // <motion.div
                //   key={i}
                //   initial={{ y: 100 }}
                //   whileInView={{ y: 0 }}
                //   transition={{ duration: 0.6, delay: i * 0.1 }}
                // >
                <Work key={i} className="reveal">
                  <Timeline>
                    {work.timeline.from} - {work.timeline.to}
                  </Timeline>
                  <Role>{work.role}</Role>
                  <Company>{work.company}</Company>
                  <Summary>{work.summary}</Summary>
                </Work>
                // </motion.div>
              ))}
            </Wrapper>
          </ContentRight>
        </Content>

        {/* Education */}
        <Content>
          <ContentLeft>
            <Heading>Education</Heading>
            <SubheadingBody>ACADEMIC CAREER</SubheadingBody>
          </ContentLeft>
          <ContentRight>
            <Wrapper>
              {data.education.map((edu: any, i: number) => (
                // <motion.div
                //   key={i}
                //   initial={{ opacity: 1, y: 60 }}
                //   whileInView={{ opacity: 1, y: 0 }}
                //   transition={{ duration: 0.6, delay: i * 0.1 }}
                // >
                <Education key={i} className="reveal">
                  <Degree>{edu.degree}</Degree>
                  <School>{edu.school}</School>
                  <EduTimeline>
                    {edu.timeline.from} - {edu.timeline.to}
                  </EduTimeline>
                  <Summary>{edu.summary}</Summary>
                </Education>
                // </motion.div>
              ))}
            </Wrapper>
          </ContentRight>
        </Content>

        {/* Tech Stack */}
        <Content className="reveal">
          <ContentLeft>
            <Heading>Tech Stack</Heading>
            <SubheadingBody>TOOLS & TECHNOLOGIES</SubheadingBody>
          </ContentLeft>
          <ContentRight>
            {/* <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            > */}
            <Tech>
              {[
                {
                  src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png",
                  alt: "Typescript",
                },
                {
                  src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png",
                  alt: "Javascript",
                },
                {
                  src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png",
                  alt: "ReactJs",
                },
                {
                  src: "https://raw.githubusercontent.com/github/explore/main/topics/nextjs/nextjs.png",
                  alt: "NEXTJS",
                },
                {
                  src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/redux/redux.png",
                  alt: "Redux",
                },
                {
                  src: "https://raw.githubusercontent.com/github/explore/main/topics/css/css.png",
                  alt: "CSS",
                },
                {
                  src: "https://raw.githubusercontent.com/github/explore/main/topics/tailwind/tailwind.png",
                  alt: "TAILWIND",
                },

                {
                  src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/sass/sass.png",
                  alt: "SASS",
                },
                {
                  src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png",
                  alt: "BACKEND/API",
                },
                {
                  src: "https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/postgresql/postgresql.png",
                  alt: "PostgreSQL",
                },
              ].map((tech, index) => (
                <Logo
                  key={index}
                  src={tech.src}
                  alt={tech.alt}
                  title={tech.alt}
                  width={45}
                  height={45}
                />
              ))}
              <Logo
                src={html5}
                alt="HTML5"
                title="HTML5"
                width={45}
                height={45}
              />
              <Logo src={git} alt="Git" title="Git" width={45} height={45} />
            </Tech>
            {/* </motion.div> */}
          </ContentRight>
        </Content>
      </Body>
    </Section>
  );
};

export default ResumePage;

//
// --------------------- 🌸STYLED COMPONENTS ---------------------
//

const Section = styled.section`
  width: 90%;
  overflow-y: auto;
  height: calc(var(--app-height, 100vh) - 125px);
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  margin: 0 auto 40px;
  max-width: 1400px;
  z-index: 1000;

  .reveal {
    transform: translateY(200px);
    transition: all 0.8s ease-out;
  }

  .reveal.active {
    transform: translateY(0);
  }

  @media (max-width: 1200px) {
    padding: 40px;
  }
  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`;

const Header = styled.header`
  margin-bottom: 30px;
`;

const MainHeading = styled.h1`
  color: #af3b86;
  font-family: "Merienda One", cursive;
  font-size: 3em;

  @media (max-width: 500px) {
    font-size: 2.3em;
  }
`;

const Subheading = styled.p`
  margin-top: 0;
  font-size: 1.2em;

  @media (max-width: 500px) {
    font-size: 1.1em;
  }
`;

const Body = styled.div``;

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 60px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const ContentLeft = styled.div`
  margin-right: 20px;
  width: calc(65% - 20px);
  max-width: 350px;
  /* width: 65%; */

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const ContentRight = styled.div`
  width: 65%;
  position: relative;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Heading = styled.h2`
  margin: 0;
`;

const SubheadingBody = styled.p`
  color: #777;
  font-weight: bolder;
  margin-top: 5px;
`;

const Wrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -7px;
    bottom: 0;
    left: -51px;
    width: 2px;
    background: #ccc;

    @media (max-width: 800px) {
      left: -30px;
    }
  }

  @media (max-width: 800px) {
    margin-left: 30px;
  }
`;

const Work = styled.div`
  position: relative;
  margin: 15px 0 30px;
  z-index: 10;
`;

const Timeline = styled.p`
  color: #af3b86;
  font-size: 1.1em;
  margin: 0 0 5px;
`;

const Role = styled.h3`
  font-size: 1.2em;
  color: black;
  margin: 0;
  font-weight: bold;
  text-transform: uppercase;
`;

const Company = styled.p`
  width: fit-content;
  background: #af3b8626;
  padding: 10px;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 0.9em;
  margin: 10px 0 0;
  color: #333;
`;

const Summary = styled.p`
  white-space: pre-wrap;
  line-height: 24px;
  margin-top: 10px;
  /* position: relative; */

  &::after {
    content: "";
    position: absolute;
    top: 2px;
    left: -58px;
    width: 16px;
    height: 16px;
    border-radius: 10px;
    z-index: 2;
    box-shadow: 0 0 0 8px #af3b864d;
    background: #af3b86;

    @media (max-width: 800px) {
      left: -37px;
    }
  }
`;

const Education = styled.div`
  position: relative;
  margin-bottom: 40px;
  z-index: 10;
`;

const Degree = styled.h3`
  margin: 0 0 5px;
  color: #af3b86;
  text-transform: uppercase;
  font-size: 1.3em;
  font-weight: bold;
`;

const School = styled.p`
  font-style: italic;
  margin: 0;
`;

const EduTimeline = styled.p`
  display: inline-block;
  background: #af3b8626;
  padding: 10px;
  border-radius: 5px;
  font-weight: bolder;
  font-size: 0.8em;
  margin-top: 10px;
  color: #333;
`;

const Tech = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

const Logo = styled(Image)`
  width: 45px;
  height: 45px;
  margin: 10px;
`;
