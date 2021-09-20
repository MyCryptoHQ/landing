import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 24px;
  width: 300px;
  position: relative;
  background: #ffffff;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.07);
  border-radius: 6px;
`;
const Heading = styled.div`
  font-family: Lato;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 14px;
  color: #b5bfc7;
`;
const Body = styled.div`
  position: static;
  width: 314px;
  height: 68px;
  left: 24px;
  top: 54px;
  font-family: Lato;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: #424242;
  flex: none;
  order: 1;
  flex-grow: 0;
  margin: 16px 0px;
`;

const ContactUsBox = () => {
  return (
    <Container>
      <Heading>Contact Us</Heading>
      <Body>
        If you have any questions, comments, or suggestions about our
        disclaimer, please contact MyCrypto support at{' '}
        <a href="mailto:support@mycrypto.com">support@mycrypto.com</a>
      </Body>
    </Container>
  );
};

export default ContactUsBox;
