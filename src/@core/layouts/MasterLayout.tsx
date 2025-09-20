'use client';
import { ReactNode, useEffect } from 'react';

import HorizontalLayout from './modes/HorizontalLayout';
import VerticalLayout from './modes/VerticalLayout';
import Lenis from 'lenis'
import { useTitle } from '../hooks/useTitle';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import gsap from 'gsap';
import { useDevice } from '../hooks/useDevice';

gsap.registerPlugin(ScrollTrigger);

type LayoutProps = {
  children: ReactNode;
  horizontalNavItems?: any;
  horizontalAppBarContent?: any;
  verticalNavItems?: any;
  verticalAppBarContent?: any;
  navVisible?: any;
};

const MasterLayout = (props: LayoutProps) => {
  useTitle();
  const { children } = props;
  const { mobile, tablet } = useDevice()


  useEffect(() => {
    const lenis = new Lenis();

    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
  }, [])

  return (
    <>
      <div className="xs:block mid-large:!hidden xl:!hidden">
        {(mobile || tablet) && <VerticalLayout {...props}>{children}</VerticalLayout>}
      </div>
      <div className="xs:hidden mid-large:!block xl:!block">
        {(!mobile && !tablet) && <HorizontalLayout {...props}>{children}</HorizontalLayout>}
      </div>
    </>
  );
};

export default MasterLayout;
