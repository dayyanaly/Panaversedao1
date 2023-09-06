import {
  Box,
  Container,
  Heading,
  Image,
  Link,
  Stack,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import React, { ReactNode, useEffect, useState } from "react";
import { Text } from "@chakra-ui/react";
import Head from "next/head";
import styles from "./Testimonial.module.css"

interface TestimonialProps {
  children: ReactNode;
}

const Testimonial = ({ children }: TestimonialProps) => {
  return (
    <Box mb={12} className={styles.testimonial}>
      {children}
    </Box>
  );
};

const TestimonialContent = ({ children }: { children: ReactNode }) => {
 
  return (
    <>
      <Stack
        className={styles["testimonial-content"]}
       bgColor={"blue.400"}
        boxShadow={"lg"}
        p={8}
        rounded={"3xl"}
        align={"center"}
        pos={"relative"}
        _after={{
          content: `""`,
          w: 5,
          h: 5,
          borderTopColor: useColorModeValue("white", "gray.800"),
          pos: "absolute",
          bottom: "-16px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        {children}
      </Stack>
    </>
  );
};

const TestimonialHeading = ({ children }: { children: ReactNode }) => {
  return (
    <Heading
      as={"h4"}
      textAlign={{ base: "center", md: "left" }}
      color={"gray.700"}
      fontSize={"3xl"}
    >
      {children}
    </Heading>
  );
};

const TestimonialText = ({ children }: { children: ReactNode }) => {
  return (
    <Text
      textAlign={"center"}
      color={useColorModeValue("white", "white")}
      fontSize={"lg"}
    >
      {children}
    </Text>
  );
};

const Content = () => {
  return (
    <Box padding={10}>
      <VStack>
        <Box>
          
          
<Heading
              as="h1"
              size={["xl", "2xl", "3xl"]}
              color={"black.700"}
              textAlign={"center"}
            >
             Specialized Tracks:
            </Heading>
         
          
        </Box>
      </VStack>
      <Box  mt={["-16", "-32"]} mb={["-16", "-32"]}>
        <Container maxW={"2xl"} py={[20, 40]} as={Stack} spacing={[6, 10]}>
          <Stack spacing={[4, 5]} align={"center"}>
            <Heading
              as="h1"
              size={["xl", "2xl", "3xl"]}
              color={"black.700"}
              textAlign={"center"}
            >
              Web 3 And Blockchain:
            </Heading>
          </Stack>

          <VStack
            direction={{ base: "column", md: "row" }}
            spacing={{ base: 8, md: 12, lg: 12 }}
          >
            <Box>
              <Testimonial>
                
                  <TestimonialContent>
                    <TestimonialHeading>
                    Quarter IV:
 
                    </TestimonialHeading>
                    <TestimonialText>
                          W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps
                    </TestimonialText>
                  </TestimonialContent>
               
              </Testimonial>
              <Testimonial>
                
                  <TestimonialContent>
                    <TestimonialHeading>
                      Quarter V:
                    </TestimonialHeading>
                    <TestimonialText>
                         MV-361: Developing Planet-Scale and Augmented Metaverse 
                         Experiences
                    </TestimonialText>
                  </TestimonialContent>
               
              </Testimonial>
             
            </Box>
          </VStack>
        </Container>
        </Box>
            
            
          
    
      </Box>
  );
};

export default Content;