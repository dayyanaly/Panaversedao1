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
                        ADIL ALTAF

                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
Internet-Scale Multi-Cloud Global App Architect | Full Stack Cloud Developer | Continuous Innovation Leader


                         </Text>
                       
.
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
            
                        >
                             working in the software industry for over a decade in which I have accumulated a vast amount of knowledge and experience in all areas of the Full Stack SDLC including architecture and design, development, implementation, integration, and deployment. I’ve been developing internet-scale apps with MERN Stack and JAMstack technologies deployed on multi-cloud serverless and cloud-native platforms.
 
 Throughout is career, he has been building innovative products by using a combination of Design Thinking, Lean Startup, Agile and DevOps Methodologies. Using this iterative leadership and development approach, I deliver incremental and continuous increases in business value and reduce risk and time to market significantly using automation tools for CI/CD.
  
 Recently, He have started using the best of the breed tools which I leverage to build internet-scale apps. For the frontend technologies, I use React and Gatsby with TypeScript in combination with Redux and Storyboard. I prefer Netlify and Firebase for client edge deployments. For building serverless apps, He use AWS Lambda Functions, Step Functions, and EventBridge with Serverless Framework. For container deployments he prefer Google Cloud Run or Kubernetes. He use MongoDB and FaunaDB for the database layer and FireStore for realtime databases. Terraform and GitHub Actions serve as my preferred tools for writing Infrastructure as Code and CI/CD. I am a strong advocate of Test Driven Development.
  
 After hours, His passion is to train and mentor the underprivileged youth and shape them into world class developers so they can turn their lives around and build successful careers.
 
 https://github.com/adil-innovation-lab
                          
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
                                    "https://i.ibb.co/bgqncyn/1632680095611.jpg"
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