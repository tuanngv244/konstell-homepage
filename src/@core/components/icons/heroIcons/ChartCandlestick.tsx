import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const ChartCandlestick: FunctionComponent<Props> = ({ size, pathProps, ...props }) => {
  return (
    <svg
      width={size || 24}
      height={size || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9 5V9M9 15V17M17 3V5M17 13V16M3 3V19C3 19.5304 3.21071 20.0391 3.58579 20.4142C3.96086 20.7893 4.46957 21 5 21H21M8 9H10C10.5523 9 11 9.44772 11 10V14C11 14.5523 10.5523 15 10 15H8C7.44772 15 7 14.5523 7 14V10C7 9.44772 7.44772 9 8 9ZM16 5H18C18.5523 5 19 5.44772 19 6V12C19 12.5523 18.5523 13 18 13H16C15.4477 13 15 12.5523 15 12V6C15 5.44772 15.4477 5 16 5Z"
        stroke="#6F77DA"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default ChartCandlestick;
