import { WIDTH_MEDIUM } from '@/@core/configs';
import { useResources } from '@/@core/hooks/useResources';
import { Button, Divider, Grid, styled, useTheme } from '@mui/material';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { HeroIcons } from '../../icons/heroIcons';
import LogoMain from '../../icons/LogoMain';
import LogoMainV2 from '../../icons/LogoMainV2';
import SocialBlog from '../../icons/SocialBlog';
import SocialFacebook from '../../icons/SocialFacebook';
import SocialInstagram from '../../icons/SocialInstagram';
import SocialLinked from '../../icons/SocialLinked';
import MainWrapper from '../sections/main-wrapper';

const Wrap = styled('footer')(({ theme }) => ({
  width: '100%',
  backgroundColor: '#101010',
  overflow: 'hidden',
  position: 'relative',
  padding: '90px 0 40px 0',
  minHeight: '100%',
  backgroundImage: 'url(/images/footer/footer-bg.png)',
  backgroundRepeat: 'no-repeat',
  backgroundAttachment: 'fixed',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  '.intro': {
    fontSize: '1.125rem',
    lineHeight: '1.75rem',
    color: theme.palette.grey[300],
    fontWeight: 400,
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {
    padding: '70px 0.5rem',
  },
}));

const SocialList = styled('ul')(({ theme }) => ({
  display: 'inline-flex',
  alignItems: 'center',
  gap: '0 1.5rem',
  listStyleType: 'none',
  li: {
    svg: {
      path: {
        transition: 'all .25s',
      },
    },
    '&:hover': {
      svg: {
        path: {
          fill: theme.palette.common.white,
          transition: 'all .25s',
        },
      },
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [theme.breakpoints.down('sm')]: {},
}));

type FooterProps = {
  footerContent?: any;
};

const Footer = (props: FooterProps) => {
  const { t, i18n } = useTranslation('common');
  const { navLinks } = useResources();

  const _onScrollToSection = (id: string) => {
    const ele = document.getElementById(id);
    ele.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  const socials = [
    {
      label: 'Linked',
      Icon: SocialLinked,
      href: 'https://www.linkedin.com/company/winways-global',
    },
    {
      label: 'Instagram',
      Icon: SocialInstagram,
      href: 'https://www.instagram.com/winways.kr/',
    },
    {
      label: 'Facebook',
      Icon: SocialFacebook,
      href: 'https://www.facebook.com/winways.kr',
    },
    {
      label: 'Blog',
      Icon: SocialBlog,
      href: 'https://blog.naver.com/winways-global',
    },
  ];

  const generalInfos = {
    tel: '(02) 769-1974/5',
    tax: '(02) 769-1976',
    email: 'win@winwaysystems.com',
    address: '#411, 106 Gukjegeumyung-ro, Yeongdeungpo-gu, Seoul, 07343 Korea',
  };

  return (
    <Wrap id="contact">
      <MainWrapper sxProps={{ zIndex: 2, position: 'relative' }}>
        <div className="flex items-center flex-col gap-[0.5rem_0]">
          <LogoMainV2 />
          <h3 className="xs:text-[1.75rem] sm:!text-[3.125rem] max-xs:!text-[1rem] text-center max-w-[500px] xs:leading-[2rem]  sm:!leading-[4rem] font-medium text-white">
            {t(['homePage.becomeYourFinancialPartner'])}
          </h3>
          <Link href={'#'} className="xs:mt-[1.25rem] sm:!mt-[2.5rem]" passHref>
            <Button
              className={clsx(
                'talk-btn rounded-tr-md shadow-none flex items-center gap-[0_0.5rem] whitespace-nowrap mt-[1rem] w-full !text-[1rem] !normal-case transition-all duration-300 ease-in-out !bg-white !text-black hover:!bg-grey-100',
              )}
              variant="contained"
            >
              {t('button.talkToAnExpert')}
              <HeroIcons.ArrowRightUp size={14} />
            </Button>
          </Link>
        </div>
        <div className=" mb-[1.5rem] flex items-center justify-between mt-[5rem]">
          <LogoMain />
          <SocialList>
            {socials.map((social, index) => {
              const Icon = social.Icon;
              return (
                <li key={index}>
                  <Link href={social.href} target="_blank">
                    <Icon />
                  </Link>
                </li>
              );
            })}
          </SocialList>
        </div>
        <Grid container>
          <Grid item xs={12} md={8} className="xs:py-4 sm:!py-0">
            <Grid container className="">
              {navLinks.map(
                (nav, navIndex) =>
                  nav?.title !== 'Projects' && (
                    <Grid
                      key={navIndex}
                      xs={12}
                      sm={6}
                      md={3}
                      className="xs:text-center sm:!text-left xs:mb-3 sm:!mb-0"
                    >
                      <Link
                        onClick={(e) => {
                          _onScrollToSection(nav.path);
                          e.preventDefault();
                        }}
                        href={nav.path || '#'}
                        className="text-[1rem] hover-line hover-line heading-[1.75rem] font-medium text-white"
                      >
                        {nav.title}
                      </Link>
                      {nav?.subs?.length > 0 && (
                        <ul className="mt-[0.5rem]">
                          {nav?.subs.map((nav, index) => (
                            <li className="p-[0.25rem_0]" key={index}>
                              <Link
                                onClick={(e) => {
                                  _onScrollToSection(nav.path);
                                  e.preventDefault();
                                }}
                                href={nav.path || '#'}
                                className="text-[0.875rem] hover-line heading-[1.25rem] font-normal text-gray-200"
                              >
                                {nav.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </Grid>
                  ),
              )}
            </Grid>
          </Grid>
          <Grid item xs={12} md={4}>
            <p className="text-[1rem] mb-[0.5rem] hover-line hover-line heading-[1.75rem] font-medium text-white">
              {t('common.winways')}
            </p>
            <div className="mb-[0.5rem] flex items-center justify-between gap-[0_1rem]">
              <a
                href={`tel:${generalInfos.tel}`}
                className="text-[0.875rem] hover-line heading-[1.25rem] font-normal text-gray-200"
              >
                {t('common.tel')}: {generalInfos.tel}
              </a>

              <a
                href={`tel:${generalInfos.tax}`}
                className="text-[0.875rem] hover-line heading-[1.25rem] font-normal text-gray-200"
              >
                {t('common.tax')}: {generalInfos.tax}
              </a>
            </div>
            <div className="mb-[0.5rem] flex items-center justify-between gap-[0_1rem]">
              <a
                href={`mailto:${generalInfos.email}`}
                className="text-[0.875rem] hover-line heading-[1.25rem] font-normal text-gray-200"
              >
                {t('common.email')}: {generalInfos.email}
              </a>
            </div>
            <div className="mb-[0.5rem] flex items-center justify-between gap-[0_1rem]">
              <p className="text-[0.875rem] hover-line heading-[1.25rem] font-normal text-gray-200">
                {t('common.address')}: {generalInfos.address}
              </p>
            </div>
          </Grid>
        </Grid>

        <Divider className="!mt-[2rem] !mb-[2rem]" />

        <p className=" text-center text-[1rem]  heading-[1.5rem] font-normal text-gray-100">
          {t('common.address')}: {generalInfos.address}
        </p>
      </MainWrapper>
    </Wrap>
  );
};

export default Footer;
