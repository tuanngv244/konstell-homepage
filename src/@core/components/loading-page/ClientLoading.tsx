'use client';

import { useTheme } from '@mui/material';
import clsx from 'clsx';
import { useEffect, useState } from 'react';
import LogoMain from '../icons/LogoMain';

const ClientLoading = () => {
  const theme = useTheme();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 600);

    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div
      className={clsx(
        'bg-white fixed w-screen h-screen top-0 left-0 z-[5000] flex items-center justify-center  will-change-[clip-path] [transition:clip-path_0.6s_cubic-bezier(0.81,0.2,0.32,0.93)] [&_svg]:overflow-hidden [&_svg_.transform-path]:fill-black ',
        loading ? '[clip-path:inset(0_0_0_0)]' : '[clip-path:inset(0_0_100%_0)]',
      )}
    >
      <LogoMain color={theme.palette.primary.main} />
    </div>
  );
};

export default ClientLoading;
