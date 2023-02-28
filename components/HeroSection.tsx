"use client";
import { FC } from "react";
import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Button,
    Image,
    Link
} from '@chakra-ui/react';

const Hero: FC = () => {
    return (
        <Box>
            <Container maxW={'7xl'}>
                <Stack
                    align={'center'}
                    spacing={{ base: 8, md: 10 }}
                    py={{ base: 20, md: 28 }}
                    direction={{ base: 'column', md: 'row' }}>
                    <Stack flex={1} spacing={{ base: 5, md: 10 }}>
                        <Heading
                            as="h2"
                            color="black"
                            lineHeight={1.1}
                            fontWeight={"bold"}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                        >
                            Certified Web 3.0 and Metaverse Developer
                        </Heading>
                        <Heading
                            as="h2"
                            lineHeight={1.2}
                            bgGradient='linear(to-r, blue.600, red.500)'
                            _hover={{ bgGradient: "linear(to-r, blue.500, green.900)" }}
                            bgClip="text"
                            fontWeight={"bold"}
                            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}
                        >
                            A Nationwide Program in Karachi, Lahore, Islamabad, and Peshawar
                        </Heading>
                        <Text
                            fontSize={{ base: 16, sm: 20 }}
                            color={'grey'}
                            lineHeight={1.3}
                            pb={{ base: "2", md: "1" }}
                        >
                            Getting Ready for the Next Generation and Future of the Internet - Join a 13 Trillion Dollar Industry with 5 Billion Users
                            The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.


                        </Text>
                        <Stack
                            spacing={{ base: 4, sm: 6 }}
                            direction={{ base: 'row', sm: 'row' }}
                            pb={{ base: "8", lg: "4" }}
                        >
                            <Link
                                _hover={{
                                    textDecoration: "none",
                                }}
                                href="https://portal.piaic.org/signup"
                            >
                                <Button
                                    rounded={'full'}
                                    fontWeight={600}
                                    px={6}
                                    color="white"
                                    bgGradient='linear(to-r, blue.600, red.500)'
                                    _hover={{ bgGradient: "linear(to-r, blue.500, green.900)" }}
                                >
                                    Apply Now
                                </Button>
                            </Link>
                            <Link
                                _hover={{
                                    textDecoration: "none",
                                }}
                                href="https://docs.google.com/document/d/13Z4tMKQmZpMEsOc1Y_qAXbOstRolGIFupHxQFgAFl98/edit"
                            >
                                <Button
                                    rounded={'full'}
                                    fontWeight={600}
                                    color="white"
                                    px={6}
                                    bgGradient='linear(to-r, blue.600, red.500)'
                                    _hover={{ bgGradient: "linear(to-r, blue.500, green.900)" }}
                                >
                                    Syllabus
                                </Button>
                            </Link>
                        </Stack>
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
                                    "https://i.ibb.co/n6hFPf2/output-onlinepngtools.png"
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Box >
    );
};

export default Hero;