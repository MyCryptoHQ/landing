import { useState } from 'react';
import { IconName, Heading, Flex, Text, Icon, Box } from '@components';
import { CarouselElement } from '@types';
import { borderBottom } from 'styled-system';

export const Carousel = ({
  title,
  elements,
  inverted = false,
}: {
  title: string;
  inverted?: boolean;
  elements: CarouselElement[];
}) => {
  const [selected, setSelected] = useState<CarouselElement>(elements[0]);
  return (
    <Flex
      flexDirection={{ _: 'column', md: inverted ? 'row-reverse' : 'row' }}
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        alignItems="flex-start"
        flexDirection="column"
        mr={{ _: 0, sm: inverted ? '0px' : '40px' }}
        ml={{ _: 0, sm: inverted ? '40px' : '0px' }}
        width={{ _: '100%', sm: '600px' }}
      >
        <Heading
          fontSize={{ _: '22px', sm: '40px' }}
          fontWeight={700}
          px={{ _: '30px', sm: 0 }}
        >
          {title}
        </Heading>
        <Flex
          flexDirection="row"
          flexWrap="nowrap"
          alignItems="center"
          justifyContent={{ _: 'flex-start', sm: 'center', md: 'flex-start' }}
          overflowX={{ _: 'auto', sm: 'visible' }}
          overflowY="hidden"
          width="100%"
          sx={{
            WebkitOverflowScrolling: 'touch',
            '&::-webkit-scrollbar': {
              display: 'none',
            },
          }}
        >
          {elements.map((el) => (
            <Text
              onClick={() => setSelected(el)}
              fontSize="24px"
              fontWeight={700}
              flex="0 0 auto"
              color={
                elements.indexOf(el) === elements.indexOf(selected)
                  ? 'alert_purple'
                  : 'greyed'
              }
              my="20px"
              mr="30px"
              lineHeight="32px"
              sx={{
                '&:first-child': {
                  ml: ['30px', 0],
                },
                '&:last-child': {
                  mr: ['30px', 0],
                },
                whiteSpace: 'nowrap',
                cursor: 'pointer',
                borderBottom: '2px solid',
                borderBottomColor:
                  elements.indexOf(el) === elements.indexOf(selected)
                    ? 'alert_purple'
                    : 'transparent',
              }}
            >
              {el.title}
            </Text>
          ))}
        </Flex>

        <Text
          display={{ _: 'none', md: 'block' }}
          fontSize="20px"
          height={{ _: 'auto', sm: '70px' }}
          lineHeight={1.7}
          px={{ _: '30px', sm: 0 }}
        >
          {selected.text}
        </Text>
      </Flex>
      <Flex
        width={{ _: '247px', sm: '400px' }}
        height={{ _: '247px', sm: '400px' }}
        my={{ _: '50px', md: 0 }}
      >
        <Icon name={selected.icon} width="100%" />
      </Flex>
      <Text
        display={{ _: 'block', md: 'none' }}
        fontSize="20px"
        height={{ _: 'auto', sm: '70px' }}
        lineHeight={1.7}
        px={{ _: '30px', sm: 0 }}
      >
        {selected.text}
      </Text>
    </Flex>
  );
};
