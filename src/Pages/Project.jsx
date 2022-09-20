import { Box, color, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect } from 'react'
import cricet from "../Img/cricket1.PNG"
import cartify from "../Img/cartify1.PNG"
import netmeds from "../Img/netmeds.PNG"
import Aos from 'aos'
import 'aos/dist/aos.css'




const Projects = () => {

    useEffect(() => {
        Aos.init({ duration: 2000 })
    }, [])

    return (
        <div>
            <Box my={10} name="project">
                <Heading m="auto" mt="100px" color="red" textAlign="center"  >Projects</Heading>
                <SimpleGrid columns={[1, 1, 2, 3]} spacing={10} w={["90%", "80%"]} m="auto" mt={12}>
                    <Box boxShadow='base' p='6' rounded='md' bg='white' data-aos="zoom-in">
                        <Box h={["150px", "180px", "200px"]}  >
                            <Image h="100%" w="100%" src={cricet} alt="cricket" rounded="lg" />
                        </Box>
                        <Box textAlign="center" mt={3}>
                            <Heading color="#F56565" fontSize="25px">CRICKET Clone</Heading>
                            <Box textAlign="start" mt={2} color={"blackAlpha.700"} >
                                <Text>🔸 Individual Project</Text>
                                <Text>🔸 This website is a clone of cricket.com. I created Home Page, Fantasy Page, Circlytic Page, Schedule Page, Login Page, Signup Page and News Page</Text>
                                <Text>🔸 Signup page is functional you can fill mobile number and get OTP in real time</Text>
                                <Text mt={3}><span style={{ "color": "#C53030", fontWeight: "bold" }}>Tech Stack : </span> React, Chakra UI, Firebase,CSS, HTML, Javascript </Text>
                            </Box>
                            <Flex mt={2} align="center" justify="space-around">
                                <a href="https://cricket-4bc52.web.app/" target="blank">
                                    <Image w="40px" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                                </a>
                                <a href="https://github.com/Gautamkumar3/humane-theory-4192/tree/master/cricket" target="blank">
                                    <Image w="40px" h="40px" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                                </a>
                            </Flex>
                        </Box>
                    </Box>

                    <Box boxShadow='base' p='6' rounded='md' bg='white' data-aos="zoom-in">
                        <Box h={["150px", "180px", "200px"]}>
                            <Image h="100%" w="100%" src={netmeds} alt="cricket" rounded="lg" />
                        </Box>
                        <Box textAlign="center" mt={3}>
                            <Heading color="#F56565" fontSize="25px">NETMEDS Clone</Heading>
                            <Box textAlign="start" mt={2} color={"blackAlpha.700"} >
                                <Text>🔸 Individual Project</Text>
                                <Text >🔸 This website is a clone of netmeds.com. I created Home Page, Product Page, Login Page, Signup Page and Cart Page.</Text>
                                <Text>🔸 I manage all the context using Context API. Cart Page is dynamic. You can add item, delete item and increase quantity.</Text>
                                <Text mt={3}><span style={{ "color": "#C53030", fontWeight: "bold" }}>Tech Stack : </span> React, Chakra UI, CSS, HTML, Javascript </Text>
                            </Box>

                            <Flex mt={2} align="center" justify="space-around" >
                                <a href="https://netmeds-five.vercel.app/" target="blank">
                                    <Image w="40px" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                                </a>
                                <a href="https://github.com/Gautamkumar3/unique-color-3040" target="blank">
                                    <Image w="40px" h="40px" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                                </a>
                            </Flex>

                        </Box>
                    </Box>

                    <Box boxShadow='base' p='6' rounded='md' bg='white' data-aos="zoom-in">
                        <Box h={["150px", "180px", "200px"]} >
                            <Image h="100%" w="100%" src={cartify} alt="cricket" rounded="lg" />
                        </Box>
                        <Box textAlign="center" mt={3}>
                            <Heading color="#F56565" fontSize="25px">CARTIFY.com</Heading>
                            <Box textAlign="start" mt={2} color={"blackAlpha.700"} >
                                <Text>🔸 Individual Project</Text>
                                <Text>🔸 This is a ecommerce website. I created Home Page, Many Products Page, Signup Page & Login Page</Text>
                                <Text>🔸  Cart Page is dynamic. You can add item, delete item and increase quantity. I create design of this website.</Text>
                                <Text mt={3}><span style={{ "color": "#C53030", fontWeight: "bold" }}>Tech Stack : </span> React, Chakra UI, CSS HTML, Javascript </Text>
                            </Box>
                            <Flex mt={2} align="center" justify="space-around">
                                <a href="https://gk-singh-cart-demo.netlify.app/" target="blank">
                                    <Image w="40px" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                                </a>
                                <a href="https://github.com/masai-course/Gautam_fw18_0032/tree/master/unit-4-async/sprint-3/day-3/assignments/router-project" target="blank">
                                    <Image w="40px" h="40px" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                                </a>
                            </Flex>
                        </Box>
                    </Box>
                </SimpleGrid>
            </Box>
        </div >
    )
}

export default Projects
