import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const ArrowRight: FunctionComponent<Props> = ({ size, pathProps, ...props }) => {
  return (
    <svg
      stroke="currentColor"
      fill="currentColor"
      strokeWidth={0}
      viewBox="0 0 24 24"
      width={size || 20}
      height={size || 20}
      xmlns="http://www.w3.org/2000/svg"
      {...props}

    >
      <path d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z" {...pathProps} />
    </svg>


  );
};

export default ArrowRight;
