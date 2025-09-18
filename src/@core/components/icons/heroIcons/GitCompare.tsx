import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const GitCompare: FunctionComponent<Props> = ({ size = 24, pathProps, ...props }) => {
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
        d="M3.33301 6C4.43758 6 5.33301 5.10457 5.33301 4C5.33301 2.89543 4.43758 2 3.33301 2C2.22844 2 1.33301 2.89543 1.33301 4C1.33301 5.10457 2.22844 6 3.33301 6ZM3.33301 6V10.6667C3.33301 11.0203 3.47348 11.3594 3.72353 11.6095C3.97358 11.8595 4.31272 12 4.66634 12H7.99967M7.99967 4H11.333C11.6866 4 12.0258 4.14048 12.2758 4.39052C12.5259 4.64057 12.6663 4.97971 12.6663 5.33333V10M7.99967 4L9.99967 6M7.99967 4L9.99967 2M12.6663 10C11.5618 10 10.6663 10.8954 10.6663 12C10.6663 13.1046 11.5618 14 12.6663 14C13.7709 14 14.6663 13.1046 14.6663 12C14.6663 10.8954 13.7709 10 12.6663 10ZM7.99967 12L5.99967 10M7.99967 12L5.99967 14"
        stroke="white"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default GitCompare;
