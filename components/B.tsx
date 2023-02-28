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
                           METAVERSE WITH ARTIFICIAL INTELLIGENCE AND DEEP LEARNING

                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                           The combination of the metaverse with artificial intelligence (AI) and deep learning has the potential to unlock even more exciting possibilities and benefits. Here are some potential use cases and benefits of this combination:

                             
                         </Text>
                        
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                            Personalization: AI and deep learning can be used to personalize the metaverse experience for individual users, taking into account their preferences, behavior, and history.

                            Realistic Simulation: AI and deep learning can be used to create more realistic simulations of the physical world within the metaverse, making the virtual environment more immersive.

                            Intelligent Avatars: AI and deep learning can be used to create intelligent avatars that can interact with users in more realistic and responsive ways, making the metaverse feel more like a real-world environment.

                            Enhanced User Safety: AI and deep learning can be used to enhance user safety by identifying and preventing potentially harmful behavior and actions within the metaverse.

                            Predictive Analytics: AI and deep learning can be used to provide predictive analytics on user behavior within the metaverse, helping businesses and organizations make informed decisions.

                            Automated Assistance: AI and deep learning can be used to provide automated assistance and support within the metaverse, improving the user experience and making it easier to navigate and use the virtual environment.

                           Intelligent Object Recognition: AI and deep learning can be used to provide intelligent object recognition within the metaverse, enabling more accurate and responsive interactions with virtual objects and environments.

                           Overall, the combination of the metaverse with AI and deep learning has the potential to unlock a range of exciting new possibilities, making the virtual environment more immersive, personalized, and intelligent. As these technologies continue to develop, we can expect to see even more innovative applications and use cases emerge in the future.




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
                                    "https://i.ibb.co/v4KTMgp/169computer-aided-manufacturing-future-factory-engineering-and-3d-picture-id1345137578-1170x600-2.jpg "
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