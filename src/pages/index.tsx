import React from 'react';

import { URLS } from '@/config';

import { Section, Image, SEO, Heading, Button, Link } from '@/components';

const HomePage = () => {
  return (
    <>
      <SEO title="Home" />
      <h1>Hi people welcome to the live</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>

      <Section>
        <Heading>
          Ready to start managing your funds safely and confidently?
        </Heading>
        <Button variant="primary">Get Started</Button>
        <Link href={URLS.support}>
          Have Questions? We&apos;re Here to Help!
        </Link>
      </Section>
    </>
  );
};

export default HomePage;
