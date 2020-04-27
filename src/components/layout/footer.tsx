import React from 'react';
import { Box } from '@/components';

type Props = {
  children: React.ReactNode;
};

const Footer = ({ children }: Props) => {
  return (
    <footer>
      <Box
        sx={{
          bg: 'accent',
          color: 'white',
        }}
      >
        {children}
      </Box>
    </footer>
  );
};

export default Footer;
