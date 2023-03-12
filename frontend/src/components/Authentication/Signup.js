import { Button, FormControl, FormLabel, Input, InputGroup, InputRightElement, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'

const Signup = () => {
    const [show,setShow]= useState(false)
    const [name,setName]= useState()
    const [email,setEmail]= useState()
    const [password,setpassword]= useState()
    const [confirmpassword,setconfirmpassword]= useState()
    const [pic,setpic]= useState()

const handleClick=()=>setShow(!show)

const postDetails=(pics)=>{}

const submitHandler=()=>{}

  return (
    <VStack spacing='5px'>

        <FormControl id="first-name" isRequired>
            <FormLabel>Name</FormLabel>
            <Input 
                placeholder='Enter Your Name'
                onChange={(e)=>setName(e.target.value)}
             />
        </FormControl>

        <FormControl id="email" isRequired>
            <FormLabel>Email</FormLabel>
            <Input 
                placeholder='Enter Your email address'
                onChange={(e)=>setEmail(e.target.value)}
             />
        </FormControl>

        <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
            <Input 
                type={show?"text":"password"}
                placeholder='Enter Your Password'
                onChange={(e)=>setpassword(e.target.value)}
             />
             <InputRightElement>
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show? "Hide":"Show"}
                </Button>
             </InputRightElement>
             </InputGroup>
        </FormControl>

        <FormControl id="confirmpassword" isRequired>
            <FormLabel>Confirm Password</FormLabel>
            <InputGroup>
            <Input 
                type={show?"text":"password"}
                placeholder='Confirm Password'
                onChange={(e)=>setconfirmpassword(e.target.value)}
             />
             <InputRightElement>
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show? "Hide":"Show"}
                </Button>
             </InputRightElement>
             </InputGroup>
        </FormControl>
        <FormControl id="pic">
            <FormLabel>Profile Pic</FormLabel>
            <InputGroup>
                <Input
                    type="file"
                    p={1.5}
                    accept="image/*"
                    onChange={(e)=>postDetails(e.target.files[0])}

                />
            </InputGroup>
        </FormControl>

        <Button
            colorScheme="pink"
            width="100%"
            style={{marginTop:15}}
            onClick={submitHandler}
        >
            Sign Up
        </Button>
    </VStack>
  )
}

export default Signup