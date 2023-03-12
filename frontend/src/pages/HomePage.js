import React from 'react'
import { Box, Container, Text,Tabs, TabList, TabPanels, Tab, TabPanel} from "@chakra-ui/react"
import Login from '../components/Authentication/Login'
import Signup from '../components/Authentication/Signup'
const HomePage = () => {
  return (
    <Container maxW='xl' centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg={"white"}
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
      >
        <Text fontSize='4xl' fontFamily="Work sans" color='black'>ichat</Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="1px">
        <Tabs variant='soft-rounded' colorScheme='pink'>
        <TabList mb='1em'>
          <Tab width="50%">Login</Tab>
          <Tab width="50%">Sign up</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            {<Login/>}
          </TabPanel>
          <TabPanel>
            {<Signup/>}
          </TabPanel>
        </TabPanels>
      </Tabs>
      </Box>
    </Container>
  )
}

export default HomePage