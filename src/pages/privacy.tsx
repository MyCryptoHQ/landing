import React from 'react';
import { graphql } from 'gatsby';

import { SEO, Flex, Heading, Text } from '@components';

const md = (data: any) => {
  const { html } = data.data.allMarkdownRemark.edges[0].node;

  return (
    <div>
      <div dangerouslySetInnerHTML={{ __html: html }} />
    </div>
  );
};

const getHeading = (data: any) => {
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

const PrivacyPolicyPage = ({ data }: any) => (
  <>
    <SEO title="Privacy Policy" />
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

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/privacy-policy/" } }
    ) {
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

export default PrivacyPolicyPage;
