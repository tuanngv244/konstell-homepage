'use client';
import { HeroIcons } from '@/@core/components/icons/heroIcons';
import MainWrapper from '@/@core/components/shared/sections/main-wrapper';
import { Button } from '@mui/material';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';
import { useResources } from '../useResources';

type Props = {};

const ListSection = ({}: Props) => {
  const { t } = useTranslation('common');

  const { tradingSyss } = useResources();

  return (
    <section className="list-section bg-grey-200 sm:!py-[60px]  xs:py-[30px] ">
      <MainWrapper>
        <div className="grid xs:grid-cols-1 sm:grid-cols-2 md:!grid-cols-3 xs:mt-[2rem] gap-6">
          {tradingSyss.map((sys, index) => (
            <div
              key={index}
              className="rounded-lg shadow-[0_2px_30px_0_rgba(50,50,50,0.08)] bg-white xs:p-4 sm:!p-8 flex flex-col gap-[2rem]"
            >
              <div className="flex flex-col">
                <p className="text-nd-600 text-[0.875rem] leading-[1.25rem] font-normal">
                  {sys.label}
                </p>
                <h6 className="text-grey-900 text-[1.25rem] leading-[1.75rem] font-medium mt-1 mb-4 ">
                  {sys.title}
                </h6>
                <p className="text-grey-800 text-[0.875rem] leading-[1.25rem] font-normal line-clamp-2 mb-[1rem]">
                  {sys.memo}
                </p>
                <Link href={sys.path}>
                  <Button
                    className={clsx(
                      'talk-btn rounded-tr-md h-[2.5rem] min-h-[2.5rem] !shadow-none w-fit flex items-center gap-[0_0.5rem] whitespace-nowrap mt-[1rem] !text-[1rem] !normal-case transition-all duration-300 !border !border-solid !border-gray-400 ease-in-out !bg-white !text-black hover:!bg-grey-100',
                    )}
                    variant="contained"
                  >
                    {t('button.discover')}
                    <HeroIcons.ArrowRightUp size={14} />
                  </Button>
                </Link>
              </div>
              <div>
                <img src={sys.img} alt={sys.title} className="w-auto h-full mx-auto" />
              </div>
            </div>
          ))}
        </div>
      </MainWrapper>
    </section>
  );
};

export default ListSection;
