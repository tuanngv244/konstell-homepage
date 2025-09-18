import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const MonitorCheck: FunctionComponent<Props> = ({ size = 24, pathProps, ...props }) => {
  return (
    <svg
      width={size || 16}
      height={size || 14}
      viewBox="0 0 16 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M5.99967 5.66667L7.33301 7L9.99967 4.33333M7.99967 10.3333V13M5.33301 13H10.6663M2.66634 1H13.333C14.0694 1 14.6663 1.59695 14.6663 2.33333V9C14.6663 9.73638 14.0694 10.3333 13.333 10.3333H2.66634C1.92996 10.3333 1.33301 9.73638 1.33301 9V2.33333C1.33301 1.59695 1.92996 1 2.66634 1Z"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default MonitorCheck;
