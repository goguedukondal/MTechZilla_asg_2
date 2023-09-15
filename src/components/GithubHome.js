import React from 'react'
import {Box} from '@chakra-ui/react'

import UserDetails from './UserDetails'
import Profile from './UserProfile'


function GithubHome() {
  return (
    <Box w='80%' mt="20px" p='20px' boxShadow='dark-lg' rounded='md' bg='white' display='flex'>
        <Profile/>
        <UserDetails/>
    </Box>
  )
}

export default GithubHome