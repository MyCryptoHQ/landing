import { IconName, Link, Flex, Icon, Text } from '@components';
import { Article } from '@types';

export const ArticleLink = ({ icon, title, text, link }: Article) => (
  <Link href={link} width={{ _: '90%', sm: '500px' }} mx="40px" my="20px">
    <Flex flexDirection="row" alignItems="center">
      <Flex
        justifyContent="center"
        alignItems="center"
        alignSelf="flex-start"
        height={{ _: '32px', sm: '64px' }}
        width={{ _: '32px', sm: '64px' }}
        backgroundColor="banner"
        sx={{ borderRadius: '50%' }}
      >
        <Icon name={icon} width={{ _: '10px', sm: '20px' }} />
      </Flex>
      <Flex flexDirection="column" flex={1} mx="25px">
        <Text fontWeight="bold" fontSize={{ _: '14px', sm: '18px' }}>
          {title}
        </Text>
        <Text fontSize={{ _: '12px', sm: '14px' }} mt="10px">
          {text}
        </Text>
      </Flex>
      <Icon name="caret" height="15px" sx={{ transform: 'rotate(270deg)' }} />
    </Flex>
  </Link>
);
