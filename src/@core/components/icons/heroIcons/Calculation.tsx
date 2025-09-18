import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const Calculation: FunctionComponent<Props> = ({ size = 24, pathProps, ...props }) => {
  return (
    <svg
      width={size || 12}
      height={size || 16}
      viewBox="0 0 12 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.33366 3.99967H8.66699M8.66699 9.33301V11.9997M8.66699 6.66634H8.67366M6.00033 6.66634H6.00699M3.33366 6.66634H3.34033M6.00033 9.33301H6.00699M3.33366 9.33301H3.34033M6.00033 11.9997H6.00699M3.33366 11.9997H3.34033M2.00033 1.33301H10.0003C10.7367 1.33301 11.3337 1.92996 11.3337 2.66634V13.333C11.3337 14.0694 10.7367 14.6663 10.0003 14.6663H2.00033C1.26395 14.6663 0.666992 14.0694 0.666992 13.333V2.66634C0.666992 1.92996 1.26395 1.33301 2.00033 1.33301Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default Calculation;
