"use client";
import {
    Stack,
    Flex,
    Button,
    Text,
    VStack,
    useBreakpointValue,
    Link,
  } from '@chakra-ui/react';
  
  export default function Hero() {
    return (
      <Flex
        w={'ful'}
        h={'100vh'}
        backgroundImage={
          'url(https://img.freepik.com/free-photo/3d-abstract-cyber-particles-background-design_1048-16913.jpg?t=st=1684506453~exp=1684507053~hmac=bf6b40edffd8b8dbe2209cab9f5e1d58ad6a92e633f496c3710b3510ae9d2121)'
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
              Certified Web 3.0 And Metaverse Developer Course 
            </Text>
            <Stack direction={'row'}>
            <Link
                                
                                href="https://www.piaic.org/"
                            >
              <Button
                bg={'blue.500'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
               Apply
              </Button>
              </Link>
              <Link
                                
                                href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
                            >
              <Button
                bg={'blue.500'}
                rounded={'full'}
                color={'white'}
                _hover={{ bg: 'blue.500' }}>
              Syllabus
              </Button>
              </Link>
            </Stack>
          </Stack>
        </VStack>
      </Flex>
    );
  }
  