"use client";
import React from 'react';
import { Stack, Text, Button, Box } from '@chakra-ui/react';

export default function Outcomedetail() {
  return (
    
    <Stack p="4" boxShadow="lg" m="4" borderRadius="sm"  >
      <Stack direction="row" alignItems="center">
        <Text fontWeight="bold">The Outcome for Participants of the Program</Text>
        
      </Stack>

      <Stack
        direction={{ base: 'column', md: 'row' }}
        justifyContent="space-between">
        <Text fontSize={{ base: 'sm' }} textAlign={'left'} maxW={'4xl'}>
        The graduates of this program will own products (Full-Stack App Templates, AR and VR Experiences, and APIs) that are marketed globally by the Panaverse DAO and, if they like, will also be able to start off by offering services at a rate of $50 per hour ($96,000 per year). This would give Pakistani professionals and students a fantastic opportunity to better their financial situation while also giving the economy a much-needed boost by expanding software exports.
        </Text>
       
      </Stack>
    </Stack>
  
  );
}
