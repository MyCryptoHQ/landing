import { Flex, Text, Link, Icon, IconName } from '@components';

export const GetStartedButton = ({
  icon,
  title,
  link,
  href,
}: {
  icon: IconName;
  title: string;
  link: string;
  href: string;
}) => (
  <Flex
    flexDirection="row"
    justifyContent={{ _: 'flex-start', md: 'flex-end' }}
    px={{ _: '40px', md: '40px' }}
    py={{ _: '15px', md: '20px' }}
    mx={{ _: 0, md: '25px' }}
    my={{ _: '20px', md: 0 }}
    width={{ _: '100%', md: '315px' }}
    maxWidth={{ _: '350px', md: '315px' }}
    height={{ _: 'auto', md: '80px' }}
    backgroundColor="blue_muted"
    sx={{ borderRadius: '18px', position: 'relative' }}
  >
    <Icon
      name={icon}
      height={{ _: '55px', md: '80px' }}
      sx={{
        position: 'absolute',
        left: '40px',
        bottom: ['10px', null, '20px'],
      }}
    />
    <Flex flexDirection={{ _: 'row', md: 'column' }} pl={{ _: '70px', md: 0 }}>
      <Text fontSize={{ _: '14px', md: '16px' }}>{title}</Text>
      <Link
        fontSize={{ _: '14px', md: '16px' }}
        href={href}
        ml={{ _: '5px', md: 0 }}
      >
        {link}
      </Link>
    </Flex>
  </Flex>
);
