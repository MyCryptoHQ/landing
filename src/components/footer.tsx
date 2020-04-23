import React from 'react';

type Props = {
  children: React.ReactNode;
};

const Footer = ({ children }: Props) => {
  return (
    <div>
      <h1>Hello</h1>
      {children}
    </div>
  );
};

export default Footer;
