import { Box, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Box my={10}>
            <Heading m="auto" color="red" textAlign="center" my={8}>About Me</Heading>
            <SimpleGrid columns={[1, 1, 2, 2]} spacing={10} w="80%" m="auto">
                <Box >
                    <Image maxH="350px" src="https://d1mwexcsjeyerr.cloudfront.net/images/meanstack/side-img-2.png" />
                </Box>
                <Box >
                    <ul>
                        <li>
                            <Text color={"blackAlpha.700"} fontSize="18px">
                                Hello! My name is Gautam Kumar and I am a Passionate Developer, with strong administrative and problem solving skills. I have ability to write efficient code using MERN Stack.
                            </Text>
                        </li>
                        <li>
                            <Text color={"blackAlpha.700"} fontSize="18px" mt={5}>
                                I love working on new and exciting technologies emerging nowadays.
                            </Text>
                        </li>
                        <li>
                            <Text color={"blackAlpha.700"} fontSize="18px" mt={5}>
                                Looking forward to applying and enhancing my skills and knowledge as a developer.
                            </Text>
                        </li>
                    </ul>


                </Box>
            </SimpleGrid>
        </Box>
    )
}

export default About
