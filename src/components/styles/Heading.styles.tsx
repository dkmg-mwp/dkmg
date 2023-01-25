import React from 'react';
import styled from 'styled-components';

const H1 = styled.h1`
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.5em;
    letter-spacing: 0.01em;
    z-index: 1;
`;

const H2 = styled.h2`
    font-size: 1.9rem;
    font-weight: medium;
    line-height: 1.5em;
`;

const H3 = styled.h3`
    font-size: 1.6rem;
    font-weight: bold;
`;

const H4 = styled.h4`
    font-size: 1.5rem;
    font-weight: 800;
`;

const H5 = styled.h5`
    font-size: 1.2rem;
    margin: 0;
    font-weight: 500;
    z-index: 1;
`;

const H6 = styled.h6`
    font-size: 1rem;
    margin: 0;
    font-weight: 700;
    letter-spacing: 0.2px;
`;

const Paragraph = styled.p`
    font-size: 1.2rem;
    font-weight: 400;
    margin: 0;
    letter-spacing: 0.2px;
`;

const headings = {
    h1: H1,
    h2: H2,
    h3: H3,
    h4: H4,
    h5: H5,
    h6: H6,
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
