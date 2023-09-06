"use client";
import { ReactNode } from 'react';
import {
  Box,
  Flex,
  Heading,
  Text,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  Button,
  Center,
} from '@chakra-ui/react';
import Link from 'next/link';
import { SiLinkedin } from 'react-icons/si';

const Testimonial = ({ children }: { children: ReactNode }) => {
  return <Box>{children}</Box>;
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow={'lg'}
      p={8}
      rounded={'xl'}
      align={'center'}
      pos={'relative'}
      _after={{
        content: `""`,
        w: 0,
        h: 0,
        borderLeft: 'solid transparent',
        borderLeftWidth: 16,
        borderRight: 'solid transparent',
        borderRightWidth: 16,
        borderTop: 'solid',
        borderTopWidth: 16,
        borderTopColor: useColorModeValue('white', 'gray.800'),
        pos: 'absolute',
        bottom: '-16px',
        left: '50%',
        transform: 'translateX(-50%)',
      }}>
      {children}
    </Stack>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading as={'h3'} fontSize={'xl'}>
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={'center'}
      color={useColorModeValue('gray.600', 'gray.400')}
      fontSize={'sm'}>
      {children}
    </Text>
  );
};

const TestimonialAvatar = ({
  src,
  name,
  title,
}: {
  src: string;
  name: string;
  title: string;
}) => {
  return (
    <Flex align={'center'} mt={8} direction={'column'}>
      <Avatar src={src} mb={2} />
      <Stack spacing={-1} align={'center'}>
        <Text fontWeight={600}>{name}</Text>
        <Text fontSize={'sm'} color={useColorModeValue('gray.600', 'gray.400')}>
          {title}
        </Text>
      </Stack>
    </Flex>
  );
};

export default function WithSpeechBubbles() {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={16} as={Stack} spacing={12}>
        <Stack spacing={0} align={'center'}>
          <Heading>Our Top Notch Faculty</Heading>
          <Text>We have been training students since 2019</Text>
        </Stack>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          spacing={{ base: 10, md: 4, lg: 10 }}>
          <Testimonial>
            <TestimonialContent>
             
              <TestimonialText>
              Full-stack developer and DevOps Architect.
              
              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.ibb.co/8dL6dMt/1556048207367.jpg'
              }
              name={'Daniyal Nagori'}
              title={'CEO at Piaic'}
            />
            <Link
            
            href="https://www.linkedin.com/in/daniyalnagori/"
        >
           <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            width={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}
            >
            Follow
          </Button>
           </Link>
          </Testimonial>
          <Testimonial>
            <TestimonialContent>
              
              <TestimonialText>
              CEO Panacloud and Panaverse,Full stack developer.

              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.ibb.co/KV5n7Ch/1638368405154.jpg'
              }
              name={'Zia Khan'}
              title={'CEO at Panacloud'}
            />
            <Link
            
            href="https://www.linkedin.com/in/ziaukhan/"
        >
          <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            width={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
           </Link>
          </Testimonial>
         
          <Testimonial>
            <TestimonialContent>
              
              <TestimonialText>
              Co-Founded Panacloud Pvt. Ltd. in 2012.

              </TestimonialText>
            </TestimonialContent>
            <TestimonialAvatar
              src={
                'https://i.ibb.co/jwL1zsR/1562700934047.jpg'
              }
              name={'Hira Khan'}
              title={'Co-Founder of Panacloud'}
            />
            <Link
            
            href="https://www.linkedin.com/in/hira-khan-76523540/"
        >
           
           <Button
            flex={1}
            fontSize={'sm'}
            rounded={'full'}
            width={'full'}
            bg={'blue.400'}
            color={'white'}
            boxShadow={
              '0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)'
            }
            _hover={{
              bg: 'blue.500',
            }}
            _focus={{
              bg: 'blue.500',
            }}>
            Follow
          </Button>
           </Link>
          </Testimonial>
        </Stack>
      </Container>
    </Box>
  );
}
