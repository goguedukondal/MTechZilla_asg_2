import React from "react";
import { FormControl, FormLabel, Input, Button, InputGroup } from '@chakra-ui/react';
import { useData } from "../context/Context";
import { useState ,useEffect} from "react";

function GithubSearch() {

  const [userName, setUserName] = useState("");
  const { setUser } = useData();
  useEffect(()=>{
    // Just re-rendering the component whenever the userName has been changed
  },[userName])
  const getUserData = () => {
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
        setUserName("")
      })
      .catch((error) => {
        console.log(error)
       
      });
  };
//    console.log(user)
   const handleSubmit = (e) => {
    e.preventDefault();
    getUserData();
    
  };
  return (
    
    
    <form onSubmit={handleSubmit}>
      <FormControl isRequired>
        <FormLabel>Github User Name</FormLabel>
        <InputGroup display='flex' >
          <Input width='62%'
            placeholder="Enter Github User Name"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          
            <Button type="submit" variant="solid" colorScheme="teal" ml='3%' width="15%">
              Search
            </Button>
         
        </InputGroup>
      </FormControl>
    </form>
  );
}

export default GithubSearch;
