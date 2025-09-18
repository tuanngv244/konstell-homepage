import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const Language: FunctionComponent<Props> = ({ size, pathProps, ...props }) => {
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
        d="M5 8L11 14M4 14L10 8L12 5M2 5H14M7 2H8M22 22L17 12L12 22M14 18H20"
        stroke="#6F77DA"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default Language;
