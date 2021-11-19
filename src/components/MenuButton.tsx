import { Flex, Icon, IconName, Link, Text } from '@components';

export const MenuButton = ({
  link,
  text,
  icon,
}: {
  link: string;
  text: string;
  icon: IconName;
}) => (
  <Link
    href={link}
    my="5px"
    sx={{
      transition: 'all .2s ease-in-out',
      ':hover': {
        transform: 'scale(1.1)',
      },
    }}
  >
    <Flex
      flexDirection="row"
      alignItems="center"
      justifyContent="space-between"
    >
      <Flex
        justifyContent="center"
        width="140px"
        py="10px"
        mr="10px"
        backgroundColor="rgba(66, 66, 66, 0.6)"
        sx={{ borderRadius: '6px' }}
      >
        <Text color="white">{text}</Text>
      </Flex>
      <Flex
        alignItems="center"
        justifyContent="center"
        size={{ _: '50px', sm: '70px' }}
        sx={{
          boxShadow:
            '0px 3.46071px 6.92143px rgba(0, 0, 0, 0.07), inset 0px 0px 16px rgba(166, 130, 255, 0.4)',
          borderRadius: '50%',
        }}
      >
        <Icon name={icon} width={{ _: '15px', sm: '25px' }} />
      </Flex>
    </Flex>
  </Link>
);
