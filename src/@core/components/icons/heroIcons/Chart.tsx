import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const Chart: FunctionComponent<Props> = ({ size, pathProps, ...props }) => {
  return (
    <svg
      width={size || 40}
      height={size || 40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M20.0007 26.6667V35M26.6673 23.3333V35M33.334 16.6667V35M36.6673 5L22.2573 19.41C22.1799 19.4876 22.0879 19.5492 21.9867 19.5912C21.8855 19.6332 21.7769 19.6548 21.6673 19.6548C21.5577 19.6548 21.4492 19.6332 21.3479 19.5912C21.2467 19.5492 21.1547 19.4876 21.0773 19.41L15.5907 13.9233C15.4344 13.7671 15.2225 13.6793 15.0015 13.6793C14.7805 13.6793 14.5686 13.7671 14.4123 13.9233L3.33398 25M6.66732 30V35M13.334 23.3333V35"
        stroke="#6F77DA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default Chart;
