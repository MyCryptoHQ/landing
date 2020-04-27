import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Footer = ({ children }: Props) => {
  return <footer>{children}</footer>;
};

export default Footer;
