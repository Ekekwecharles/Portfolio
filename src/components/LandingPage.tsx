"use client";

import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  EmailIcon,
  GithubIcon,
  LinkedinIcon,
  ResumeIcon,
  TwitterIcon,
} from "@/components/Icons/icons";
import data from "@/data.json";
import { usePathname } from "next/navigation";

// Define navigation links
const navLinks = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Resume", path: "/resume" },
  { label: "Portfolio", path: "/portfolio" },
  { label: "Contact", path: "/contact" },
];

// 🍀MAIN COMPONENT
const LandingPage: React.FC = () => {
  const pathname = usePathname();
  return (
    <LandingPageWrapper>
      <LandingContent>
        <motion.section
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <IntroSection>
            <Name>Ekekwe Charles</Name>

            <Typewriter
              options={{
                strings: [
                  "Fullstack Engineer.",
                  "React, Next.js, TypeScript & Backend APIs.",
                ],
                autoStart: true,
                loop: true,
                wrapperClassName: "landing-page__role",
                cursorClassName: "landing-page__cursor",
              }}
            />
          </IntroSection>

          <Nav>
            <NavList>
              {navLinks.map(({ label, path }) => (
                <NavItem key={path}>
                  <StyledLink
                    href={path}
                    {...(pathname === path ? { "aria-current": "page" } : {})}
                  >
                    {label}
                  </StyledLink>
                </NavItem>
              ))}
            </NavList>
          </Nav>

          <SocialList>
            <SocialItem>
              <a
                href={data.social.github}
                target="_blank"
                rel="noreferrer"
                aria-label="Github"
              >
                <GithubIcon className="social__icon" />
              </a>
            </SocialItem>

            <SocialItem>
              <a
                href={data.social.linkedIn}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <LinkedinIcon width={27} className="social__icon" />
              </a>
            </SocialItem>

            <SocialItem>
              <a
                href={`mailto:${data.social.email}`}
                target="_blank"
                rel="noreferrer"
                aria-label="Email"
              >
                <EmailIcon className="social__icon" />
              </a>
            </SocialItem>

            <SocialItem>
              <a
                href={data.social.twitter}
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <TwitterIcon className="social__icon" />
              </a>
            </SocialItem>

            <SocialItem>
              <a
                href="/public/latestcv2.pdf"
                target="_blank"
                rel="noreferrer"
                aria-label="Resume"
              >
                <ResumeIcon className="social__icon" />
              </a>
            </SocialItem>
          </SocialList>
        </motion.section>
      </LandingContent>
    </LandingPageWrapper>
  );
};

export default LandingPage;

//
// --------------------- 🌸 STYLED COMPONENTS ---------------------
//

const LandingPageWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: calc(var(--app-height, 100vh) - 125px);
`;

const LandingContent = styled.div`
  width: 68%;
  color: white;
  font-family: "Karla", sans-serif;

  @media (max-width: 750px) {
    width: 80%;
  }

  @media (max-width: 500px) {
    width: 90%;
  }
`;

const IntroSection = styled.section`
  text-align: left;

  .landing-page__role,
  .landing-page__cursor {
    font-size: 1.9em;

    @media (max-width: 500px) {
      font-size: 1.5em;
    }
  }
`;

const Name = styled.h1`
  font-family: "Cantora One", sans-serif;
  font-family: "Merienda One", cursive;
  font-size: 4em;
  margin-left: -2px;
  margin-bottom: 20px;

  @media (max-width: 750px) {
    font-size: 2.4em;
    margin-bottom: 10px;
  }
`;

const Nav = styled.nav`
  margin-top: 20px;

  @media (max-width: 750px) {
    display: none;
  }
`;

const NavList = styled.ul`
  display: flex;
`;

const NavItem = styled.li`
  margin: 15px;
  margin-left: 0;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
`;

const StyledLink = styled(Link)`
  color: white;
  position: relative;
  font-size: 1.1em;
  text-decoration: none;

  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: -4px;
    width: 70%;
    height: 0.2em;
    border-radius: 5px;
    pointer-events: none;
    transform: translate3d(-100%, 0, 0) translate3d(-1px, 0, 0);
    transition: transform 0.7s cubic-bezier(0.7, 0, 0.3, 1);
  }

  &:hover::after,
  &[aria-current="page"]::after {
    transform: translate3d(0, 0, 0);
    background: #af3b86;
  }
`;

const SocialList = styled.ul`
  margin-top: 25px;
  display: flex;
`;

const SocialItem = styled.li`
  margin-right: 30px;
  display: flex;

  .social__icon:hover {
    fill: #af3b86;
  }
`;
