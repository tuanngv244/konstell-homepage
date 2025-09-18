import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const Fax: FunctionComponent<Props> = ({ size = 24, pathProps, ...props }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6 18.5H4C3.46957 18.5 2.96086 18.2893 2.58579 17.9142C2.21071 17.5391 2 17.0304 2 16.5V11.5C2 10.9696 2.21071 10.4609 2.58579 10.0858C2.96086 9.71071 3.46957 9.5 4 9.5H20C20.5304 9.5 21.0391 9.71071 21.4142 10.0858C21.7893 10.4609 22 10.9696 22 11.5V16.5C22 17.0304 21.7893 17.5391 21.4142 17.9142C21.0391 18.2893 20.5304 18.5 20 18.5H18M6 9.5V3.5C6 3.23478 6.10536 2.98043 6.29289 2.79289C6.48043 2.60536 6.73478 2.5 7 2.5H17C17.2652 2.5 17.5196 2.60536 17.7071 2.79289C17.8946 2.98043 18 3.23478 18 3.5V9.5M7 14.5H17C17.5523 14.5 18 14.9477 18 15.5V21.5C18 22.0523 17.5523 22.5 17 22.5H7C6.44772 22.5 6 22.0523 6 21.5V15.5C6 14.9477 6.44772 14.5 7 14.5Z"
        stroke="#6F77DA"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default Fax;
