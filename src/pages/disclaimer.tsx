import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import { SEO, Flex, Heading, Text, ContactUsBox } from '@components';

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 90%;
  justify-content: center;
  border: 1px solid red;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  flex: 1;

  &:nth-child(2) {
    margin: 100px 0 0 0;
  }
`;

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
    </>
  );
};

const DisclaimerPage = ({ data }: QueryResult) => (
  <>
    <SEO title="Disclaimer" />
    <Flex
      justifyContent="center"
      backgroundColor="transparent"
      margin={{ _: '60px 15px', lg: '50px 50px' }}
    >
      <Flex
        flexDirection="column"
        alignItems="left"
        padding="25px"
        maxWidth="1245px"
        width="100%"
        margin={{ _: '60px 15px', lg: '0px 0' }}
      >
        {getHeading({ data })}
        <Text variant="largeBase" textAlign="left" mt="20px" mb="30px">
          {md({ data })}
        </Text>
      </Flex>
      <Flex
        flexDirection="column"
        alignItems="flex-start"
        padding="25px"
        maxWidth="700px"
        width="100%"
        margin={{ _: '0px 0', lg: '0px 0' }}
      >
        <ContactUsBox />
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
    allMarkdownRemark(filter: { fileAbsolutePath: { regex: "/disclaimer/" } }) {
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

export default DisclaimerPage;
