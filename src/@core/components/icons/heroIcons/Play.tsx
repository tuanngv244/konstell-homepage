import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number } & SVGProps<SVGSVGElement> & {
    pathProps?: SVGProps<SVGPathElement>;
}

const Play: FunctionComponent<Props> = ({ size, pathProps, ...props }) => {
    return (
        <svg
            stroke="#fff"
            fill="#fff"
            strokeWidth={0}
            viewBox="0 0 448 512"
            width={size}
            height={size}
            xmlns="http://www.w3.org/2000/svg"
            {...props}
        >
            <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"   {...pathProps} />
        </svg>

    );
};

export default Play;
