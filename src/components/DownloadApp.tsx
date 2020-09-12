import React, { useEffect, useState } from 'react';
import { Section, Heading, Text, Box, Flex, Icon, Button } from '@components';
import { getFeaturedOS, getRelease } from '@utils';
import { OSNames, GITHUB_RELEASE_NOTES_URL } from '@config';
import { useAnalytics } from '@hooks';
import { ANALYTICS_CATEGORIES } from '@services';

const DownloadApp = () => {
  const featuredOS = getFeaturedOS();
  const [downloadUrl, setDownloadUrl] = useState('');

  useEffect(() => {
    const getLink = async () => {
      const { releaseUrls } = await getRelease();
      const currentPlatformURL =
        releaseUrls[featuredOS] || GITHUB_RELEASE_NOTES_URL;
      setDownloadUrl(currentPlatformURL);
    };
    getLink();
  }, [featuredOS]);

  const trackDownloadDesktop = useAnalytics({
    category: ANALYTICS_CATEGORIES.DOWNLOAD_DESKTOP,
  });

  const openDownloadLink = (link: string) => {
    trackDownloadDesktop({
      actionName: `${link} download button clicked`,
    });
    const target = link === GITHUB_RELEASE_NOTES_URL ? '_blank' : '_self';
    window.open(link, target, 'noopener noreferrer');
  };

  return (
    <Section
      type="landing"
      justifyContent={{ _: 'center', md: 'space-between' }}
      flexDirection={{ _: 'column-reverse', md: 'row' }}
      bg="accent"
      color="textInvert"
      py={{ _: '50px', md: '150px' }}
      px={{ _: '5%', md: 0 }}
    >
      <Box width={{ _: '100%', md: 1 / 2 }}>
        <Heading textAlign={{ _: 'center', md: 'inherit' }}>
          Everything is Even More Secure with our Desktop App
        </Heading>
        <Text
          textAlign={{ _: 'center', md: 'inherit' }}
          variant="subHeading"
          color="textInvert"
          my="20px"
          mb={{ _: '70px', md: '20px' }}
        >
          Keep your keys out of the browser with the MyCrypto Desktop App. You
          get more access to your funds, and scammers get less access to you.
        </Text>
        <Button
          width={{ _: '100%', md: '300px' }}
          variant="primary"
          onClick={() => openDownloadLink(downloadUrl)}
        >
          Download for {OSNames[featuredOS]}
        </Button>
      </Box>
      <Box width={{ _: '100%', md: 1 / 2 }} mb={{ _: '30px', md: 0 }}>
        <Flex
          justifyContent="center"
          alignItems="center"
          width="100%"
          height="100%"
        >
          <Icon name="bottle" width={{ _: '50%', md: 'auto' }} />
        </Flex>
      </Box>
    </Section>
  );
};

export default DownloadApp;
