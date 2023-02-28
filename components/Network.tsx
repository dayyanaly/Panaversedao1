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
          6- NETWORK PROGRAMABLITIY AND AUTOMATION SPECIALIZATION
        </Heading>
        <Text fontSize="lg" color={'gray.500'}>More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.</Text>


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
              NPA-351: CCNA(Cisco Certified
              </ListItem>
              <ListItem>
              Network Ass.) 200-301 Certification

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
              NPA-361: Network Programmability
              </ListItem>
              <ListItem>
              and Automation
              </ListItem>
              
            </List>

          </VStack>
        </PriceWrapper>

      </Stack></>
  );
}