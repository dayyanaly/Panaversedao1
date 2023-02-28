"use client";
import { ReactNode } from 'react';
import {
  Box,
  Stack,
  HStack,
  Heading,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  ListIcon,
  Button,
} from '@chakra-ui/react';

function PriceWrapper({ children }: { children: ReactNode }) {
  return (
    <Box
      mb={4}
      shadow="base"
      borderWidth="1px"
      alignSelf={{ base: 'center', lg: 'flex-start' }}
      borderColor={useColorModeValue('gray.200', 'gray.500')}
      borderRadius={'xl'}>
      {children}
    </Box>
  );
}

export default function CoreCourse() {
  return (
    <><Box py={12}>
      <VStack spacing={2} textAlign="center">
        
        <Heading as="h1" fontSize="4xl">
          4- AMBIENT COMPUTING AND IOT SPECIALIZATION
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter, and Embedded Devices.</Text>


      </VStack>
      <Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
        spacing={{ base: 4, lg: 10 }}
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              QUARTER IV
            </Text>

          </Box>
          <VStack
            bg={useColorModeValue('teal.500', 'blue.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
              AC-351: Ambient Computing with 
              </ListItem>
              <ListItem>
              Voice Assistants and Matter Devices

              </ListItem>

            </List>

          </VStack>
        </PriceWrapper>

      </Stack>

    </Box><Stack
      direction={{ base: 'column', md: 'row' }}
      textAlign="center"
      justify="center"
      spacing={{ base: 4, lg: 10 }}
      py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              QUARTER V
            </Text>

          </Box>
          <VStack
            bg={useColorModeValue('teal.500', 'blue.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
              AC-361: Embedded Programming 
              </ListItem>
              <ListItem>
              using C and Rust
              </ListItem>
              
            </List>

          </VStack>
        </PriceWrapper>

      </Stack></>
  );
}