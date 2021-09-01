import React, {
  useState,
  useRef,
  useCallback,
  useEffect,
  ReactNode,
} from 'react';

import {
  Reference,
  Popper,
  PopperProps,
  PopperChildrenProps,
} from 'react-popper';

import { Button } from './../Button';

export interface MenuButtonChildrenProps extends PopperChildrenProps {
  hideMenu(): void;
}
//TODO: Improve Types
export interface MenuButtonProps extends Omit<PopperProps<any>, 'children'> {
  className?: string;
  title: ReactNode;
  children(props: MenuButtonChildrenProps): ReactNode;
}
/**
 *
 * MenuButton is a simple dropdown component. This component relies primarily on [React Popper](https://github.com/popperjs/react-popper) Component.
 *
 * All the props and types are the same besides having added `hideMenu` function to the data that is returned to the children.
 *
 * Please note that in order for this component to function, the app must be wrapped by `AppWrapper` because it contains the `Manager` wrapping component required by Popper.
 *
 */
export const MenuButton: React.FC<MenuButtonProps> = (props) => {
  const { placement, className = '', title, children, ...rest } = props;
  const [menuVisible, setMenuVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const hideMenu = useCallback(() => setMenuVisible(false), []);
  const handleOutsideClick = useCallback((e) => {
    if (containerRef?.current?.contains?.(e.target)) {
      return;
    }
    setMenuVisible(false);
    return;
  }, []);
  useEffect(() => {
    if ('ontouchend' in window) {
      document.addEventListener('touchend', handleOutsideClick);
    } else {
      document.addEventListener('click', handleOutsideClick);
    }
    return () => {
      document.removeEventListener('touchend', handleOutsideClick);
      document.removeEventListener('click', handleOutsideClick);
    };
  }, [handleOutsideClick]);

  return (
    <div className={`tec-menuButton ${className}`} ref={containerRef}>
      <Reference>
        {({ ref }) => (
          <Button
            className='tec-menuButtonButton'
            ref={ref}
            onClick={() => setMenuVisible(!menuVisible)}
          >
            {title}
          </Button>
        )}
      </Reference>
      <Popper placement={placement} {...rest}>
        {(popperData) =>
          menuVisible ? (
            <div
              className='tec-menuButtonMenu'
              ref={popperData.ref}
              style={popperData.style}
              data-placement={popperData.placement}
            >
              {children({ ...popperData, hideMenu })}
            </div>
          ) : null
        }
      </Popper>
    </div>
  );
};
