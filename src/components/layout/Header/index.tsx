/* eslint-disable react/display-name */

import React, { useState } from 'react';
import { Transition } from 'react-spring/renderprops.cjs';
import styled from 'styled-components';
import { Icon } from '@mycrypto/ui';

import { getRoute } from '@utils';
import { theme } from '@theme';

import { links } from './config';

// Legacy
import logo from '@assets/logo-mycrypto.svg';

const Navbar = styled.nav`
  width: 100%;
  background: #163150;
`;

const Menu = styled.div`
  position: fixed;
  left: 0;
  overflow: auto;
  font-size: 16px;
  width: 375px;
  height: 100%;
  z-index: 9999;
  background: #163150;
`;

const HeaderTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 77px;
  padding: 0 15px;
  border-bottom: 1px solid #3e546d;

  /* Enables window dragging on macOS desktop app */
  -webkit-app-region: drag;

  @media (min-width: ${theme.breakpoints.sm}) {
    padding: 0;
  }
`;

const HeaderBottom = styled.div`
  display: none;
  height: 77px;
  border-bottom: 1px solid #3e546d;

  @media (min-width: ${theme.breakpoints.sm}) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const HeaderBottomLinks = styled.ul`
  display: none;

  li {
    position: relative;

    ul {
      position: absolute;
      top: 100%;
      left: 0;
      min-width: 200px;
      margin: 0;
      padding: 0;
      background: #163150;
      border: 1px solid #3e546d;
      text-transform: none;
      z-index: 1;

      li {
        padding: 13px;
        font-weight: 300;
      }
    }
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    list-style-type: none;

    display: flex;
    align-items: center;
    height: 100%;

    li {
      height: 100%;
      margin: 0;
      padding: 0 25px;
      font-weight: 500;
      display: flex;
      align-items: center;

      transition: background 0.2s ease-in;

      &:hover {
        background: #304b6a;
        cursor: pointer;
      }
    }
  }
`;

const HeaderTopRight = styled.div`
  width: 22px;
  content: '';
  @media (min-width: ${theme.breakpoints.sm}) {
    width: 234px;
  }
`;

const HeaderTopLeft = styled.div`
  display: none;

  @media (min-width: ${theme.breakpoints.sm}) {
    margin: 0;
    padding: 0;
    color: #ffffff;
    text-transform: uppercase;
    font-weight: bold;
    list-style-type: none;

    display: flex;
    align-items: center;
    height: 100%;

    li {
      height: 100%;
      margin: 0;
      padding: 0 25px;
      font-weight: 500;
      display: flex;
      align-items: center;

      transition: background 0.2s ease-in;

      &:hover {
        background: #304b6a;
        cursor: pointer;
      }
    }
  }
`;

const MenuLinks = styled.ul`
  margin: 0;
  color: #ffffff;
  text-transform: uppercase;
  font-weight: bold;
  list-style-type: none;

  padding: 15px 0;
  border-bottom: 1px solid #3e546d;

  /* stylelint-disable-next-line no-descending-specificity */
  li {
    height: 100%;
    margin: 0;
    font-weight: 500;
    padding: 20px 15px;

    ul {
      list-style-type: none;
      margin: 15px 0;
      padding: 0;

      li {
        margin: 0;
        padding: 0;
        text-transform: none;

        &:not(:last-of-type) {
          margin-bottom: 15px;
        }
      }
    }
  }
`;

const MobileTopLeft = styled.div`
  display: block;
  color: #ffffff;
  font-size: 1.5rem;

  svg {
    color: #ffffff;
  }

  @media (min-width: ${theme.breakpoints.sm}) {
    display: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

const CenterImg = styled.img`
  width: 160px;
  height: 39px;
`;

interface IconWrapperProps {
  subItems?: boolean;
}

const IconWrapper = styled(Icon)<IconWrapperProps>`
  margin: 0;
  margin-left: 6px;
  font-size: 0.75rem;

  svg {
    color: ${theme.colors.link};
    ${props => props.subItems && 'transform: rotate(270deg);'};
  }
`;

const TitleIconWrapper = styled.div`
  display: flex;
  align-items: center;
`;

interface PrefixIconProps {
  width: string;
  height?: string;
}

// prettier-ignore
const PrefixIcon = styled.img<PrefixIconProps>`
  ${props => props.width && `width: ${props.width};`}
  ${props => props.height && `height: ${props.height};`}
  margin-right: 3px;

  svg {
    color: ${theme.colors.link};
  }
