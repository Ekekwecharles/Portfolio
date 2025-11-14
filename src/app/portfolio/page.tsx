"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import styled from "styled-components";
import { motion } from "framer-motion";
import data from "@/data.json"; // adjust this path if needed
import { AboutIcon } from "@/components/Icons/icons"; // adjust import

interface Project {
  name: string;
  description: string;
  image_url: string;
  gif_url?: string;
  live_url?: string;
  github_url?: string;
}

interface DataStructure {
  projects: Record<string, Project>;
}

const typeData = data as DataStructure;

// 🌟 Main Component
const PortfolioPage = () => {
  return (
    <Section>
      <Header>
        <HeadingMain>Recent Works</HeadingMain>
        <SubHeading>Portfolio showcase of some of my work.</SubHeading>
      </Header>

      <GridContainer>
        {Object.keys(typeData.projects).map((slug, i) => {
          const project = typeData.projects[slug];
          return (
            <FadeIn key={i}>
              <Card>
                <Link href={`/portfolio/${slug}`} passHref>
                  <ImageWrapper>
                    <StyledImage
                      src={project.image_url}
                      alt={project.name}
                      width={500}
                      height={300}
                    />
                    <Description>
                      <h3>{project.name}</h3>
                      <Actions>
                        <ImageButton
                          aria-label="View details"
                          title="View details"
                        >
                          <AboutIcon width={40} height={40} />
                        </ImageButton>
                      </Actions>
                    </Description>
                  </ImageWrapper>
                </Link>
              </Card>
            </FadeIn>
          );
        })}
      </GridContainer>
    </Section>
  );
};

export default PortfolioPage;

//
// ==================== 🌸STYLED COMPONENTS ====================
//

const Section = styled.section`
  width: 90%;
  overflow-y: auto;
  height: calc(var(--app-height) - 125px);
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  margin: 0 auto 40px;
  max-width: 1400px;

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

const HeadingMain = styled.h1`
  font-family: "Merienda One", cursive;
  color: #af3b86;
  font-size: 3em;
  margin: 0;

  @media (max-width: 500px) {
    font-size: 2.3em;
  }
`;

const SubHeading = styled.p`
  margin-top: 0;
  font-size: 1.2em;

  @media (max-width: 500px) {
    font-size: 1.1em;
  }
`;

const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 0.5rem;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
  }
`;

const FadeIn = styled(motion.div).attrs(() => ({
  initial: { opacity: 0, y: 100 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, ease: "easeOut" },
}))``;

const Card = styled.div`
  position: relative;
  padding: 20px;
  /* border: 1px solid red; */
  line-height: 0;
`;

const ImageWrapper = styled.div`
  /* position: relative; */
  cursor: pointer;
  min-height: 160px;
  overflow: hidden;
  /* border-radius: 5px; */

  &:hover div {
    opacity: 1;
  }

  &::before {
    content: "";
    display: block;
    /* padding-top: 65%; */
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-radius: 3px;
  box-shadow: 0px 3px 5px rgba(0, 0, 0, 0.2);
`;

const Description = styled.div`
  opacity: 0;
  position: absolute;
  inset: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #a21d97;
  color: white;
  /* border-radius: 5px; */

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 48px;
    height: 48px;
    border: 3px solid white;
    transition: all 0.5s ease;
  }

  &::before {
    top: 35px;
    left: 35px;
    border-right: none;
    border-bottom: none;
  }

  &::after {
    bottom: 35px;
    right: 35px;
    border-left: none;
    border-top: none;
  }

  ${ImageWrapper}:hover &::before {
    top: 15px;
    left: 15px;
  }

  ${ImageWrapper}:hover &::after {
    bottom: 15px;
    right: 15px;
  }
`;

const Actions = styled.div`
  margin-top: 10px;
`;

const ImageButton = styled.button`
  border: none;
  background: transparent;
  color: white;
  cursor: pointer;
`;
