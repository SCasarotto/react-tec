import React, { ReactNode } from 'react';

import { matchPath, useLocation } from 'react-router';

import { Li, Link, Title } from './styledComponents';

export interface SideNavLinkProps {
  title?: string;
  to: string;
  activePath?: string;
  exact?: boolean;
  className?: string;
  children?: ReactNode;
  key?: string;
}
/**
 *
 * SideNavLink is a stylized `NavLink` built specifically for left navbars.
 *
 * Note: `SideNavLink` is a `NavLink` warpper in an `li`. So its best this component is placed inside of a `ul`.
 *
 */
export const SideNavLink: React.FC<SideNavLinkProps> = (props) => {
  const location = useLocation();
  const {
    title,
    to,
    children,
    activePath,
    exact,
    className = '',
    ...rest
  } = props;

  return (
    <Li className={`tec-sideNavLink ${className}`}>
      <Link
        isActive={() =>
          !!matchPath(location.pathname, {
            path: activePath || to,
            exact,
          })
        }
        activeClassName='active'
        to={to}
        exact={exact}
        className='tec-sideNavLinkLink'
        {...rest}
      >
        {title && <Title className='tec-sideNavLinkTitle'>{title}</Title>}
        {children}
      </Link>
    </Li>
  );
};

SideNavLink.defaultProps = {
  exact: false,
};
