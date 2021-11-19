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
      bottom={{ _: '50px', sm: '200px' }}
      right={{ _: '30px', sm: '70px' }}
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
          pr={{ _: '0px', sm: '10px' }}
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
          justifyContent="center"
          onClick={handleClick}
          sx={{ borderRadius: '50%', cursor: 'pointer' }}
        >
          <Icon name="arrow" width={{ _: '24px', sm: '45px' }} />
        </Flex>
      </Flex>
    </Box>
  );
};
