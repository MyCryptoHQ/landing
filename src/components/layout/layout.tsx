/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component.
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import { ReactNode } from 'react';
import { Flex } from '../';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  return (
    <>
      <Flex>
        <main role="main">{children}</main>
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
