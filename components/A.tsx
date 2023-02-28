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

const B: FC = () => {
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
                            CAREERS IN WEB 3.0 AND METAVERSE
                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                        Web 3.0 and the metaverse are emerging technologies with a lot of potential, and there are many exciting career opportunities in these areas. Some potential careers in Web 3.0 and the metaverse include:


                        </Text>
                        
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                        Blockchain Developer: A blockchain developer creates decentralized applications and smart contracts using blockchain technology.

                        Game Developer: A game developer creates immersive experiences for the metaverse using virtual reality, augmented reality, and other emerging technologies.

                       Cryptocurrency Trader: A cryptocurrency trader buys and sells digital assets on various cryptocurrency exchanges.

                       Digital Marketing Specialist: A digital marketing specialist promotes products and services in the metaverse and helps companies build their online presence.

                       UX/UI Designer: A UX/UI designer creates intuitive and user-friendly interfaces for metaverse applications and websites.

                      Metaverse Architect: A metaverse architect designs and builds virtual spaces and environments for the metaverse.

                      AI and Machine Learning Expert: AI and machine learning experts develop algorithms and models to support the metaverse's intelligent and responsive systems.

                     Metaverse Content Creator: A metaverse content creator creates and distributes content such as games, videos, and social media for users of the metaverse.

                     Overall, the career opportunities in web 3.0 and the metaverse are diverse and exciting, offering a range of options for those interested in pursuing a career in these emerging fields. As these technologies continue to develop, new opportunities and roles will continue to emerge, and there will be increasing demand for skilled professionals in these areas.
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
                                    "https://i.ibb.co/X8ZBjhy/rm359-s88-pom-1701-03-1.jpg "
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
};

export default B;