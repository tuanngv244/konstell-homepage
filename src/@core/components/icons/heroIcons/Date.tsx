import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number } & SVGProps<SVGSVGElement>;

const Date: FunctionComponent<Props> = ({ size, ...props }) => {
  return (
    <svg
      width={size || 18}
      height={size || 18}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.75 1V3.25M15.25 1V3.25M1 16.75V5.5C1 4.25736 2.00736 3.25 3.25 3.25H16.75C17.9926 3.25 19 4.25736 19 5.5V16.75M1 16.75C1 17.9926 2.00736 19 3.25 19H16.75C17.9926 19 19 17.9926 19 16.75M1 16.75V9.25C1 8.00736 2.00736 7 3.25 7H16.75C17.9926 7 19 8.00736 19 9.25V16.75"
        stroke="#fff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Date;
