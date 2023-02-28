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

const F: FC = () => {
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
                           METAVERSE WITH GENOMIC AND BIOINFORMATICS

                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                          The Metaverse has the potential to transform the field of genomic and bioinformatics research by providing a virtual environment for collaboration, data analysis, and experimentation.


                         
                         </Text>
                        
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
One potential use case for the Metaverse in genomics and bioinformatics is to create virtual laboratories and simulation environments. Scientists and researchers could collaborate with each other and conduct experiments in a virtual world, without the need for physical laboratory space or expensive equipment. This would not only make research more accessible and cost-effective but also increase the speed and efficiency of data analysis.

Another potential use case is the integration of genomics and bioinformatics data into the Metaverse. By creating a virtual environment that represents biological systems, scientists and researchers could use the Metaverse to visualize and analyze complex genomic data. This could lead to new insights into genetic diseases, drug discovery, and personalized medicine.

Additionally, the Metaverse could be used to create virtual training environments for medical professionals and students. By providing a simulated environment for surgical procedures or other medical interventions, the Metaverse could help train and prepare medical professionals for real-world situations.

Overall, the Metaverse has the potential to revolutionize the way genomics and bioinformatics research is conducted, enabling new and innovative approaches to data analysis, collaboration, and experimentation.





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
                                    "https://i.ibb.co/zSLPDyk/images-2.jpg "
                                }
                            />
                        </Box>
                    </Flex>
                </Stack>
            </Container>
        </Box>
    );
};

export default F;