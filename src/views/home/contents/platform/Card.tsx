import { HeroIcons } from '@/@core/components/icons/heroIcons';
import { IPlatform } from '@/@core/types/home';
import { Button } from '@mui/material';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type Props = {} & IPlatform;

const Card = ({ subTitle, title, desc, img, discoverLink }: Props) => {
  const { t } = useTranslation('common');

  return (
    <div className="rounded-lg bg-grey-200 overflow-hidden !border !border-solid !border-grey-100  xs:p-4 sm:!p-[3.75rem_3rem_3.75rem_3rem] flex  xs:flex-col sm:!flex-row gap-4 items-stretch">
      <div className="flex items-start flex-col justify-between min-h-full h-full w-[320px] xs:h-full sm:!h-[375px]">
        <div className="flex flex-col">
          <p className="text-nd-600 text-[0.875rem] leading-[1.25rem] font-normal">{subTitle}</p>
          <h6 className="text-grey-900 text-[1.25rem] leading-[1.75rem] font-medium mt-2 mb-4">
            {title}
          </h6>
          <ul>
            {Array.isArray(desc) &&
              desc?.map((item, index) => (
                <li
                  key={index}
                  className="text-gray-800 text-[0.875rem] leading-[1.25rem] font-normal mb-4"
                >
                  {item}
                </li>
              ))}
          </ul>
        </div>
        <Link href={discoverLink} style={{ marginTop: 'auto' }}>
          <Button
            className={clsx(
              'talk-btn rounded-tr-md !shadow-none flex items-center gap-[0_0.5rem] whitespace-nowrap mt-[1rem] w-full !text-[1rem] !normal-case transition-all duration-300 !border !border-solid !border-gray-400 ease-in-out !bg-white !text-black hover:!bg-grey-100',
            )}
            variant="contained"
          >
            {t('button.discover')}
            <HeroIcons.ArrowRightUp size={14} />
          </Button>
        </Link>
      </div>
      <div className="max-w-[calc(100%_-_320px)] xs:min-w-full sm:!min-w-[580px] xs:h-full sm:!h-[375px] flex items-end justify-end max-h-[375px]">
        <img className="w-auto max-w-full h-full object-cover " src={img} alt={title} />
      </div>
    </div>
  );
};

export default Card;
