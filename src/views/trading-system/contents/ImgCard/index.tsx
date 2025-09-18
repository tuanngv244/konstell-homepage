import clsx from 'clsx';
import { FC } from 'react';

type Props = {
  title: string;
  img: string;
  boxTitleCls?: string;
  titleCls?: string;
  wrapCls?: string;
};

const ImgCard: FC<Props> = ({ title, img, boxTitleCls, titleCls, wrapCls }) => {
  return (
    <div
      className={clsx(
        'rounded-xl bg-grey-200 border border-solid border-grey-100 xs:p-4 sm:!p-[2rem] flex flex-col xs:gap-3 sm:!gap-[1.5rem] xs:py-[1rem] sm:!py-[2rem] xs:px-[1rem] sm:!px-[5rem]',
        wrapCls,
      )}
    >
      <div
        className={clsx(
          'bg-nd-600 py-1 px-4 rounded-[0.25rem] flex items-center justify-center text-center',
          boxTitleCls,
        )}
      >
        <h6
          className={clsx('text-white text-[1.125rem] font-semibold leading-[1.75rem]', titleCls)}
        >
          {title}
        </h6>
      </div>
      <div className="">
        <img src={img} alt={title} className="w-auto mx-auto h-full object-cover" />
      </div>
    </div>
  );
};

export default ImgCard;
