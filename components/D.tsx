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

const E: FC = () => {
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
                           METAVERSE WITH IOT AND AMBIENT COMPUTING

                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                          
                          The Metaverse has the potential to be used in conjunction with IoT (Internet of Things) and ambient computing to create new and innovative experiences for users.

  
                         </Text>
                        
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >

In IoT, devices are connected to the internet and can communicate with each other, often without human intervention. By integrating IoT devices into the Metaverse, users could interact with physical devices in a virtual world. For example, a user could control the temperature of their home using a virtual thermostat within the Metaverse.

In ambient computing, the integration of sensors and other devices into everyday objects could be used to enhance the immersive experience of the Metaverse. For example, a user's wearable device could detect changes in their physical state, such as increased heart rate, and adjust the virtual environment accordingly to create a more engaging and personalized experience.

Overall, the Metaverse could be used to bridge the gap between the physical and digital worlds, creating new opportunities for innovation and creativity. By integrating IoT and ambient computing technologies, the Metaverse could become an even more immersive and intuitive experience for users.

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
                                    "https://i.ibb.co/F3R5PGV/0x0.jpg "
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
};

export default E;