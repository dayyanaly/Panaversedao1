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
          SPECIALIZED TRACKS
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>After completing the first two quarters the participants will select one or more specializations consisting of two courses each: </Text>
        <Heading as="h1" fontSize="4xl">
          1- WEB 3.0 AND METAVERSE SPECIALIZATION
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.</Text>


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
                W3-351: Developing Smart Contracts

              </ListItem>
              <ListItem>
                and Planet-Scale Web 3.0 Dapps

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
              MV-361: Developing Planet-Scale 
              </ListItem>
              <ListItem>
              and Augmented Metaverse   
              </ListItem>
              <ListItem>Experiences</ListItem>
            </List>

          </VStack>
        </PriceWrapper>

      </Stack></>
  );
}