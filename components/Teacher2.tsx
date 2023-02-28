"use client";
import {
    Heading,
    Avatar,
    Box,
    Center,
    Image,
    Flex,
    Text,
    Stack,
    Button,
    useColorModeValue,
  } from '@chakra-ui/react';
  import { SiLinkedin } from 'react-icons/si';
  import { Link } from '@chakra-ui/react';
  
  export default function SocialProfileWithImage() {
    return (
      <Center py={6}>
        <Box
          maxW={'270px'}
          w={'full'}
          bg={useColorModeValue('white', 'gray.800')}
          boxShadow={'2xl'}
          rounded={'md'}
          overflow={'hidden'}>
            
          <Image
            h={'120px'}
            w={'full'}
            src={
              'https://images.unsplash.com/photo-1612865547334-09cb8cb455da?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80'
            }
            objectFit={'cover'}
          />
          <Flex justify={'center'} mt={-12}>
            <Avatar
              size={'xl'}
              src={
                'https://i.ibb.co/jwL1zsR/1562700934047.jpg'
              }
              
              css={{
                border: '2px solid white',
              }}
            />
          </Flex>
  
          <Box p={6}>
            <Stack spacing={0} align={'center'} mb={5}>
              <Heading fontSize={'2xl'} fontWeight={500} fontFamily={'body'}>
                Hira Khan
              </Heading>
              <Text color={'gray.500'}>Co-Founder Panacloud</Text>
            </Stack>
           
                        <Link
                            _hover={{
                                textDecoration: "none",
                            }}
                            href="https://www.linkedin.com/in/hira-khan-76523540/"
                        >
                           <Button w={'full'} colorScheme={'messenger'} leftIcon={<SiLinkedin />}>
                           <Center>
                           <Text>Follow On Linkedin</Text>
                           </Center>
                           </Button>
                           </Link>
                           
            </Box>
  
           
        </Box>
      </Center>
    );
  }
 