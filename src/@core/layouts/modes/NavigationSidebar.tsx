import { Box, Button, Stack, styled, Typography, useScrollTrigger, useTheme } from '@mui/material';
import clsx from 'clsx';
import { CSSProperties, useRef, useState } from 'react';

import { HeroIcons } from '@/@core/components/icons/heroIcons';
import { useDevice } from '@/@core/hooks/useDevice';
import { useResources } from '@/@core/hooks/useResources';
import { INavLink } from '@/@core/types/general';
import { hexToRGBA } from '@/@core/utils/hex-to-rgba';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ButtonLink from '@/@core/components/button-link';

type Props = {
  open: boolean;
  toggleSidebar: VoidFunction;
};

const NavigationSidebar = ({ open, toggleSidebar }: Props) => {
  const { navLinks } = useResources();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const itemsRef = useRef<{ [id: number]: HTMLLIElement | null }>({});
  const device = useDevice();
  const { t } = useTranslation('common');
  const theme = useTheme();
  const pathname = usePathname();
  const splitPaths = pathname.split('/');

  const scrollTrigger = useScrollTrigger({
    threshold: 72,
    disableHysteresis: true,
  });

  const onToggleDropdown = (item: INavLink) => () => {
    if (!device.mobile && !device.tablet) return;
    setExpandedId(item.id === expandedId ? null : item.id);
  };

  const scrollTriggerStyles = {
    '.item': {
      '.label': {
        color: theme.palette.common.black + ' !important',
        transition: 'all .25s',
      },
      '.dropdown-icon': {
        color: theme.palette.common.black,
      },
    },
  };

  const renderNavContent = () => (
    <Wrap sx={(scrollTrigger || pathname !== '/') && !device.mobile ? scrollTriggerStyles : {}}>
      <List className="list">
        {navLinks?.map((item: INavLink, index: number) => {
          const { title, subs } = item;

          const itemPath = item.path?.split('/')?.filter(Boolean)?.[0];
          const currentPath = pathname?.split('/')?.filter(Boolean)?.[0];

          return (
            <ListItem
              key={index}
              ref={(el) => {
                itemsRef.current[index] = el;
              }}
              className={clsx('item', {
                active: itemPath === currentPath,
                'active-scroll': scrollTrigger || pathname !== '/',
              })}
              onClick={onToggleDropdown(item)}
              style={{ '--delay': `0.${index + 2 * 2}s` } as CSSProperties}
            >
              <Stack className="wrap" direction={'row'} gap={2.5} alignItems={'center'}>
                {!!!subs?.length || item?.path ? (
                  <Link
                    href={item.path || '#'}
                    style={{ position: 'relative' }}
                    className={clsx('label')}
                  >
                    {title}
                  </Link>
                ) : (
                  <Typography
                    variant={'body1'}
                    style={{ position: 'relative' }}
                    className={clsx('label')}
                  >
                    {title}
                  </Typography>
                )}
                {!!item?.subs?.length && (
                  <HeroIcons.ChevronDown
                    size={20}
                    className="dropdown-icon"
                    color={theme.palette.common.white}
                  />
                )}
              </Stack>
              {!!subs?.length && (
                <SubPanel
                  className={clsx('panel', {
                    active: expandedId === item.id && (device.tablet || device.mobile),
                  })}
                  style={{ '--h-panel': item?.subs?.length * 40 + 45 + 'px' } as CSSProperties}
                >
                  <div className="list">
                    {subs.map((nav, index) => {
                      const navPath = nav.path?.split('/')?.filter(Boolean)?.[1];
                      const subPath = pathname?.split('/')?.filter(Boolean)?.[1];
                      return (
                        <SubPanelItem
                          href={nav.path}
                          className={clsx({
                            active: subPath === navPath,
                          })}
                          key={index}
                          onClick={toggleSidebar}
                        // target={'_blank'}
                        >
                          {nav.title}
                        </SubPanelItem>
                      );
                    })}
                  </div>
                </SubPanel>
              )}
            </ListItem>
          );
        })}
      </List>
    </Wrap>
  );

  if (device.desktop || device.desktopLarge) return renderNavContent();

  return (
    <WrapContent
      component={'div'}
      className={clsx({ active: open, 'is-mobile': device.mobile || device.tablet })}
    >
      {renderNavContent()}
      <ButtonLink
        cls="inline-flex xs:mt-[1rem] items-center gap-2 xs:px-4 md:!px-6 xs:py-2 md:!py-3 bg-gradient-primary text-white text-sm font-medium tracking-wider rounded-full transition-all duration-300"
        name="CONTACT US"
        link="#"
        color="#ffffff"
        size={20}
      />
    </WrapContent>
  );
};

