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
      bottom="200px"
      right="70px"
      sx={{
        transform: shouldShow ? 'translateX(0)' : 'translateX(200%)',
        transition: 'all .3s ease-in-out',
      }}
    >
      <Flex flexDirection="column" alignItems="flex-end">
        <Flex
          flexDirection="column"
          mb="10px"
          pr="10px"
          maxHeight={isOpen ? '400px' : '0px'}
          opacity={isOpen ? 1 : 0}
          overflow="hidden"
          sx={{ transition: 'all .3s ease-in-out' }}
        >
          {MENU_LINKS.map((menuLink) => (
            <MenuButton {...menuLink} />
          ))}
        </Flex>
        <Flex
          size="90px"
          backgroundColor="faded_purple"
          alignItems="center"
          justifyContent="center"
          onClick={handleClick}
          sx={{ borderRadius: '50%', cursor: 'pointer' }}
        >
          <Icon name="arrow" />
        </Flex>
      </Flex>
    </Box>
  );
};
