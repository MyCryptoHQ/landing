import React from 'react';
import { graphql } from 'gatsby';

import {
  SEO,
  Flex,
  Heading,
  Text,
  ContactUsBox,
  Link,
  Icon,
} from '@components';

const TableOfContents = {
  'The Blockchain': '#the-blockchain',
  'MyCrypto Collection of Information': '#mycrypto-collection-of-information',
  'EtherScamDB / CryptoScamDB': '#etherscamdb--cryptoscamdb',
  'Storage of Information': '#storage-of-information',
  'Use of Information': '#use-of-information',
  Cookies: '#cookies',
  'Third Parties': '#third-parties',
  'Law Enforcement Purposes': '#law-enforcement-purposes',
  Amendments: '#amendments',
  'Contact Us': '#contact-us',
};

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

const PrivacyPolicyPage = ({ data }: QueryResult) => (
  <>
    <SEO title="Privacy Policy" />
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
        <ContactUsBox title="Jump to">
          {Object.entries(TableOfContents).map(([label, link]) => {
            return (
              <Flex
                flexDirection="row"
                justifyContent="s"
                padding="5px"
                key={label}
              >
                <Icon name={'linkJumpTo'} height="15px" mr="10px" />
                <Text color="white" fontSize="14px">
                  <Link href={link} internal={true}>
                    {label}
                  </Link>
                </Text>
              </Flex>
            );
          })}
        </ContactUsBox>
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
