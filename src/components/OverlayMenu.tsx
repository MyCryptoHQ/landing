import { Box, Flex, Icon, Text, Link, MenuButton } from '@components';
import { MENU_LINKS } from '@config';
import { getRoute } from '@utils';
import { useEffect, useState } from 'react';

export const OverlayMenu = ({ shouldShow }: { shouldShow: boolean }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => setIsOpen(!isOpen);

  useEffect(() => {
    !shouldShow && setIsOpen(false);
  }, [shouldShow]);

  return (
    <Box
      position="fixed"
      bottom={{ _: '50px', sm: '100px' }}
      right={{ _: '10px', sm: '40px' }}
      zIndex={999}
      sx={{
        transform: shouldShow ? 'translateX(0)' : 'translateX(200%)',
        transition: 'all .3s ease-in-out',
      }}
    >
      <Flex flexDirection="column" alignItems="flex-end">
        <Flex
          flexDirection="column"
          mb="10px"
          width="270px"
          pr={{ _: '20px', sm: '30px' }}
          pl="30px"
          maxHeight={isOpen ? '400px' : '0px'}
          opacity={isOpen ? 1 : 0}
          overflow="hidden"
          sx={{ transition: 'all .3s ease-in-out' }}
        >
          {MENU_LINKS.map((menuLink, i) => (
            <MenuButton {...menuLink} key={i} />
          ))}
        </Flex>
        <Flex
          size={{ _: '50px', sm: '90px' }}
          backgroundColor="faded_purple"
          alignItems="center"
          mr="20px"
          justifyContent="center"
          onClick={handleClick}
          sx={{
            borderRadius: '50%',
            cursor: 'pointer',
            transition: 'all .2s ease-in-out',
            ':hover': {
              transform: 'scale(1.05)',
            },
          }}
        >
          <Icon name="arrow" width={{ _: '24px', sm: '45px' }} />
        </Flex>
      </Flex>
    </Box>
  );
};
