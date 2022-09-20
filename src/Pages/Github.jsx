import { Box, Center, Heading } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
const Github = () => {
    return (
        <Box w={["90%", "80%"]} margin="auto" p={[0, 10]} my={[0, 10]} >
            <Heading color="red" textAlign="center" mb={[5, 10]}>Github Calender</Heading>
            <Center>
                <GitHubCalendar username="Gautamkumar3" />
            </Center>

        </Box>
    )
}

export default Github
