"use client";
import React, { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";
import Lottie from "lottie-react";
import { motion } from "framer-motion";
import animationData from "@/../public/images/lotties/man.json";
import { HTMLIcon, CodeBracesIcon } from "@/components/Icons/icons";

// 🌟 Main Component
const AboutPage: React.FC = () => {
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
    <AboutSection>
      <header>
        <Heading>Ekekwe Charles</Heading>
      </header>

      <Content>
        <LeftContent>
          <Lottie
            animationData={animationData}
            loop
            style={{ maxWidth: 300, height: "auto" }}
          />
        </LeftContent>

        <RightContent>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Text restricted={true} className="reveal">
              <BoldText>Who am I?</BoldText>
              <List>
                <ListItem>
                  I’m Charles, a passionate Fullstack Developer who loves
                  learning new technologies and tackling challenges that push my
                  limits. With experience in React, Next.js, and TypeScript, I
                  build fast, scalable, and user-friendly web applications.
                  Curious, driven, and zealous about growth — every project is
                  an opportunity to create something better. I also excel at
                  collaborating with teams and communicating ideas clearly to
                  ensure smooth and successful project outcomes.
                </ListItem>
              </List>
            </Text>

            <Text restricted={true} className="reveal">
              <BoldText>How do I think? (My Mindset)</BoldText>
              <List>
                <ListItem>
                  Anyone can fix a problem or develop a solution but my 3+ years
                  of experience as a &quot;Software Engineer&quot; has taught me
                  beyond this — don’t just build a solution, but design the BEST
                  one: futuristic, scalable, reliable, low-maintenance, and open
                  to interoperability. I bring creative and innovative ideas to
                  life through unique software solutions.
                </ListItem>
              </List>
            </Text>

            <Text restricted={true} className="reveal">
              <BoldText>Where do I work?</BoldText>
              <List>
                <ListItem>Currently job hunting.</ListItem>
              </List>
            </Text>

            <div className="reveal">
              <BoldText>What I do?</BoldText>
              <Services>
                <ServiceLink
                  href="https://drive.google.com/file/d/1n6-sjfaIb2FpyEg6ZPBy3QnXpaWbXSKM/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HTMLIcon />
                  <span>Full Stack Development</span>
                </ServiceLink>

                <ServiceLink
                  href="https://drive.google.com/file/d/1EeF-u1ICo8pENtl1RVF0ExHUN8gKK01B/view?usp=drive_link"
                  target="_blank"
                  rel="noreferrer"
                >
                  <CodeBracesIcon />
                  <span>API Development</span>
                </ServiceLink>

                {/* <ServiceLink
                  href="https://www.udacity.com/course/cloud-developer-nanodegree--nd9990"
                  target="_blank"
                  rel="noreferrer"
                >
                  <WebIcon />
                  <span>Cloud Development</span>
                </ServiceLink> */}
              </Services>
            </div>

            <Text restricted={true} className="reveal">
              I’m super excited you’re here. Feel free to{" "}
              <StyledLink href="/contact">
                <b>reach out to me</b>
              </StyledLink>{" "}
              with any project ideas or just to say hello!
            </Text>
          </motion.div>
        </RightContent>
      </Content>
    </AboutSection>
  );
};

export default AboutPage;

//
// --------------------- 🌸STYLED COMPONENTS ---------------------
//

const AboutSection = styled.section`
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

  @media (max-width: 1200px) {
    padding: 40px;
  }

  @media (max-width: 500px) {
    padding: 40px 20px;
  }
`;

const Heading = styled.h1`
  margin: 0;
  color: #af3b86;
  font-family: "Merienda One", cursive;

  font-size: 2.8em;

  @media (max-width: 500px) {
    font-size: 2.3em;
  }
`;

const Content = styled.div`
  display: flex;
  margin-bottom: 30px;

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const LeftContent = styled.div`
  width: 30%;
  position: relative;
  margin-right: 20px;

  @media (max-width: 800px) {
    width: calc(100% - 20px);
  }
`;

const RightContent = styled.div`
  width: 70%;

  .reveal {
    opacity: 0;
    transform: translateY(40px);
    transition: all 0.8s ease-out;
  }

  .reveal.active {
    opacity: 1;
    transform: translateY(0);
  }

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Text = styled.div<{ restricted?: boolean }>`
  line-height: 24px;
  margin-top: 40px;
  margin-bottom: 40px;
  max-width: ${({ restricted }) => (restricted ? "500px" : "none")};
`;

const BoldText = styled.strong`
  font-weight: bold;
`;

const StyledLink = styled(Link)`
  color: #af3b86;
  &:hover,
  &:active {
    color: #af3b86;
  }
`;

const List = styled.ul`
  padding-left: 30px;
`;

const ListItem = styled.li`
  padding-left: 10px;
  margin: 5px 0;
  position: relative;
  list-style-type: none;

  &::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -16px;
    width: 15px;
    height: 15px;
    background-size: contain;
    background-image: url("/check2.svg");
  }
`;

const Services = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 20px;
  margin-bottom: 50px;
  gap: 20px;

  @media (max-width: 500px) {
    justify-content: center;
  }
`;

const ServiceLink = styled.a`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  max-width: 150px;
  text-align: center;
  box-shadow: 0 5px 17px 2px rgba(0, 0, 0, 0.15);
  padding: 10px 20px;
  border-radius: 4px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #af3b86;
    color: white;
  }

  svg {
    margin-bottom: 10px;
    color: #af3b86;
    transition: color 0.3s ease;
  }

  &:hover svg {
    color: white;
  }
`;
