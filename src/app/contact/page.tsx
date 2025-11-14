"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import styled from "styled-components";
import {
  GithubIcon,
  LinkedinIcon,
  TwitterIcon,
} from "@/components/Icons/icons";
import { useForm } from "@formspree/react";
import { toast } from "react-hot-toast";
import data from "@/data.json";
import { motion } from "framer-motion";

// 🌿 MAIN COMPONENT
const ContactPage: React.FC = () => {
  const [state, handleSubmit, reset] = useForm("xanayzqq");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // ReactGA.event({
    //   category: "Contact Form",
    //   action: "Submit",
    // });

    try {
      await handleSubmit(e);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      toast.success("Your message was sent successfully.");

      reset();
    } catch (error) {
      toast.error("Something went wrong while sending your message.");
      console.error(error);
    }
  };

  return (
    <Section>
      <Header>
        <Heading>Get In Touch</Heading>
        <SubHeading>
          I’m always interested in hearing about new projects and opportunities.
        </SubHeading>
      </Header>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <Content>
          <Left>
            <h2>Let's talk about everything!</h2>
            <p>
              Don’t like forms? Send me an{" "}
              <LinkStyled href={`mailto:${data.social.email}`}>
                <b>email</b>
              </LinkStyled>
              . 👋
            </p>
          </Left>

          <Right>
            <Form onSubmit={handleFormSubmit}>
              <Input
                placeholder="Your name"
                name="name"
                value={formData.name}
                onChange={onChange}
                required
              />
              <Input
                placeholder="Email address"
                name="email"
                type="email"
                value={formData.email}
                onChange={onChange}
                required
              />
              <InputFull
                placeholder="Subject"
                name="subject"
                value={formData.subject}
                onChange={onChange}
              />
              <TextArea
                placeholder="Message"
                name="message"
                value={formData.message}
                onChange={onChange}
                required
              />
              <div style={{ textAlign: "right", width: "100%" }}>
                <SendButton type="submit" disabled={state.submitting}>
                  {state.submitting ? "Sending..." : "Send Message"}
                </SendButton>
              </div>
            </Form>
          </Right>
        </Content>

        <Content>
          <Left>
            <h2>Reach out on social media!</h2>
          </Left>
          <Right>
            <SocialList>
              <SocialItem>
                <SocialLink
                  href={data.social.github}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconWrapper>
                    <GithubIcon fill="black" />
                  </IconWrapper>
                  Github
                </SocialLink>
              </SocialItem>

              <SocialItem>
                <SocialLink
                  href={data.social.linkedIn}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconWrapper>
                    <LinkedinIcon fill="#0072b1" width={27} />
                  </IconWrapper>
                  LinkedIn
                </SocialLink>
              </SocialItem>

              <SocialItem>
                <SocialLink
                  href={data.social.twitter}
                  target="_blank"
                  rel="noreferrer"
                >
                  <IconWrapper>
                    <TwitterIcon fill="#1DA1F2" />
                  </IconWrapper>
                  Twitter
                </SocialLink>
              </SocialItem>
            </SocialList>
          </Right>
        </Content>
      </motion.div>
    </Section>
  );
};

export default ContactPage;

//
// --------------------- 🌸STYLED COMPONENTS ---------------------
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
  z-index: 1000;

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

const Heading = styled.h1`
  color: #af3b86;
  font-family: "Merienda One", cursive;
  font-size: 3em;
  margin-bottom: 10px;

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

const Content = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;

  h2 {
    color: #af3b86;
  }

  @media (max-width: 800px) {
    flex-direction: column;
  }
`;

const Left = styled.div`
  margin-right: 20px;
  width: calc(35% - 20px);
  max-width: 350px;

  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const Right = styled.div`
  width: 65%;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
`;

const Input = styled.input`
  background-color: #af3b8633;
  border: none;
  height: 60px;
  padding: 20px;
  margin: 10px;
  margin-left: 0;
  border-radius: 7px;
  font-size: 1.2em;
  font-family: inherit;
  width: calc(50% - 15px);

  &:focus {
    outline: none;
    box-shadow: 0 0 3px 2px #daae9d;
  }

  @media (max-width: 500px) {
    width: calc(100% - 20px);
    font-size: 1.1em;
  }
`;

const InputFull = styled(Input)`
  width: calc(100% - 20px);
`;

const TextArea = styled.textarea`
  background-color: #af3b8633;
  border: none;
  height: 150px;
  padding: 20px;
  margin: 10px;
  margin-left: 0;
  border-radius: 7px;
  font-size: 1.2em;
  font-family: inherit;
  width: calc(100% - 20px);
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 3pt 2pt #daae9d;
  }
`;

const SendButton = styled.button`
  color: white;
  background-color: #af3b86;
  border: none;
  padding: 10px 20px;
  margin: 20px 20px 0 0;
  border-radius: 20px;
  font-family: inherit;
  font-size: 1.2em;
  font-weight: bolder;
  cursor: pointer;

  &:focus {
    outline: none;
    box-shadow: 0 0 3pt 2pt #daae9d;
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const LinkStyled = styled.a`
  color: #af3b86;
  text-decoration: none;

  &:hover {
    color: #af3b86;
  }
`;

const SocialList = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 500px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SocialItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: 18px;

  @media (max-width: 800px) {
    margin-top: 30px;
    margin-right: 20px;
  }
`;

const SocialLink = styled.a`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: inherit;
`;

const IconWrapper = styled.span`
  margin-right: 5px;
`;
