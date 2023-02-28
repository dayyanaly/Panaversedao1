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
                          ZEESHAN HANIF
                        </Heading>
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                          
                          Modern full-stack cloud and blockchain developer with over a decade of experience in developing dynamic applications using MERN Stack and static content with JAMstack together with Infrastructure as Code (IaC). I have developed the front-ends for SaaS and mobile applications, as well as extremely scalable and fault-tolerant back-ends

Comprehensive educational background in computer science and business studies. Have a Master's degree in Computer Science combined with seven software development certifications from IBM, SUN and Microsoft. Also passed Certified Management Accountant (CMA) examinations from Institute of Management Accountant (IMA), New Jersey and Level 2 of Chartered Financial Analyst (CFA), Charlottesville, Virginia.

https://devpost.com/zeeshanhanif

- Chainlink 2021 Fall Hackathon Grand Prize Winner
- Chainlink 2022 Spring Hackathon NFT and Gaming Prize Winner
- Polkadot Hackathon: North America Edition 2022, Community Choice award and Moonbeam DeFi Prize Winner

                         </Text>
                       
.
                        <Text
                            fontSize={{ base: 15, md: 20 }}
                            color={'white'}
                            lineHeight={1.4}
                            pb={{ base: "2", md: "1" }}
                        >
                           
                           Passed 11 International Software Development Examinations of IBM, Sun, and Microsoft.

1 React Nanodgree By Udacity
2 Certified Blockchain Business Foundations
3 Certified Blockchain Developer - Ethereum
4 Sun Certified Java Programmer (SCJP)
5Sun Certified Mobile Application Developer (SCMAD)
5 IBM Certified Enterprise Connectivity with J2EE
7 IBM Certified Developer XML and Related Technologies
8 IBM Certified Object Oriented Analysis and Design with UML
9 Microsoft Certified Professional VB .NET
10 Microsoft Specialist: Programmingin HTML5 with JavaScript and CSS3
11 Android Basics Nanodegree by Google

Exams Passed in Professional Business Studies: 

Cleared All Parts of Certified Management Accountant (CMA) from Institute of Management Accountants, USA:

CMA Part 1 Business Analysis
CMA Part 2 Management Accounting and Reporting
CMA Part 3 Strategic Management
CMA Part 4 Business Application

Chartered Financial Analysts (CFA):

Level 1 of CFA examination 
Level 2 of CFA examination


Specialties: Javascript, Typescript, Java, Swift, J2ee Enterprise Application, MEAN Stack: (NodeJS, AngularJS, Mongodb, Express, Mongoose) JSP, J2SE, Java, C#, Struts, XML, XAML, Javascript, JQuery, Prototype, J2ME, Tomcat, MySql and Hybrid application, ionic, phonegap, cardova, Native Android
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
                                    "https://i.ibb.co/JkVNKM2/1517684731220.jpg"
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