`;

interface DropdownType {
  [dropdown: string]: boolean;
}

interface LinkElement {
  to: string;
  title?: string;
  subItems?: LinkElement;
}

const Header = () => {
  const initVisibleMenuDropdowns: DropdownType = {
    'Manage Assets': false,
    Tools: false,
  };
  const initVisibleDropdowns: DropdownType = {
    'Manage Assets': false,
    Tools: false,
  };
  const [menuOpen, setMenuOpen] = useState(false);
  const [visibleMenuDropdowns, setVisibleMenuDropdowns] = useState(
    initVisibleMenuDropdowns
  );
  const [visibleDropdowns, setVisibleDropdowns] = useState(
    initVisibleDropdowns
  );

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleMenuDropdown = (dropdown: string) =>
    setVisibleMenuDropdowns({
      ...visibleMenuDropdowns,
      [dropdown]: !visibleMenuDropdowns[dropdown],
    });

  const toggleDropdown = (dropdown: string) =>
    setVisibleDropdowns({
      [dropdown]: !visibleDropdowns[dropdown],
    });

  const openLatestNews = (): void => {
    window.open(
      'https://medium.com/@mycrypto',
      '_blank',
      'noopener noreferrer'
    );
  };

  const openHelpSupportPage = (): void => {
    window.open(
      'https://medium.com/@mycrypto',
      '_blank',
      'noopener noreferrer'
    );
  };

  return (
    <Navbar>
      {/* Mobile Menu */}
      <Transition
        items={menuOpen}
        from={{ left: '-375px' }}
        enter={{ left: '0' }}
        leave={{ left: '-500px' }}
      >
        {open =>
          open &&
          ((style: any) => (
            <Menu style={style}>
              <MenuLinks>
                {links.map(({ title, to, subItems, icon }) => {
                  return (
                    <li
                      key={title}
                      onClick={e => {
                        e.stopPropagation();

                        if (to) {
                          window.open(to, '_blank', 'noopener noreferrer');
                          toggleMenu();
                        } else {
                          toggleMenuDropdown(title);
                        }
                      }}
                    >
                      <TitleIconWrapper>
                        {icon && <PrefixIcon {...icon} />} {title}
                        {!icon && (
                          <IconWrapper
                            subItems={!subItems}
                            icon="navDownCaret"
                          />
                        )}
                      </TitleIconWrapper>
                      {subItems && visibleMenuDropdowns[title] && (
                        <ul>
                          {subItems.map(
                            ({
                              to: innerTo,
                              title: innerTitle,
                            }: LinkElement) => (
                              <li
                                key={innerTitle}
                                onClick={() => {
                                  toggleMenu();
                                  window.open(
                                    innerTo,
                                    '_blank',
                                    'noopener noreferrer'
                                  );
                                }}
                              >
                                {innerTitle}
                              </li>
                            )
                          )}
                        </ul>
                      )}
                    </li>
                  );
                })}
              </MenuLinks>
              <MenuLinks>
                <li onClick={openHelpSupportPage}>
                  Help & Support
                  <IconWrapper subItems={true} icon="navDownCaret" />
                </li>
                <li>
                  Latest News
                  <IconWrapper subItems={true} icon="navDownCaret" />
                </li>
              </MenuLinks>
            </Menu>
          ))
        }
      </Transition>
      <HeaderTop>
        {/* Mobile Left */}
        <MobileTopLeft role="button" onClick={toggleMenu}>
          <Icon icon={menuOpen ? 'exit' : 'combinedShape'} />
        </MobileTopLeft>
        {/* Desktop Left */}
        <HeaderTopLeft>
          <li onClick={openHelpSupportPage}>Help & Support</li>
          <li onClick={openLatestNews}>Latest News</li>
        </HeaderTopLeft>
        <div>
          <a href={getRoute('DASHBOARD')} rel="noopener noreferrer">
            <CenterImg src={logo} alt="Our logo" />
          </a>
        </div>
        <HeaderTopRight />
      </HeaderTop>
      <HeaderBottom>
        <HeaderBottomLinks>
          {links.map(({ title, to, subItems, icon }) => {
            const liProps = to
              ? {
                  onClick: () =>
                    window.open(to, '_blank', 'noopener noreferrer'),
                }
              : {
                  onMouseEnter: () => toggleDropdown(title),
                  onMouseLeave: () => toggleDropdown(title),
                };

            return (
              <li key={title} {...liProps}>
                {icon && <PrefixIcon {...icon} />} {title}{' '}
                {!icon && subItems && (
                  <IconWrapper subItems={!subItems} icon="navDownCaret" />
                )}
                {subItems && visibleDropdowns[title] && (
                  <ul>
                    {subItems.map(
                      ({ to: innerTo, title: innerTitle }: LinkElement) => (
                        <li
                          key={innerTitle}
                          onClick={() =>
                            window.open(
                              innerTo,
                              '_blank',
                              'noopener noreferrer'
                            )
                          }
                        >
                          {innerTitle}
                        </li>
                      )
                    )}
                  </ul>
                )}
              </li>
            );
          })}
        </HeaderBottomLinks>
      </HeaderBottom>
    </Navbar>
  );
};

export default Header;
