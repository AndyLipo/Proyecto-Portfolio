// 'use client'

// import { For, SegmentGroup } from '@chakra-ui/react'
// import * as React from 'react'

// function normalize(items) {
//   return items.map((item) => {
//     if (typeof item === 'string') return { value: item, label: item }
//     return item
//   })
// }

// export const SegmentedControl = React.forwardRef(
//   function SegmentedControl(props, ref) {
//     const { items, ...rest } = props
//     const data = React.useMemo(() => normalize(items), [items])

//     return (
//       <SegmentGroup.Root ref={ref} {...rest} >
//         <SegmentGroup.Indicator rounded="full" />
//         <For each={data}>
//           {(item) => (
//             <SegmentGroup.Item
//               key={item.value}
//               value={item.value}
//               disabled={item.disabled}
//             >
//               <SegmentGroup.ItemText>{item.label}</SegmentGroup.ItemText>
//               <SegmentGroup.ItemHiddenInput />
//             </SegmentGroup.Item>
//           )}
//         </For>
//       </SegmentGroup.Root>
//     )
//   },
// )
import { useEffect, useRef, useState } from 'react';
import { Box, Button, Flex } from '@chakra-ui/react';

const SegmentedControl = ({ value, onValueChange, items }) => {
  const [indicatorWidth, setIndicatorWidth] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const buttonsRef = useRef([]);

  useEffect(() => {
    const activeIndex = items.indexOf(value);
    const activeButton = buttonsRef.current[activeIndex];
    
    if (activeButton) {
      setIndicatorWidth(activeButton.offsetWidth);
      setIndicatorPosition(activeButton.offsetLeft);
    }
  }, [value, items]);

  return (
    <Flex
      bg="rgba(0, 0, 0, 0.3)"
      p="2px"
      borderRadius="full"
      width="fit-content"
      position="relative"
    >
      {/* Indicator background with blur effect */}
      <Box
        position="absolute"
        height="calc(100% - 4px)"
        width={`${indicatorWidth}px`}
        transform={`translateX(${indicatorPosition}px)`}
        bg="rgba(255, 255, 255, 0.1)"
        borderRadius="full"
        transition="all 0.5s ease"
        backdropFilter="blur(4px)"
      />

      {items.map((item, index) => (
        <Button
          key={item}
          ref={el => buttonsRef.current[index] = el}
          onClick={() => onValueChange({ value: item })}
          bg="transparent"
          color="white"
          _hover={{
            bg: "transparent"
          }}
          _active={{
            bg: "transparent"
          }}
          borderRadius="full"
          px="6"
          py="2"
          fontSize="sm"
          fontWeight="medium"
          transition="all 0.5s"
          border="none"
          position="relative"
          zIndex="1"
          _focus={{ boxShadow: 'none' }}
        >
          {item}
        </Button>
      ))}
    </Flex>
  );
};

export default SegmentedControl;