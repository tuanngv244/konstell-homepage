// ** React Imports
import { Fragment } from 'react';

// ** Next Imports
import Link from 'next/link';

// ** MUI Imports
import Box from '@mui/material/Box';
import Chip from '@mui/material/Chip';
import List from '@mui/material/List';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import { useParams, usePathname, useRouter } from 'next/navigation';

// ** Third Party Imports
import clsx from 'clsx';

// ** Theme Config Import
import themeConfig from '@/infra/configs/themeConfig';

import CanViewNavLink from '@/@core/acl/CanViewNavLink';
import Translations from '../../translations';

// ** Util Import
import { WIDTH_MEDIUM } from '@/@core/configs';
import { useTranslation } from 'react-i18next';

const WrapList = styled(List)(({ theme }) => ({
  padding: 0,
  marginRight: '0 !important',
}));

const ListItem = styled(Box)(({ theme }: { theme: any }) => ({
  width: 'auto',
  color: theme.palette.text.primary,
  padding: '0.325rem 1rem',
  '&:hover p': {
    backgroundColor: 'transparent',
    color: theme.palette.primary.main,
  },
  '&.active, &.active:hover': {
    p: {
      fontWeight: 600,
    },
  },
  '&.active .MuiTypography-root, &.active .MuiListItemIcon-root': {
    color: theme.palette.primary.main,
  },
}));

const LinkStyle = styled(Typography)(({ theme }: { theme: any }) => ({
  fontSize: '1.25rem',
  lineHeight: '1.75rem',
  fontWeight: 500,
  color: theme.palette.grey[900],
  [`@media (min-width: ${WIDTH_MEDIUM}px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

type HorizontalNavLinkProps = {
  item?: any;
  settings?: any;
  hasParent?: any;
  nameClass?: string;
};

const HorizontalNavLink = (props: HorizontalNavLinkProps) => {
  // ** Props
  const { item, settings, hasParent, nameClass } = props;

  const { t, i18n } = useTranslation();

  // ** Hook & Vars
  const router = useRouter();
  const pathname = usePathname();
  const query = useParams<{ category: string }>();

  const { navSubItemIcon, menuTextTruncate } = themeConfig;
  const Wrapper = !hasParent ? WrapList : Fragment;

  const isNavLinkActive = () => {
    let routerPath = pathname.slice(0, pathname.length - 1);

    if (
      routerPath === item.path ||
      isActivePage(routerPath) ||
      (pathname === '/' && item.path === '/')
    ) {
      return true;
    } else {
      return false;
    }
  };

  const isActivePage = (routerPath: any) => {
    return (
      (routerPath.includes('find-out') && routerPath === item.path + '/' + query?.category) ||
      (routerPath.includes('insight') && routerPath === item.path + '/' + query?.category) ||
      (routerPath.includes('customer-support') && routerPath === item.path + '/' + query?.category)
    );
  };

  return (
    <CanViewNavLink navLink={item}>
      <Wrapper
        {...(!hasParent
          ? {
              component: 'div',
              sx: {
                // py: settings.skin === 'bordered' ? 2.625 : 2.75,
                backgroundColor: nameClass && isNavLinkActive() ? '#F5F7FA' : '',
              },
            }
          : {})}
      >
        <Link href={`${item.path}`} passHref style={{ textDecoration: 'none' }}>
          <ListItem
            className={clsx({ active: isNavLinkActive() })}
            onClick={(e) => {
              if (item.path === undefined) {
                e.preventDefault();
                e.stopPropagation();
              }
            }}
            sx={{
              ...(item.disabled ? { pointerEvents: 'none' } : { cursor: 'pointer' }),
              ...(!hasParent
                ? {
                    // px: 5.5,
                    borderRadius: 0,
                    '&.active, &.active:hover': {
                      boxShadow: 0,
                      '& .MuiTypography-root, & .MuiListItemIcon-root': {
                        color: (theme) => theme.palette.primary.main,
                        backgroundColor: 'transparent',
                      },
                    },
                    // pr: item.latest ? 0 : 5.5,
                  }
                : {
                    // px: 5,
                  }),
            }}
          >
            <Box
              sx={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Box
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  ...(menuTextTruncate && { overflow: 'hidden' }),
                }}
              >
                <LinkStyle
                  {...(menuTextTruncate && {
                    noWrap: true,
                    fontSize: ['en', 'ja'].includes(i18n.language) ? '16px' : '18px',
                  })}
                >
                  {item?.title === '홈' ? (
                    t(`navLinks.${item.title}`)
                  ) : (
                    <Translations text={t(`navLinks.${item.title}`)} />
                  )}
                </LinkStyle>
              </Box>
              {item.badgeContent ? (
                <Chip
                  label={item.badgeContent}
                  color={item.badgeColor || 'primary'}
                  sx={{
                    ml: 1.6,
                    height: 20,
                    fontWeight: 500,
                    '& .MuiChip-label': {
                      px: 1.5,
                      textTransform: 'capitalize',
                    },
                  }}
                />
              ) : null}
            </Box>
          </ListItem>
        </Link>
      </Wrapper>
    </CanViewNavLink>
  );
};

export default HorizontalNavLink;
