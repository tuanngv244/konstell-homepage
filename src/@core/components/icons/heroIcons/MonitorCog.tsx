import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number; pathProps?: SVGProps<SVGPathElement> } & SVGProps<SVGSVGElement>;

const MonitorCog: FunctionComponent<Props> = ({ size = 24, pathProps, ...props }) => {
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
        d="M12 17V21M15.2 4.9L14.3 4.5M15.2 7.1001L14.3 7.5001M16.9 3.20005L16.5 2.30005M16.9 8.80005L16.5 9.70005M19.5001 2.30005L19.1001 3.20005M19.5001 9.70005L19.1001 8.80005M21.7001 4.5L20.8 4.9M21.7001 7.5001L20.8 7.1001M22 13V15C22 15.5304 21.7893 16.0391 21.4142 16.4142C21.0391 16.7893 20.5304 17 20 17H4C3.46957 17 2.96086 16.7893 2.58579 16.4142C2.21071 16.0391 2 15.5304 2 15V5C2 4.46957 2.21071 3.96086 2.58579 3.58579C2.96086 3.21071 3.46957 3 4 3H11M8 21H16M21 6C21 7.65685 19.6569 9 18 9C16.3431 9 15 7.65685 15 6C15 4.34315 16.3431 3 18 3C19.6569 3 21 4.34315 21 6Z"
        stroke="#6F77DA"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...pathProps}
      />
    </svg>
  );
};

export default MonitorCog;
