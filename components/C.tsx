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
                           METAVERSE WITH CLOUD NATIVE COMPUTING

                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                           The metaverse, which is a virtual world where people can interact with each other and digital objects in a seamless and immersive way, can greatly benefit from cloud native computing, which is a set of principles and technologies that enable the development and deployment of scalable, resilient, and portable applications in cloud environments. Here are some potential benefits of combining the metaverse with cloud native computing:


                         </Text>
                       
.
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                           
                           Scalability: Cloud native computing enables the metaverse to scale seamlessly, allowing it to support a large number of users and a variety of applications and services.

High Availability: Cloud native computing can provide high availability and reliability for the metaverse, ensuring that users can access the virtual environment and its applications and services at all times.

Resilience: Cloud native computing can make the metaverse more resilient by providing automated disaster recovery, failover, and self-healing capabilities.

Portability: Cloud native computing enables the metaverse to be deployed across different cloud platforms, making it more flexible and accessible to a wider range of users.

Security: Cloud native computing can provide enhanced security for the metaverse by providing end-to-end encryption, access control, and other security features.

Improved Performance: Cloud native computing can provide improved performance for the metaverse, enabling it to handle complex applications and services with low latency and high throughput.

Cost Efficiency: Cloud native computing can make the metaverse more cost-efficient by providing automated scaling and resource allocation, which can optimize the use of cloud resources and reduce operational costs.

Overall, the combination of the metaverse with cloud native computing can enable a more scalable, reliable, and flexible virtual environment, with improved performance, security, and cost efficiency. As these technologies continue to evolve, we can expect to see even more innovative applications and use cases emerge in the future.



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
                                    "https://i.ibb.co/R9FrLJp/cloud-mesh.pnghttps://i.ibb.co/v4KTMgp/169computer-aided-manufacturing-future-factory-engineering-and-3d-picture-id1345137578-1170x600-2.jpg "
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