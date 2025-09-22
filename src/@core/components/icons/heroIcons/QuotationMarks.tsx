import React, { FunctionComponent, SVGProps } from 'react';

type Props = { size?: number } & SVGProps<SVGSVGElement> & {
    pathProps?: SVGProps<SVGPathElement>;
}

const QuotationMarks: FunctionComponent<Props> = ({ size, pathProps, ...props }) => {
    return (

        <svg
            width={size || 22}
            height={size || 21}
            viewBox="0 0 22 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            {...props}

        >
            <path
                d="M12.7511 9.56353V0.649414H21.7117V13.9901C21.7117 16.7332 20.6398 18.7902 18.4951 20.1616H14.13C15.1254 19.3997 15.8913 18.5236 16.4275 17.533C17.0402 16.5424 17.3465 15.3615 17.3465 13.9901V9.56353H12.7511ZM0.248322 0.649414V9.56353H4.84343V13.9901C4.84343 15.3615 4.53734 16.5424 3.92466 17.533C3.38844 18.5236 2.62259 19.3997 1.62685 20.1616H5.99231C8.13674 18.7902 9.2089 16.7329 9.2089 13.9901V0.649414H0.248322Z"
                fill="black"
                {...pathProps}
            />
        </svg>


    );
};

export default QuotationMarks;
