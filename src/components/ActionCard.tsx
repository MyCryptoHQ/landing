import { Flex, Icon, Button, IconName, Text, Link } from '@components';

export const ActionCard = ({
  icon,
  title,
  text,
  button,
  link,
}: {
  icon: IconName;
  title: string;
  text: string;
  button: string;
  link: string;
}) => (
  <Flex
    width="350px"
    height="310px"
    py="30px"
    pt="90px"
    px="40px"
    mx="32px"
    mt="70px"
    mb={{ _: '30px', md: 0 }}
    sx={{ borderRadius: '6px', position: 'relative', boxShadow: 'small' }}
    flexDirection="column"
    alignItems="center"
  >
    <Flex
      sx={{ position: 'absolute', left: 0, top: '-65px' }}
      width="100%"
      justifyContent="center"
    >
      <Icon name={icon} width="123px" margin=" 0 auto" />
    </Flex>
    <Text fontSize="24px" fontWeight={700}>
      {title}
    </Text>
    <Text textAlign="center" mt="15px" mb="35px" minHeight="3rem">
      {text}
    </Text>
    <Link
      href={link}
      variant="buttons.primary"
      height="50px"
      sx={{ textDecoration: 'none', lineHeight: 'normal' }}
    >
      {button}
    </Link>
  </Flex>
);
