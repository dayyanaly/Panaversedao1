"use client";
import react, { FC } from "react";
import {
    Heading,
    Stack,
    Text,
    Box,
    Container,
    Flex,
    Image
} from '@chakra-ui/react';

const A: FC = () => {
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
                            THE CONCEPT OF METAVERSE
                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                         The concept of the metaverse has been around for several decades, but it has recently gained significant attention and traction in popular culture due to advancements in technology and the increasing use of virtual reality. The metaverse is a term used to describe a fully immersive, digital world that is inhabited by millions of people and where users can engage in a wide range of activities, including work, play, socializing, and commerce.

                        The term "metaverse" was first coined in Neal Stephenson's 1992 science fiction novel Snow Crash, which described a virtual reality world where people could interact with each other in a shared, immersive environment. Since then, the concept of the metaverse has been explored in various forms, including video games, online communities, and social media platforms.
                        </Text>
                        <Heading
                            as="h1"
                            color="black"
                            lineHeight={1.2}
                            fontWeight={"bold"}
                            fontSize={{ base: '2xl', sm: '3xl', lg: '4xl' }}
                        >
                             DEVELOPMENT IN METAVERSE
                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                            In recent years, advances in virtual reality technology and the rise of blockchain technology have paved the way for the development of a true metaverse. Virtual reality headsets and other devices have made it possible to create fully immersive environments that can be experienced in 3D, while blockchain technology has enabled the creation of secure and decentralized virtual worlds that are not controlled by any one company or individual.

                            The potential of the metaverse is vast, and its implications are far-reaching. In a fully developed metaverse, people could engage in a wide range of activities, such as attending virtual concerts, participating in virtual sports events, attending classes, shopping, and even working remotely. The metaverse could also provide new opportunities for socializing and building communities, as people from all over the world could interact with each other in a shared, immersive environment.


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
                                    "https://i.ibb.co/LPjFZms/DALL-E-2023-02-24-11-06-44-metaverse-3d-boy-in-game-with-blue-background-2.png "
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
};

export default A;