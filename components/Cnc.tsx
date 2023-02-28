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
          3- CLOUD NATIVE COMPUTING SPECIALIZATION
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.</Text>


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
              CN-351: Certified Kubernetes
              </ListItem>
              <ListItem>
              Application Developer (CKAD)

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
              CN-361: Developing Multi-Cloud 
              </ListItem>
              <ListItem>
              APIs using CDK for Terraform
              </ListItem>
              
            </List>

          </VStack>
        </PriceWrapper>

      </Stack></>
  );
}
