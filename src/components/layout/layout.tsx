/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component.
 * See: https://www.gatsbyjs.org/docs/static-query/
 */
import { OverlayMenu } from '@components';
import { useScrollHeight } from '@hooks';
import { ReactNode, useEffect, useState } from 'react';
import { Flex } from '../';
import Footer from './Footer';

type Props = {
  children: ReactNode;
};

const Layout = ({ children }: Props) => {
  const scrollHeight = useScrollHeight();
  const [shouldShow, setShouldShow] = useState(false);

  useEffect(() => {
    if (scrollHeight < 1400) {
      shouldShow && setShouldShow(false);
    } else {
      !shouldShow && setShouldShow(true);
    }
  }, [scrollHeight]);

  return (
    <>
      <OverlayMenu shouldShow={shouldShow} />
      <Flex>
        <main role="main">{children}</main>
      </Flex>
      <Footer />
    </>
  );
};

export default Layout;
