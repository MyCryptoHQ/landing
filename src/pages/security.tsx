import React from 'react';
import { graphql } from 'gatsby';

import { SEO, Flex, Heading, Text } from '@components';

const md = (data: QueryResult) => {
  const { html } = data.data.allMarkdownRemark.edges[0].node;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

const getHeading = (data: QueryResult) => {
  const { frontmatter } = data.data.allMarkdownRemark.edges[0].node;
  return (
    <>
      <Heading variant="subHeading" color="accent" mt="20px">
        {frontmatter.title}
      </Heading>
      <Text>Last Updated: {frontmatter.date}</Text>
      <Text>
        [{' '}
        <a
          href="https://keybase.io/mycrypto/pgp_keys.asc?fingerprint=300529ec5558495b6298f347389c5789b2a41011"
          target="_blank"
          rel="noopener noreferrer nofollow"
        >
          PGP Key{' '}
          <span role="img" aria-label="Key">
            🔑
          </span>
        </a>{' '}
        ]
      </Text>
    </>
  );
};

const SecurityPage = ({ data }: QueryResult) => (
  <>
    <SEO title="Security" />
    <Flex
      justifyContent="center"
      alignItems="center"
      backgroundColor="rgb(246, 248, 250)"
    >
      <Flex
        variant="card"
        flexDirection="column"
        alignItems="left"
        padding="25px"
        maxWidth="1245px"
        width="100%"
        margin={{ _: '60px 15px', lg: '150px 0' }}
      >
        {getHeading({ data })}
        <Text variant="largeBase" textAlign="left" mt="20px" mb="30px">
          {md({ data })}
        </Text>
      </Flex>
    </Flex>
  </>
);

interface QueryResult {
  data: {
    allMarkdownRemark: {
      edges: Array<{
        node: { frontmatter: Record<string, string>; html: string };
      }>;
    };
  };
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/security/" } }) {
      edges {
        node {
          frontmatter {
            date
            title
          }
          html
        }
      }
    }
  }
`;

export default SecurityPage;
