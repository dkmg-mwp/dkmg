import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    margin: 0.5em 0em;
    line-height: 1.5em;
    letter-spacing: 0.01em;
    z-index: 10;
`;
const H2 = styled.h2`
    font-size: 2.25rem;
    font-weight: medium;
    margin: 0.5em 0em;
`;
const H3 = styled.h3`
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 0.3em;
    margin-left: 5px;
`;
const H4 = styled.h4`
    font-size: 1.25rem;
    font-weight: normal;
    margin-top: 2px;
    margin-bottom: 2px;
`;
const H5 = styled.h5`
    font-size: 1rem;
    margin: 0;
    font-weight: 500;
    z-index: 30;
`;
const Paragraph = styled.p`
    padding-top: 0.5em;
    font-size: 0.875;
    margin: 0;
`;

const headings = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    p: Paragraph,
};

type HeadingProps = {
    variant: keyof typeof headings;
    children: React.ReactNode;
};

const Heading: React.FC<HeadingProps> = ({ variant, children }) => {
    const HeadingTag = headings[variant];
    return <HeadingTag>{children}</HeadingTag>;
};

export default Heading;
