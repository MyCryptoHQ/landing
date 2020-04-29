import { Link } from 'gatsby';
import React from 'react';

import { Heading, Box, Flex } from '../';

type Props = {
  siteTitle: string;
};

const Header = ({ siteTitle }: Props) => (
  <header
    style={{
      marginBottom: `1.45rem`,
    }}
  >
    <Flex
      sx={{
        bg: 'accent',
        justifyContent: 'flex-start',
      }}
    >
      <Box sx={{}}>
        <Heading>
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            {siteTitle}
          </Link>
        </Heading>
      </Box>
    </Flex>
  </header>
);

export default Header;
