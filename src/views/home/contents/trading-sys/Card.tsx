import { HeroIcons } from '@/@core/components/icons/heroIcons';
import { ITradingSys } from '@/@core/types/home';
import { Button } from '@mui/material';
import clsx from 'clsx';
import { useTranslation } from 'next-i18next';
import Link from 'next/link';

type Props = {} & ITradingSys;

const Card = ({ subTitle, title, desc, img, discoverLink }: Props) => {
  const { t } = useTranslation('common');

  return (
    <div className="rounded-lg bg-white overflow-hidden xs:p-4 sm:!p-8 flex flex-col items-start">
      <p className="text-nd-600 text-[0.875rem] leading-[1.25rem] font-normal">{subTitle}</p>
      <h6 className="text-grey-900 text-[1.25rem] leading-[1.75rem] font-medium mt-2 mb-4">
        {title}
      </h6>
      <p className="text-gray-800 text-[0.875rem] leading-[1.25rem] font-normal mb-4 line-clamp-3 min-h-[60px]">
        {desc}
      </p>
      <Link href={discoverLink}>
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
      <div className="w-full h-full mt-[3.5rem]">
        <img className="w-auto mx-auto h-full max-h-[250px] object-cover" src={img} alt={title} />
      </div>
    </div>
  );
};

export default Card;
