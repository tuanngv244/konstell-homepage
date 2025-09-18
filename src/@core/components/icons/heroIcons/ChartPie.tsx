import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const ChartPie: FunctionComponent<Props> = ({ size, pathProps, ...props }) => {
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
        d="M35.3494 26.4835C34.2891 28.9909 32.6307 31.2005 30.5192 32.919C28.4077 34.6374 25.9073 35.8125 23.2368 36.3414C20.5662 36.8704 17.8067 36.737 15.1996 35.9531C12.5925 35.1692 10.2171 33.7586 8.28107 31.8446C6.34506 29.9305 4.90739 27.5714 4.09376 24.9734C3.28013 22.3754 3.11531 19.6176 3.6137 16.9412C4.11209 14.2648 5.25853 11.7512 6.95278 9.62018C8.64703 7.48918 10.8375 5.80566 13.3327 4.7168M34.9995 19.9999C35.9195 19.9999 36.6746 19.2515 36.5829 18.3365C36.1986 14.5101 34.503 10.9344 31.7834 8.2154C29.0638 5.49644 25.4877 3.80159 21.6612 3.4182C20.7446 3.32653 19.9979 4.08153 19.9979 5.00153V18.3349C19.9979 18.7769 20.1735 19.2008 20.486 19.5134C20.7986 19.8259 21.2225 20.0015 21.6646 20.0015L34.9995 19.9999Z"
        stroke="#6F77DA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default ChartPie;
