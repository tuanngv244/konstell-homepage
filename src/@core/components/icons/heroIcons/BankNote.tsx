import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const BankNote: FunctionComponent<Props> = ({ size = 24, pathProps, ...props }) => {
  return (
    <svg
      width={size || 16}
      height={size || 10}
      viewBox="0 0 16 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M3.99967 5H4.00634M11.9997 5H12.0063M2.66634 1H13.333C14.0694 1 14.6663 1.59695 14.6663 2.33333V7.66667C14.6663 8.40305 14.0694 9 13.333 9H2.66634C1.92996 9 1.33301 8.40305 1.33301 7.66667V2.33333C1.33301 1.59695 1.92996 1 2.66634 1ZM9.33301 5C9.33301 5.73638 8.73605 6.33333 7.99967 6.33333C7.26329 6.33333 6.66634 5.73638 6.66634 5C6.66634 4.26362 7.26329 3.66667 7.99967 3.66667C8.73605 3.66667 9.33301 4.26362 9.33301 5Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default BankNote;
