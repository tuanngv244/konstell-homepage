import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number } & SVGProps<SVGSVGElement> & {
  pathProps?: SVGProps<SVGPathElement>;
}

const ArrowRightUp: FunctionComponent<Props> = ({ size, pathProps, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 18 18"
      fill="#fff"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M1.5 16.5L16.5 1.5M16.5 1.5L5.25 1.5M16.5 1.5V12.75"
        stroke="#000"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default ArrowRightUp;
