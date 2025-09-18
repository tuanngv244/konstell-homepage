'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { WIDTH_MEDIUM } from '@/@core/configs';
import { useGSAP } from '@gsap/react';
import { styled, Tab, Tabs } from '@mui/material';
import gsap from 'gsap';
import { Flip } from 'gsap/Flip';
import { useTranslation } from 'next-i18next';
import { useState } from 'react';

gsap.registerPlugin(Flip);

type Props = {};

const RecruitmentSection = ({}: Props) => {
  const { t } = useTranslation('common');
  const [actTab, setActTab] = useState<string>('join-winways');

  const _onChangeTab = (_: unknown, v: string) => {
    setActTab(v);
  };

  useGSAP(() => {
    const solutionEles = document.querySelectorAll('.solution-item');
    const img = document.querySelector('.img-wrap');
    gsap.fromTo(
      solutionEles,
      { opacity: 0, scale: 0.6, duration: 0.2, ease: 'power1.inOut' },
      { opacity: 1, scale: 1, duration: 0.6, ease: 'power1.inOut', stagger: 0.15 },
    );
    gsap.fromTo(
      img,
      { opacity: 0, duration: 0.2, scale: 0.6, ease: 'power1.inOut' },
      {
        opacity: 1,
        duration: 0.2,
        scale: 1,
        ease: 'power1.inOut',
      },
    );
  }, []);

  return (
    <section className="recruitment-section bg-white sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="flex flex-col items-center justify-center max-w-[768px] mx-auto ">
          <p className="text-primary-500 xs:text-[1.125rem] sm:!text-[1.5rem] leading-[2rem] font-normal mb-1">
            {t('companyPage.recruitment')}
          </p>
          <h3
            className="section-title text-center"
            dangerouslySetInnerHTML={{
              __html: t('companyPage.weAreWelcomeToHaveNewAndExperiencedEmployeesInFrequent'),
            }}
          />
        </div>
        <div className="flex xs:flex-col xs:mb-4 sm:!mb-[4rem] xs:mt-6 sm:!mt-[4.5rem]">
          <TabStyle value={actTab} onChange={_onChangeTab}>
            <Tab value="join-winways" label={t('companyPage.joinWinways')} />
            <Tab value="hiring-process" label={t('companyPage.hiringProcess')} />
            <Tab value="welfare-system" label={t('companyPage.welfareSystem')} />
          </TabStyle>
        </div>

        <div className="grid xs:grid-cols-1 sm:!grid-cols-2  sm:!grid-rows-[220px_220px] xs:gap-4 sm:!gap-[1.5rem]">
          <div className="xs:row-span-1 sm:!row-span-2 rounded-lg border border-solid bg-grey-200 border-grey-100 xs:p-4 sm:!p-8 sm:!pr-0 flex flex-col">
            <div className="flex xs:flex-col sm:!flex-row xs:gap-4 sm:!gap-[2rem]">
              <div className="flex-[2] flex flex-col">
                <h6 className="text-[1.5rem] xs:mb-[1rem] sm:!mb-[1.5rem] leading-[2rem] font-medium text-primary-500">
                  {t('companyPage.recruitmentDepartment')}
                </h6>
                <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-normal text-grey-900">
                  {t('companyPage.weAreLookingForImaginativeIndividuals')}
                </p>
              </div>
              <div className="flex-1">
                <img
                  src="/images/pages/company/recruitment-section-img-1.png"
                  alt=""
                  className="xs:w-auto sm:!w-full h-full mx-auto"
                />
              </div>
            </div>
            <div className="flex xs:flex-col sm:!flex-row  xs:items-start sm:!items-center xs:gap-2 sm:!gap-4 mb-[1.5rem]">
              <HeroIcons.ChartCandlestick />
              <div className="flex flex-col">
                <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] mb-1  font-medium text-grey-500">
                  {t('companyPage.finance')}
                </p>
                <ul className="flex flex-row xs:gap-2 sm:!gap-4">
                  <li className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    {t('companyPage.stock')}
                  </li>
                  <div className="w-[1px] h-[1.25rem] bg-gray-200" />
                  <li className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    {t('companyPage.bank')}
                  </li>
                  <div className="w-[1px] h-[1.25rem] bg-gray-200" />
                  <li className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    {t('companyPage.futures')}
                  </li>
                  <div className="w-[1px] h-[1.25rem] bg-gray-200" />
                  <li className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    {t('companyPage.otherFinancialRoles')}
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex xs:flex-col sm:!flex-row  xs:items-start sm:!items-center xs:gap-2 sm:!gap-4">
              <HeroIcons.ServerCog />
              <div className="flex flex-col">
                <p className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] mb-1 font-medium text-grey-500">
                  {t('companyPage.engineering')}
                </p>
                <ul className="flex flex-row xs:gap-2 sm:!gap-4">
                  <li className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    {t('companyPage.server')}
                  </li>
                  <div className="w-[1px] h-[1.25rem] bg-gray-200" />
                  <li className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    {t('companyPage.pcClient')}
                  </li>
                  <div className="w-[1px] h-[1.25rem] bg-gray-200" />
                  <li className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    {t('companyPage.futures')}
                  </li>
                  <div className="w-[1px] h-[1.25rem] bg-gray-200" />
                  <li className="xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    {t('companyPage.mobileProgrammers')}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row-span-1 h-fit rounded-lg border border-solid bg-grey-200 border-grey-100 xs:p-4 sm:!p-8 sm:!pr-0 flex flex-col">
            <div className="flex xs:flex-col sm:!flex-row xs:gap-4 sm:!gap-[2rem]">
              <div className="flex-[2] flex flex-col">
                <h6 className="text-[1.5rem] xs:mb-[1rem] sm:!mb-[1.5rem] leading-[2rem] font-medium text-primary-500">
                  {t('companyPage.preferredQualifications')}
                </h6>
                <ul className="flex flex-col gap-2">
                  <li className=" flex items-center gap-4 xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    <HeroIcons.Language />
                    {t('companyPage.fluencyInASecondLanguage')}
                  </li>
                  <li className=" flex items-center gap-4 xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    <HeroIcons.GraduationCap />
                    {t('companyPage.certificationsInProgrammingOrFinanceRelatedFields')}
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="/images/pages/company/recruitment-section-img-2.png"
                  alt=""
                  className="xs:w-auto sm:!w-full h-full mx-auto"
                />
              </div>
            </div>
          </div>
          <div className="row-span-1 h-fit rounded-lg border border-solid bg-grey-200 border-grey-100 xs:p-4 sm:!p-8 sm:!pr-0 flex flex-col">
            <div className="flex xs:flex-col sm:!flex-row xs:gap-4 sm:!gap-[2rem]">
              <div className="flex-[2] flex flex-col">
                <h6 className="text-[1.5rem] xs:mb-[1rem] sm:!mb-[1.5rem] leading-[2rem] font-medium text-primary-500">
                  {t('companyPage.applyViaEmail')}
                </h6>
                <ul className="flex flex-col gap-2">
                  <li className=" flex items-center gap-4 xs:text-[0.875rem] sm:!text-[1rem] xs:leading-[1.25rem] sm:!leading-[1.5rem] font-medium text-grey-900">
                    <HeroIcons.EmailBox />
                    <a href="mailto:win@winwaysystems.com">
                      <span className="text-grey-500">{t('common.email')}:</span>{' '}
                      win@winwaysystems.com
                    </a>
                  </li>
                </ul>
              </div>
              <div className="flex-1">
                <img
                  src="/images/pages/company/recruitment-section-img-3.png"
                  alt=""
                  className="xs:w-auto sm:!w-full h-full mx-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </MainWrapper>
    </section>
  );
};

