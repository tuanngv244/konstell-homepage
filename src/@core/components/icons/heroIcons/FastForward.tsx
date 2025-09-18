import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const FastForward: FunctionComponent<Props> = ({ size = 24, pathProps, ...props }) => {
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
        d="M13 19L22 12L13 5V19Z"
        stroke="#6F77DA"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M2 19L11 12L2 5V19Z"
        stroke="#6F77DA"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default FastForward;
