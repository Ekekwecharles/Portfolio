"use client";

import Image from "next/image";
import Link from "next/link";
import {
  AboutIcon,
  CloseCircleIcon,
  ContactIcon,
  HomeIcon,
  MenuIcon,
  PortfolioIcon,
  ResumeIcon,
} from "./Icons/icons";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "Home", path: "/", icon: HomeIcon, iconWidth: 25 },
  { label: "About", path: "/about", icon: AboutIcon, iconWidth: 25 },
  { label: "Resume", path: "/resume", icon: ResumeIcon, iconWidth: 30 },
  {
    label: "Portfolio",
    path: "/portfolio",
    icon: PortfolioIcon,
    iconWidth: 20,
  },
  { label: "Contact", path: "/contact", icon: ContactIcon, iconWidth: 25 },
];

// 🪴Main Component
export default function Header() {
  const [showNav, setShowNav] = useState(false);
  const [isHome, setIsHome] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const handleRouteChange = () => {
      if (pathname === "/") setIsHome(true);
      else setIsHome(false);
      setShowNav(false);
      // ReactGA.pageview(location.pathname);
    };

    handleRouteChange();
  }, [pathname]);

  type NavLinkProps = {
    label: string;
    path: string;
    icon: React.ComponentType<{
      fill: string;
      width: number;
      className?: string;
    }>;
    iconWidth: number;
  };

  const renderNavLink = ({
    label,
    path,
    icon: Icon,
    iconWidth,
  }: NavLinkProps) => {
    const isActive = pathname === path;

    return (
      <NavListItem className="nav__list-item" key={path}>
        <Link
          href={path}
          className={`nav-link ${isActive ? "nav-link--active" : ""}`}
        >
          {label}
        </Link>
        <Icon fill="white" width={iconWidth} className="nav-icon" />
      </NavListItem>
    );
  };

  return (
    <StyledHeader>
      <Link href="/">
        <Image
          src="/logo.svg"
          alt="Logo"
          width={30}
          height={30}
          style={{ margin: "20px", height: "auto" }}
        />
      </Link>
      <MenuBtn aria-label="Open menu" onClick={() => setShowNav(true)}>
        <MenuIcon className="menu-icon" height={60} stroke="white" />
      </MenuBtn>
      <Nav $show={showNav} $home={isHome}>
        <CloseMenu aria-label="Close menu" onClick={() => setShowNav(false)}>
          <CloseCircleIcon width={40} fill="white" />
        </CloseMenu>
        <NavList>{navLinks.map((navLink) => renderNavLink(navLink))}</NavList>
      </Nav>
    </StyledHeader>
  );
}

//
// --------------------- 🌸STYLED COMPONENTS ---------------------
//

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;

  & > * {
    position: relative;
    /* border-radius: 5px; */
  }
`;

const MenuBtn = styled.button`
  border: none;
  background-color: transparent;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 40px;
  cursor: pointer;

  .menu-icon {
    display: none;

    @media only screen and (max-width: 750px) {
      display: block;
    }
  }

  @media only screen and (max-width: 500px) {
    margin-right: 20px;
  }
`;

const Nav = styled.nav<{ $show: boolean; $home: boolean }>`
  transition: all 0.5s;
  transform: ${({ $home }) =>
    $home ? "translate(-10000px, 10000px)" : "translate(0, 0)"};

  .nav-icon {
    margin-right: 10px;
    display: none;

    @media only screen and (max-width: 750px) {
      display: block;
    }
  }

  @media only screen and (max-width: 750px) {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    padding: 20px;
    background-color: #af3b86;
    z-index: 2000;
    transform: ${({ $show }) =>
      $show ? "translateX(0)" : "translateX(2000px)"};
    &:hover .nav__list-item {
      justify-content: flex-end;
      width: auto;
    }

    /* Fix for shifted resume icon */
    &:hover .nav__list-item:nth-of-type(3) .nav-icon {
      margin-left: -5px;
    }

    &:hover .nav-link {
      text-indent: unset;
    }
  }
`;

const CloseMenu = styled.button`
  display: none;

  @media only screen and (max-width: 750px) {
    cursor: pointer;
    display: block;
    width: 100%;
    margin: 0 10px 60px auto;
    border: none;
    background-color: transparent;
  }
`;

const NavList = styled.ul`
  display: flex;
  margin-right: 20px;

  @media only screen and (max-width: 750px) {
    flex-direction: column;
    margin-right: 0;
  }
`;

const NavListItem = styled.li`
  margin: 15px;
  margin-left: 0;
  display: flex;
  flex-direction: row-reverse;
  align-items: center;

  .nav-link {
    position: relative;
    font-size: 1.1em;

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
      transition: transform 0.7s;
      transition-timing-function: cubic-bezier(0.7, 0, 0.3, 1);
    }

    &:hover::after,
    &--active::after {
      transform: translate3d(0, 0, 0);
      background: #af3b86;
    }

    @media only screen and (max-width: 750px) {
      font-size: 1.1em;
      text-indent: -10000px;

      &--active + .nav-icon path,
      &:hover + .nav-icon path {
        fill: rgb(0, 238, 255);
      }

      &:hover::after,
      &--active::after {
        transform: translate3d(0, 0, 0);
        background-color: rgb(0, 238, 255);
      }
    }
  }

  @media only screen and (max-width: 750px) {
    justify-content: center;
    width: 100%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
`;
