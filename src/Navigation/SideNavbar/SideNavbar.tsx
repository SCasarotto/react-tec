import React from 'react';

import { Link } from 'react-router-dom';

import { SideNavLink, SideNavLinkProps } from '../SideNavLink';
import { Container, Logo, NavContainer, MainUl } from './styledComponents';

export interface SideNavbarProps {
  sidebarWidth?: number;
  Header?: React.ReactNode;
  Footer?: React.ReactNode;
  logo?: string;
  links?: Array<SideNavLinkProps>;
  className?: string;
}
/**
 *
 * SideNavbar is the sidebar component you see to the left of this page.
 *
 */
export const SideNavbar: React.FC<SideNavbarProps> = (props) => {
  const {
    sidebarWidth = 200,
    logo,
    Header,
    links,
    className = '',
    Footer,
  } = props;
  return (
    <Container
      sidebarWidth={sidebarWidth}
      className={`tec-sideNavbar ${className}`}
    >
      {Header}
      {logo && !Header && (
        <Link to='/' className='tec-sideNavbarLogoLink'>
          <Logo src={logo} alt='logo' className='tec-sideNavbarLogo' />
        </Link>
      )}
      <NavContainer className='tec-sideNavbarNavContainer'>
        <MainUl className='tec-sideNavbarMainUl'>
          {links?.map((link) => {
            const { title, activePath, to, children, exact, key } = link;
            return (
              <SideNavLink
                key={key ?? to}
                to={to}
                activePath={activePath || to}
                title={title}
                exact={exact}
                className='tec-sideNavbarNavLink'
              >
                {children}
              </SideNavLink>
            );
          })}
        </MainUl>
      </NavContainer>
      {Footer}
    </Container>
  );
};
