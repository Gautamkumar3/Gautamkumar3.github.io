import { Box, Center, Flex, Heading, Image, SimpleGrid } from '@chakra-ui/react'
import React from 'react'
import GitHubCalendar from 'react-github-calendar'
const Github = () => {
    return (
        <Box w={["90%", "80%"]} margin="auto" p={[0, 10]} my={[0, 10]} >
            <Heading color="#F5C32C" textAlign="center" mb={[5, 10]}>Github Calender</Heading>
            <Center>
                <GitHubCalendar username="Gautamkumar3" />
            </Center>
            <Heading color="#F5C32C" textAlign="center" my={[5, 10]}>Github Stats</Heading>
            <SimpleGrid columns={[1,3]} >
                <Center>
                    <Image src="https://github-readme-stats.vercel.app/api?username=Gautamkumar3&theme=dark&hide_border=false&include_all_commits=true&count_private=true" />
                </Center>
         
                <Box>
                    <Image src="https://github-readme-stats.vercel.app/api/top-langs/?username=Gautamkumar3&theme=dark&hide_border=false&include_all_commits=true&count_private=true&layout=compact" />
                </Box>
                <Center>
                    <Image src="https://github-readme-streak-stats.herokuapp.com/?user=Gautamkumar3&theme=dark&hide_border=false" />
                </Center>
            </SimpleGrid>
        </Box>
    )
}

export default Github