const TabStyle = styled(Tabs)(({ theme }) => ({
  '.MuiTabs-scroller': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  '.MuiTabs-indicator': {
    display: 'none',
  },
  '.MuiTabs-flexContainer': {
    gap: '0 0.5rem',
    background: theme.palette.grey[50],
    padding: '0.25rem',
    borderRadius: '0.25rem',
  },
  button: {
    minWidth: '100px',
    borderRadius: '0.5rem',
    background: theme.palette.grey[50],
    color: theme.palette.grey[400],
    textTransform: 'initial',
    transition: 'all .25s',
    fontSize: '1rem',
    lineHeight: '1.5rem',
    fontWeight: 500,
    minHeight: '2.25rem',
    height: '2.25rem',
    '&.Mui-selected': {
      color: theme.palette.grey[900],
      background: theme.palette.common.white,
      transition: 'all .25s',
    },
  },
  [`@media (min-width: ${WIDTH_MEDIUM}px) and (max-width: 1439px)`]: {},
  [theme.breakpoints.down('lg')]: {},
  [theme.breakpoints.down('md')]: {},
  [`@media (min-width: 768px) and (max-width: 860px)`]: {
    marginTop: '1rem',
  },
  [theme.breakpoints.down('sm')]: {
    button: {
      minWidth: '100px',
    },
  },
  [`@media (min-width: 320px) and (max-width: 375px)`]: {
    button: {
      minWidth: '80px',
    },
  },
}));

export default RecruitmentSection;
