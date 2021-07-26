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

const TableOfContents = [
  {
    title: 'The Blockchain',
    link: '#the-blockchain',
  },
  {
    title: 'MyCrypto Collection of Information',
    link: '#mycrypto-collection-of-information',
  },
  {
    title: 'EtherScamDB / CryptoScamDB',
    link: '#etherscamdb--cryptoscamdb',
  },
  {
    title: 'Storage of Information',
    link: '#storage-of-information',
  },
  {
    title: 'Use of Information',
    link: '#use-of-information',
  },
  {
    title: 'Cookies',
    link: '#cookies',
  },
  {
    title: 'Third Parties',
    link: '#third-parties',
  },
  {
    title: 'Law Enforcement Purposes',
    link: '#law-enforcement-purposes',
  },
  {
    title: 'Amendments',
    link: '#amendments',
  },
];

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
        mt="18px"
        mb="18px"
      >
        {getHeading({ data })}
        <Text variant="largeBase" textAlign="left" mt="16px" mb="16px">
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
        <ContactUsBox title="Jump to" footertitle="Contact Us">
          {TableOfContents.map((data, index) => {
            return (
              <Flex
                flexDirection="row"
                justifyContent="s"
                padding="5px"
                key={index}
              >
                <Icon name={'linkJumpTo'} height="15px" mr="10px" />
                <Link href={data.link} internal={true}>
                  <Text variant="link" color="link" fontSize="14px">
                    {data.title}
                  </Text>
                </Link>
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
