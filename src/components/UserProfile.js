import React from "react";
import { Box, Image, Text } from "@chakra-ui/react";
import { useData } from '../context/Context'

function Profile() {
    const {user} =useData()

  return (
    
    <Box w='30%' textAlign='center'>
      <Image
        src={user.avatar_url
        } 
        alt="User Profile"
        boxSize="150px"
        ml='50px'
      />

      <Text mt='5px' fontSize='3xl'>
        {user.login}
      </Text>
      <Text mt='5px'>
        {user.name}
       
        </Text>
        
    </Box>
  );
}

export default Profile;