"use client";

import styled from "styled-components";
import Link from "next/link";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import data from "@/data.json";
// import Image from "next/image";
import { GithubIcon, LiveIcon } from "@/components/Icons/icons";

// ---------- Types ----------
interface Project {
  name: string;
  description: string;
  image_url: string;
  gif_url?: string;
  device_image_url?: string;
  device_type?: "mobile" | "desktop";
  live_url: string;
  github_url: string;
}

interface DataStructure {
  projects: Record<string, Project>;
}

// typed data
const typedData = data as DataStructure;

// 🌤️ Main Component
export default function PortfolioItemPage() {
  const params = useParams();
  const slug = params?.slug as string;

  const project = typedData.projects[slug];
  console.log("Project", project);
  const isMobile = project?.device_type === "mobile";

  if (!project) {
    return (
      <NotFoundWrapper>
        <h2>Project Not Found</h2>
        <Link href="/portfolio">Go Back</Link>
      </NotFoundWrapper>
    );
  }

  return (
    <Wrapper>
      <Header>
        <Link href="/portfolio" className="link">
          Portfolio
        </Link>
        <span className="separator">{">"}</span>
        <span className="path">{project.name}</span>
      </Header>

      <Body>
        <ImageWrapper $isMobile={isMobile}>
          <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <a href={project.github_url} target="_blank">
              <DeviceWrapper
                className="device"
                data-device={isMobile ? "iPhone6" : "Macbook2015"}
                data-orientation="portrait"
                data-color={isMobile ? "white" : "gold"}
              >
                <DeviceScreen
                  className="screen"
                  style={{
                    backgroundImage: `url(${
                      project.gif_url ||
                      project.device_image_url ||
                      project.image_url
                    })`,
                  }}
                />
              </DeviceWrapper>
            </a>
          </motion.div>
        </ImageWrapper>

        <Content>
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <h2>{project.name}</h2>

            <Summary
              dangerouslySetInnerHTML={{ __html: project.description }}
            />

            <LinkWrapper>
              <OutboundLink
                href={project.github_url}
                target="_blank"
                rel="noopener noreferrer"
                className="github"
              >
                <GithubIcon width={20} /> View on Github
              </OutboundLink>

              <OutboundLink
                href={project.live_url}
                target="_blank"
                rel="noopener noreferrer"
                className="live"
              >
                <LiveIcon width={20} /> View Live
              </OutboundLink>
            </LinkWrapper>
          </motion.div>
        </Content>
      </Body>
    </Wrapper>
  );
}

//
// ==================== 🌸STYLED COMPONENTS ====================
//

const Wrapper = styled.div`
  width: 90%;
  overflow-y: auto;
  height: calc(var(--app-height) - 125px);
  background-color: white;
  display: flex;
  flex-direction: column;
  padding: 40px 80px;
  margin: 0 auto 40px;
  max-width: 1400px;

  @media (max-width: 600px) {
    padding: 40px 20px;
  }
`;

const Header = styled.header`
  margin-bottom: 80px;

  .link {
    color: #af3b86;
    text-decoration: underline;
    font-size: 18px;
    margin-right: 5px;
  }

  .path {
    font-size: 18px;
    padding: 5px;
  }

  .separator {
    margin: 0 7px;
  }

  @media (max-width: 600px) {
    .path {
      font-size: 16px;
    }
    .separator {
      margin: 0 4px;
    }
  }
`;

const Body = styled.main`
  display: flex;

  @media (max-width: 1100px) {
    flex-direction: column;
    align-items: center;
  }
`;

const ImageWrapper = styled.div<{ $isMobile: boolean }>`
  width: 45%;
  margin-right: 40px;
  margin-bottom: 40px;
  max-width: 500px !important;
  display: ${(p) => (p.$isMobile ? "flex" : "block")};
  justify-content: ${(p) => (p.$isMobile ? "center" : "flex-start")};

  @media (max-width: 1100px) {
    width: 100%;
    margin-right: 0;
  }
`;

const DeviceWrapper = styled.div`
  position: relative;
`;

const DeviceScreen = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  /* background-position: top center; */
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const Content = styled.div`
  width: calc(55% - 40px);

  @media (max-width: 1100px) {
    width: 100%;
  }

  h2 {
    font-size: 1.6em;
    margin-top: 0;
  }
`;

const Summary = styled.p`
  line-height: 25px;
  white-space: pre-wrap;

  ul {
    padding-left: 40px;
    list-style-type: disc;
  }

  a {
    color: #af3b86;
  }
`;

const LinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 20px;

  @media (max-width: 1100px) {
    justify-content: center;
  }
`;

const OutboundLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  margin-right: 20px;
  margin-top: 20px;
  padding: 5px 10px;
  border-radius: 10px;
  color: white;

  &.github {
    background: black;
  }

  &.live {
    background: rgb(26, 158, 26);
  }

  svg {
    margin-right: 5px;
  }
`;

const NotFoundWrapper = styled.div`
  padding: 100px;
  text-align: center;

  a {
    color: #af3b86;
    text-decoration: underline;
  }
`;
