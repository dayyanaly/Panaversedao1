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

const G: FC = () => {
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
                           METAVERSE WITH NETWORK PROGRAMABILITY AND AUTOMATION

                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                          The Metaverse has the potential to revolutionize network and programability automation by providing a virtual environment for testing and deploying new technologies, as well as for training and collaboration.

                         </Text>
                        
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                            One potential use case for the Metaverse in network and programability automation is to create virtual network testing environments. Network engineers could use the Metaverse to test new configurations and technologies in a virtual environment, without the risk of disrupting real-world networks. This would allow for faster and more efficient testing and deployment of new network technologies.

Another potential use case is the integration of programability automation tools into the Metaverse. Developers and network engineers could use the Metaverse to collaborate and develop new automation scripts and tools, testing them in a virtual environment before deploying them in the real world.

Additionally, the Metaverse could be used to create virtual training environments for network engineers and developers. By providing a simulated environment for network troubleshooting and programming, the Metaverse could help train and prepare professionals for real-world situations

Overall, the Metaverse has the potential to transform the way network and programability automation is conducted, enabling new and innovative approaches to testing, deployment, and training.




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
                                    "https://i.ibb.co/FWmw6cR/Webp-net-resizeimage-3.jpg "
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
};

export default G;