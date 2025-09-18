import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const FileChart: FunctionComponent<Props> = ({ size, pathProps, ...props }) => {
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
        d="M23.3327 3.3335V10.0002C23.3327 10.8842 23.6839 11.7321 24.309 12.3572C24.9341 12.9823 25.782 13.3335 26.666 13.3335H33.3327M13.3327 30.0002V26.6668M19.9993 30.0002V23.3335M26.666 30.0002V20.0002M24.9993 3.3335H9.99935C9.11529 3.3335 8.26745 3.68469 7.64233 4.30981C7.0172 4.93493 6.66602 5.78277 6.66602 6.66683V33.3335C6.66602 34.2176 7.0172 35.0654 7.64233 35.6905C8.26745 36.3156 9.11529 36.6668 9.99935 36.6668H29.9993C30.8834 36.6668 31.7312 36.3156 32.3564 35.6905C32.9815 35.0654 33.3327 34.2176 33.3327 33.3335V11.6668L24.9993 3.3335Z"
        stroke="#6F77DA"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default FileChart;
