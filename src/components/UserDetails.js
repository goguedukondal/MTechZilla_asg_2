import React from 'react'
import { Card, CardHeader, CardBody,Heading,Stack,StackDivider,Box,Text } from '@chakra-ui/react'
import { useData } from '../context/Context'
function UserDetails() {
    const {user} =useData()
    const createdAtTimestamp = new Date(user.created_at);
const year = createdAtTimestamp.getFullYear()
const month = (createdAtTimestamp.getMonth() + 1).toString().padStart(2, '0');
const day = createdAtTimestamp.getDate().toString().padStart(2, '0');

const formattedDate = `${year}-${month}-${day}`;
// console.log(formattedDate); 
  return (
    <Box  ml='20px' w='70%' color='white' p="20px" textAlign="left">
    
    <Card>
  <CardHeader>
    <Heading size='md'>Details Of The User</Heading>
  </CardHeader>

  <CardBody>
    <Stack divider={<StackDivider />} spacing='4'>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Public Repositiries
        </Heading>
        <Text pt='2' fontSize='sm'>
         {user.public_repos}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          Public Gists
        </Heading>
        <Text pt='2' fontSize='sm'>
          {user.public_gists}
        </Text>
      </Box>
      <Box>
        <Heading size='xs' textTransform='uppercase'>
          PROFILE CREATED AT
        </Heading>
        <Text pt='2' fontSize='sm'>
          {formattedDate} 
        </Text>
      </Box>
    </Stack>
  </CardBody>
</Card>

    </Box>
  )
}

export default UserDetails
