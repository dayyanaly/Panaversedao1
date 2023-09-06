"use client";
import {
    Box,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    Flex,
    Tag,
    useColorModeValue,
    Img,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  
  const Logo = (props: any) => {
    return (
      <Img
        width={20}
        src="https://i.ibb.co/PZZK5jn/Logo-png.png"
      
        
      ></Img>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithLogoCentered() {
    return (
      <Box
 
        bg={useColorModeValue('blue.400', 'white')}
        color={useColorModeValue('white', 'white')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
            <Stack align={'flex-start'}>
              
              <Stack direction={'row'} align={'center'} spacing={2}>
               
               
              </Stack>
              
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Company</ListHeader>
              <Link href={"https://www.piaic.org/"}>About Us</Link>
              <Link href={"https://www.panaverse.co/"}>Panaverse</Link>
              <Link href={"https://geekflare.com/metaverse-jobs/"}>Careers</Link>
              <Link href={"https://www.facebook.com/groups/piaic/?multi_permalinks=1306695543578221&notif_id=1686300902322774&notif_t=group_highlights&ref=notif"}>Contact Us</Link>
              <Link href={"https://mail.saylaniwelfare.com/en/services/education/technical-education/piaic"}>Partners</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Courses</ListHeader>
             
              <Link href={"https://www.piaic.org/artificial-inteligence"}>Artificial Intelligence</Link>
              <Link href={"https://www.piaic.org/block-chain"}>Blockchain</Link>
              <Link href={"https://www.piaic.org/cloud-native"}>Cloud Native Computing</Link>
              <Link href={"https://www.piaic.org/iot"}>Iot</Link>
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Follow Us</ListHeader>
              <Link href={"https://www.facebook.com/piaic"}>Facebook</Link>
              <Link href={"https://twitter.com/panaverse_edu?lang=en"}>Twitter</Link>
              <Link href={"https://www.youtube.com/@panaverse"}>Youtube</Link>
              <Link href={"https://github.com/panaverse"}>Github</Link>
              <Link href={"https://www.linkedin.com/company/panaverse?originalSubdomain=pk"}>LinkedIn</Link>
            </Stack>
          </SimpleGrid>
        </Container>
        <Box py={10}>
          <Flex
            align={'center'}
            _before={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              mr: 8,
            }}
            _after={{
              content: '""',
              borderBottom: '1px solid',
              borderColor: useColorModeValue('gray.200', 'gray.700'),
              flexGrow: 1,
              ml: 8,
            }}>
            <Logo />
          </Flex>
          <Text pt={6} fontSize={'sm'} textAlign={'center'}>
            © 2022 Panaverse. All rights reserved
          </Text>
        </Box>
      </Box>
    );
  }