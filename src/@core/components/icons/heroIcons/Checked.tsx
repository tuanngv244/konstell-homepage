import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const Checked: FunctionComponent<Props> = ({ size = 24, pathProps, ...props }) => {
  return (
    <svg
      width={size || 16}
      height={size || 16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M13.3327 4L5.99935 11.3333L2.66602 8"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default Checked;
