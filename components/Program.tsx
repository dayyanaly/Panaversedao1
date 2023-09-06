"use client";
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
  } from '@chakra-ui/react';
  
  export default function A() {
    return (
      <Flex
        w={'ful'}
        h={'100vh'}
        backgroundImage={
          'url(https://img.freepik.com/free-photo/glowing-gold-spiral-wet-with-vibrant-colors-generated-by-ai_188544-39958.jpg?w=826&t=st=1686255578~exp=1686256178~hmac=3446660a9e9801761dabec2a42321b29e926543f6952cff7d5f495518d82e7f6)'
        }
        backgroundSize={'cover'}
        backgroundPosition={'center center'}>
        <VStack
          w={'full'}
          justify={'center'}
          px={useBreakpointValue({ base: 4, md: 8 })}
          bgGradient={'linear(to-r, blackAlpha.600, transparent)'}>
          <Stack maxW={'2xl'} align={'flex-start'} spacing={6}>
            <Text
              color={'WHITE'}
              fontWeight={700}
              lineHeight={1.2}
              fontSize={useBreakpointValue({ base: '3xl', md: '4xl' })}>
              Courses That We Are Offering
            </Text>
            
          </Stack>
        </VStack>
      </Flex>
    );
  }
  