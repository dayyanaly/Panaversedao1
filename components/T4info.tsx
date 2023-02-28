"use client";
import { FC } from "react";
import {
    Heading,
    Stack,
    Text,
    Box,
    Container,
    Flex,
    Image
} from '@chakra-ui/react';

const C: FC = () => {
    return (
        <Box
            bg="#BEBC56"
            
        >
            <Container maxW={'7xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}
                >
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}
                    >
                        <Heading
                            as="h1"
                            color="black"
                            lineHeight={1.2}
                            fontWeight={"bold"}
                            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
                        >
                          DANIYAL NAGORI

                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                          
                          Full-stack developer and DevOps Architect with certification in most cutting edge technologies of development and deployment of tools, apps and microservices. I am current in my certification for:

Certified Kubernetes Application Developer
AWS Certified Developer
Coursera React Native Nano Degree

                         </Text>
                       
.
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                         have been fortunate to be able to architect solutions in as wide an array as Cloud Native, Voice Computing/Chatbot development, Web, Mobile, AI, and Blockchain.
                         My current development concentration and expertise is in the following technologies:
JavaScript, 
TypeScript, 
Python, 
Angular, 
Ionic, 
React, 
ReactNative, 
Node.js, 
MongoDB, 
Solidity (ETH), 
Tensorflow, 
Docker, 
Kubernetes, 
Amazon Web Services, 
Google-Cloud, and 
Azure

           
                    </Text>
                    </Stack>
                    <Flex
                        flex={1}
                        justify={'center'}
                        align={'center'}
                        position={'relative'}
                        w={'full'}>
                        <Box
                            position={'relative'}
                            rounded={'2xl'}
                            boxShadow={'3xl'}
                            width={'full'}
                            overflow={'hidden'}>
                            <Image
                                alt={'Hero Image'}
                                fit={'cover'}
                                align={'center'}
                                w={'100%'}
                                h={'100%'}
                                src={
                                    "https://i.ibb.co/8dL6dMt/1556048207367.jpg"
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
};

export default C;