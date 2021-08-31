import React, { ReactNode } from 'react';

import { Container, Content, Ul, Li, Link } from './styledComponents';

export interface SubNavbarProps {
  links: Array<{
    to: string;
    activePath?: string;
    exact?: boolean;
    className?: string;
    children?: ReactNode;
    key?: string;
  }>;
  rightComponent?: React.ReactNode;
  className?: string;
}
/**
 *
 * SubNavbar is the navigational bar just under to top `TitleBar`.
 *
 */
export const SubNavbar: React.FC<SubNavbarProps> = (props) => {
  const { links, rightComponent, className = '' } = props;

  return (
    <Container className={`tec-subNavbar ${className}`}>
      <Content className='tec-subNavbarContent'>
        <Ul className='tec-subNavbarUl'>
          {links?.map((link) => {
            return (
              <Li key={link.key ?? link.to} className='tec-subNavbarLi'>
                <Link className='tec-subNavbarLink' {...link} />
              </Li>
            );
          })}
        </Ul>
        {rightComponent}
      </Content>
    </Container>
  );
};
