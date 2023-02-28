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
    <><><Box py={12}>
      <VStack spacing={2} textAlign="center">
        <Heading as="h1" fontSize="4xl">
          CORE COURSES
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each </Text>
        <Heading as="h1" fontSize="4xl">
          COMMON IN ALL
        </Heading>

        <Text fontSize="lg" color={'gray.500'}>
          The first three quarters are shared by all specialties and are dedicated to studying Object-Oriented Programming and cutting-edge Full-Stack Web 2.0 development. It is going to be a fifteen-month-long hybrid program that includes both onsite and online classes and is divided into five quarters of 13 weeks each
          Every participant of the program will start by completing the following three core courses:
        </Text>
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
              QUARTER I
            </Text>

          </Box>
          <VStack
            bg={useColorModeValue('teal.500', 'blue.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                CS-101: Object-Oriented

              </ListItem>
              <ListItem>
                Programming using TypeScript and
              </ListItem>
              <ListItem>Typescript for React</ListItem>
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
              QUARTER II
            </Text>

          </Box>
          <VStack
            bg={useColorModeValue('teal.500', 'blue.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
                W2-201: Developing Planet-Scale
              </ListItem>
              <ListItem>
                Web 2.0 Apps and APIs using 

              </ListItem>
              <ListItem>Next.js 13 and Cloud Development</ListItem>
             <ListItem> Kit (CDK) for Terraform</ListItem> 
            </List>

          </VStack>
        </PriceWrapper>

      </Stack></><Stack
        direction={{ base: 'column', md: 'row' }}
        textAlign="center"
        justify="center"
      
        spacing={{ base: 4, lg: 10 }}
        
        py={10}>
        <PriceWrapper>
          <Box py={4} px={12}>
            <Text fontWeight="500" fontSize="2xl">
              QUARTER III
            </Text>

          </Box>
          <VStack
            bg={useColorModeValue('teal.500', 'blue.700')}
            py={4}
            borderBottomRadius={'xl'}>
            <List spacing={3} textAlign="start" px={12}>
              <ListItem>
              $-101: Dollar Making Bootcamp - 
              </ListItem>
              <ListItem>
              Full-Stack Template and API Product Development  
              </ListItem>
              <ListItem>API Product Development  </ListItem>
            </List>

          </VStack>
        </PriceWrapper>

      </Stack></>
  );
}