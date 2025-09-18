import { Zoom, useScrollTrigger } from '@mui/material';
import clsx from 'clsx';
import { ReactNode } from 'react';

type ScrollTopProps = {
  children: ReactNode;
  className?: string;
  isPolicy?: boolean;
};

const ScrollToTop = ({ isPolicy = false, ...otherProps }: ScrollTopProps) => {
  const { children, className } = otherProps;

  const trigger = useScrollTrigger({
    threshold: 400,
    disableHysteresis: true,
  });

  const handleClick = () => {
    const anchor = document.querySelector('body');
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div
        role="presentation"
        className={clsx('z-[1200] fixed right-[1rem] bottom-[1.25rem]', className)}
        onClick={handleClick}
      >
        {children}
      </div>
    </Zoom>
  );
};

export default ScrollToTop;
