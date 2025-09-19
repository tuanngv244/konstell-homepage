import { WIDTH_MEDIUM } from '@/@core/configs';
import { Box, Button, Stack, styled, useMediaQuery } from '@mui/material';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { ReactNode, useEffect } from 'react';
import LogoMain from '../../icons/LogoMain';
import clsx from 'clsx';
import ConfigLanguage from '../../shared/sections/config-language';
import { HeroIcons } from '../../icons/heroIcons';

const StyleLogo = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  svg: {
    '.transform-path': {
      fill: theme.palette.common.white,
      transition: 'all .25s',
      '&.logo': {
        fill: theme.palette.primary.main,
      },
    },
  },
  '&.active': {
    svg: {
      '.transform-path': {
        fill: theme.palette.primary.main,
        transition: 'all .25s',
        '&.active': {
          fill: theme.palette.primary.main,
        },
        '&.logo': {
          fill: theme.palette.primary.main,
        },
      },
    },
  },
}));

const LeftStack = styled(Stack)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  alignItems: 'center',
}));

const AppBarWrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {},
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {
    '.menu-content': {
      marginRight: '0',
      width: 'auto',
    },
    '& .menu-content': {
      li: {
        paddingLeft: 40,
      },
      '> div:last-child': {
        li: {
          paddingRight: 0,
        },
      },
    },
    paddingLeft: '0 !important',
    paddingRight: '0 !important',
  },
  [`@media (max-width: 1270px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

type LAppBarProps = {
  children?: ReactNode;
  horizontalAppBarContent?: any;
  horizontalAppBarBranding?: any;
  domain?: any;
  isPolicy?: boolean;
  apiMainData?: any;
  saveSettings?: any;
  settings?: any;
  active: boolean;
  activeScroll?: boolean;
  toggleSidebar: VoidFunction;
};

const LAppBar = (props: LAppBarProps) => {
  const {
    horizontalAppBarContent: userHorizontalAppBarContent,
    horizontalAppBarBranding: userHorizontalAppBarBranding,
    children,
    activeScroll,
  } = props;

  const { t } = useTranslation('common');

  const isDesktop = useMediaQuery((theme: any) => theme.breakpoints.up('xl'));

  return (
    <AppBarWrapper
      sx={{
        width: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        px: !isDesktop ? [4, 4] : [0, 0],
      }}
    >
      <Stack direction="row" alignItems="center" gap={'2.5rem'}>
        {userHorizontalAppBarBranding ? (
          userHorizontalAppBarBranding(props)
        ) : (
          <LeftStack>
            <Link href="/" passHref>
              <StyleLogo className={clsx({ active: activeScroll })}>
                <LogoMain />
              </StyleLogo>
            </Link>
          </LeftStack>
        )}
      </Stack>
      {children}
      <div className="flex items-center gap-[0_2rem] ml-[1rem]">
        <ConfigLanguage activeScroll={activeScroll} />
        <Link href={'#'} passHref>
          <Button
            className={clsx(
              'talk-btn rounded-tr-md shadow-none flex items-center gap-[0_0.5rem] whitespace-nowrap mt-[1rem] w-full !text-[1rem] transition-all duration-300 ease-in-out !normal-case bg-gradient-primary',
              {
                // '!bg-primary !text-white': activeScroll,
                // '!bg-white !text-black': !activeScroll,
              },
            )}
            variant="contained"
          >
            {t('button.contactUs')}
            {/* <HeroIcons.ArrowRightUp size={14} /> */}
          </Button>
        </Link>
      </div>
    </AppBarWrapper>
  );
};

export default LAppBar;