const SubPanel = styled('div')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  opacity: 0,
  zIndex: 1000,
  visibility: 'hidden',
  minWidth: 350,
  borderRadius: '0.75rem',
  backdropFilter: 'blur(50px)',
  overflow: 'hidden',
  '.list': {
    padding: '0.75rem',
    overflow: 'hidden',
    borderRadius: '0.75rem',
    position: 'relative',
    backdropFilter: 'blur(50px)',
    // background: '#0808084D',
    backgroundColor: hexToRGBA(theme.palette.common.black, 0.3),
    gap: '0.25rem 0',
    display: 'flex',
    flexDirection: 'column',
  },
  [theme.breakpoints.down('sm')]: {},
}));
const SubPanelItem = styled(Link)(({ theme }) => ({
  fontSize: '1rem',
  lineHeight: '1.5rem',
  fontWeight: 400,
  color: theme.palette.text.mode,
  padding: '0.5rem 1rem',
  borderRadius: '0.75rem',
  transition: 'all .35s',
  '&:hover, &.active': {
    backgroundColor: hexToRGBA(theme.palette.common.white, 0.1),
    transition: 'all .35s',
  },
  [theme.breakpoints.down('sm')]: {},
}));

const Wrap = styled(Stack)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {},
}));

const WrapContent = styled(Box)(({ theme }) => ({
  width: '100%',
  height: 'calc(100vh - 52px)',
  backgroundColor: theme.palette.background.default,
  position: 'fixed',
  zIndex: 2000,
  top: '52px',
  padding: '1rem',
  borderTop: '1px solid rgba(97, 97, 97, 0.2)',
  borderRight: '1px solid rgba(97, 97, 97, 0.2)',
  left: '-100%',
  transition: 'all 0.45s cubic-bezier(0.81, 0.2, 0.32, 0.93)',
  '&.active': {
    left: 0,
    transition: 'all 0.45s cubic-bezier(0.81, 0.2, 0.32, 0.93)',
  },
  '&.is-mobile.active': {
    '.list': {
      li: {
        width: '100%',
        transitionDelay: '0.4s',
        transform: 'translateY(0rem)',
        opacity: '1',
        transition: 'all var(--delay)',
      },
    },
  },
  '&.is-mobile': {
    '.list': {
      flexDirection: 'column',
      li: {
        width: '100%',
        transform: 'translateY(3rem)',
        opacity: '0',
        transition: 'all var(--delay)',
        '&:hover': {
          '.dropdown-icon': {
            transform: 'rotate(0)',
            transition: 'all .25s',
          },
        },
        '.wrap': {
          width: '100%',
          justifyContent: 'space-between',
        },
        '&.active': {
          '.dropdown-icon': {
            transform: 'rotate(-180deg)',
            transition: 'all .25s',
          },
        },
      },
    },
    '.panel': {
      position: 'relative',
      opacity: 1,
      transform: 'translate(0)',
      visibility: 'visible',
      // padding: '0.5rem',
      height: '0',
      transition: 'all .25s',
      '&.active': {
        height: 'var(--h-panel)',
        transition: 'all .25s',
      },
    },
  },
  [theme.breakpoints.down('sm')]: {},
}));

const List = styled('ul')(({ theme }) => ({
  display: 'flex',
  listStyle: 'none',
  [theme.breakpoints.down('sm')]: {},
}));
const ListItem = styled('li')(({ theme }) => ({
  '.wrap': {
    padding: '0.425rem 1rem',
    margin: '0.2rem 0',
    borderRadius: '0.75rem',
  },
  '.dropdown-icon': {
    transition: 'all .25s',
  },
  cursor: 'pointer',
  position: 'relative',
  transition: 'all .25s',
  '&.active-scroll': {
    '&:hover': {
      '.wrap': {
        backgroundColor: hexToRGBA(theme.palette.common.black, 0.05),
        transition: 'all .25s',
      },
    },
  },
  '&.active': {
    '.wrap': {
      backgroundColor: hexToRGBA(theme.palette.common.white, 0.1),
      transition: 'all .25s',
    },
  },
  '&.active.active-scroll': {
    '.wrap': {
      backgroundColor: hexToRGBA(theme.palette.common.black, 0.05),
      transition: 'all .25s',
    },
  },
  '&:hover': {
    '.dropdown-icon': {
      transform: 'rotate(-180deg)',
      transition: 'all .25s',
    },
    '.wrap': {
      backgroundColor: hexToRGBA(theme.palette.common.white, 0.1),
      transition: 'all .25s',
    },
    '.panel': {
      opacity: 1,
      visibility: 'visible',
      transform: 'translateY(0rem)',
      transition: 'all .25s',
    },
  },
  '.label': {
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
    color: theme.palette.text.mode,
  },
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
}));

export default NavigationSidebar;
