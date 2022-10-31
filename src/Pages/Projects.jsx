import React, { useEffect } from 'react'
import { FaGithub, FaLink } from "react-icons/fa"
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Text, SimpleGrid, Box, Flex, Button, IconButton, color, Link, Image } from "@chakra-ui/react"
import Aos from 'aos';
import 'aos/dist/aos.css';
import toogl1 from "../Img/toogl/toogl_home.png"
import toogl2 from "../Img/toogl/toogl_signup.png"
import toogl3 from "../Img/toogl/toogl_login.png"
import toogl4 from "../Img/toogl/toogl_pricing.png"
import toogl5 from "../Img/toogl/toogl_project.png"
import toogl6 from "../Img/toogl/toogl_task.png"
import toogl7 from "../Img/toogl/toogl_features.png"
import chakra from "../Img/techstack/chakra.png"
import rct_router from "../Img/techstack/rct_router.png"
import node from "../Img/techstack/nodeJs.png"
import js from "../Img/techstack/js.png"
import express from "../Img/techstack/express.png"
import html from "../Img/techstack/html.png"
import css from "../Img/techstack/css.png"
import rct from "../Img/techstack/react.png"
import redux from "../Img/techstack/redux.png"
import mdb from "../Img/techstack/mongo.png"
import firebase from "../Img/techstack/firebase.png"
import car1 from "../Img/cartify/cartify_home.png"
import car2 from "../Img/cartify/cartify_signup.png"
import car3 from "../Img/cartify/cartify_login.png"
import car4 from "../Img/cartify/cartify_men.png"
import car5 from "../Img/cartify/cartify_searchbar.png"
import car6 from "../Img/cartify/cartify_details.png"
import car7 from "../Img/cartify/cartify_cart.png"
import net1 from "../Img/netmeds/netmeds_home.png"
import net2 from "../Img/netmeds/netmeds_signup.png"
import net3 from "../Img/netmeds/netmeds_login.png"
import net4 from "../Img/netmeds/netmeds_products.png"
import net5 from "../Img/netmeds/netmeds_cart.png"
import cric1 from "../Img/cricket/cric_home.png"
import cric2 from "../Img/cricket/cric_login.png"
import cric3 from "../Img/cricket/cric_fantacy.png"
import cric4 from "../Img/cricket/cric_cir.png"
import cric5 from "../Img/cricket/cric_sche.png"


const Projects = () => {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <>
      <Box my={10} name="project">
        <Text mt={20} fontSize={'xx-large'} fontWeight='semibold' color={"red"} textAlign='center'>MY PROJECTS</Text>

        <SimpleGrid name='projects'
          h="auto"
          w={["90%", "90%", "80%", "80%"]}
          m="auto"
          p={1}
          columns={[1, 1, 2]}
          mt={"20px"}
          borderRadius="7px"
          bg={"#2B547E"}
          boxShadow='rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' >

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
              >
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={toogl1} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={toogl2} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={toogl3} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={toogl4} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={toogl5} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={toogl6} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={toogl7} />
                </div>
              </Carousel>
              <Flex justify="space-between" gap={1} m="auto" mt={5}>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image w={"40px"} src={html} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={css} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={js} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={rct} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={redux} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={chakra} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={mdb} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={express} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image h={["15px", "20px", "20px", "30px"]} src={node} />
                </Box>

              </Flex>
            </Box>
          </Box>

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3} >
              <Text
                fontSize="xx-large"
                color={'yellowGreen'}
                fontWeight='semibold'
                font>
                Toogl track.com
              </Text>
              <Text letterSpacing={1.5} fontSize={"x-large"} color="yellowGreen">About Project</Text>
              <div>
                <Text color="gray.400">Toggl Track is an app that allows you to track your team members, clients, projects, and the time taken for each project.</Text>
              </div>
              <Text fontSize={"large"} color="gray.400">It is a group project.</Text>
              <Text fontSize={"x-large"} color="yellowGreen">Role</Text>
              <Text fontSize={"large"} color="gray.400">I was responsible for creating Login page, Signup page, and all the backend part of this website. </Text>

              <Flex mt={5} justify="center" gap={10} >
                <a href="https://toggl-time-tracking.vercel.app/" target="blank">
                  <Image w="40px" borderRadius="50%" bg={"white"} _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                </a>
                <a href="https://github.com/Amanyadav2030/toggl-track-clone" target="blank">
                  <Image w="40px" h="40px" bg={"white"} borderRadius="50%" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                </a>
              </Flex>
            </Box >
          </Box>
        </SimpleGrid>


        {/* ################### cartify project card ###################### */}
        <SimpleGrid name='projects'
          h="auto"
          w={["90%", "90%", "80%", "80%"]}
          m="auto"
          p={1}
          columns={[1, 1, 2]}
          mt={"20px"}
          borderRadius="7px"
          bg={"#2B547E"}
          boxShadow='rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' >

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
              >
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={car1} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={car2} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={car3} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={car4} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={car5} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={car6} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={car7} />
                </div>
              </Carousel>
              <Flex justify="center" gap={5} m="auto" my={5}>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image w={"40px"} src={html} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={css} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={js} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={rct} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image h={["15px", "20px", "20px", "30px"]} src={rct_router} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={chakra} />
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3} >
              <Text
                fontSize="xx-large"
                color={'yellowGreen'}
                fontWeight='semibold'
                font>
                Cartify.com
              </Text>
              <Text letterSpacing={1.5} fontSize={"x-large"} color="yellowGreen">About Project</Text>
              <div>
                <Text color="gray.400">This is an e-commerce website named Cartify. Users can search for products, view product details, and add products to the cart.</Text>
              </div>
              <Text fontSize={"large"} color="gray.400">It is an Indivisual project.</Text>
              <Text fontSize={"x-large"} color="yellowGreen">Role</Text>
              <Text fontSize={"large"} color="gray.400">I created Home Page, Many Products Pages, Signup Page, Login Page, and Cart Page. </Text>

              <Flex mt={5} justify="center" gap={10} >
                <a href="https://gk-singh-cart-demo.netlify.app/" target="blank">
                  <Image w="40px" borderRadius="50%" bg={"white"} _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                </a>
                <a href="https://github.com/masai-course/Gautam_fw18_0032/tree/master/unit-4-async/sprint-3/day-3/assignments/router-project" target="blank">
                  <Image w="40px" h="40px" bg={"white"} borderRadius="50%" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                </a>
              </Flex>
            </Box >
          </Box>
        </SimpleGrid>


        {/* ######################### Netmeds ########################  */}

        <SimpleGrid name='projects'
          h="auto"
          w={["90%", "90%", "80%", "80%"]}
          m="auto"
          p={1}
          columns={[1, 1, 2]}
          mt={"20px"}
          borderRadius="7px"
          bg={"#2B547E"}
          boxShadow='rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' >

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
              >
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={net1} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={net2} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={net3} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={net4} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={net5} />
                </div>
              </Carousel>
              <Flex justify="center" gap={5} m="auto" my={5}>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image w={"40px"} src={html} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={css} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={js} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={rct} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image h={["15px", "20px", "20px", "30px"]} src={rct_router} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={chakra} />
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3} >
              <Text
                fontSize="xx-large"
                color={'yellowGreen'}
                fontWeight='semibold'
                font>
                Netmeds.com
              </Text>
              <Text letterSpacing={1.5} fontSize={"x-large"} color="yellowGreen">About Project</Text>
              <div>
                <Text color="gray.400">This is a pharmacy's website named Netmeds. It allows users to buy medicines online rather than at a medical shop. </Text>
              </div>
              <Text fontSize={"large"} color="gray.400">It is an indivisual project.</Text>
              <Text fontSize={"x-large"} color="yellowGreen">Role</Text>
              <Text fontSize={"large"} color="gray.400">I created Home Page, Product Page, Login Page, Signup Page, and Cart Page. </Text>

              <Flex mt={5} justify="center" gap={10} >
                <a href="https://netmeds-five.vercel.app/" target="blank">
                  <Image w="40px" borderRadius="50%" bg={"white"} _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                </a>
                <a href="https://github.com/Gautamkumar3/unique-color-3040" target="blank">
                  <Image w="40px" h="40px" bg={"white"} borderRadius="50%" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                </a>
              </Flex>
            </Box >
          </Box>
        </SimpleGrid>

        {/* ################# cricket.com #####################  */}

        <SimpleGrid name='projects'
          h="auto"
          w={["90%", "90%", "80%", "80%"]}
          m="auto"
          p={1}
          columns={[1, 1, 2]}
          mt={"20px"}
          borderRadius="7px"
          bg={"#2B547E"}
          boxShadow='rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset' >

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3}>
              <Carousel
                showThumbs={false}
                autoPlay={true}
                transitionTime={2}
                infiniteLoop={true}
                showStatus={false}
                showArrows={false}
              >
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={cric1} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={cric2} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={cric3} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={cric4} />
                </div>
                <div>
                  <Image borderRadius="5px" height={["150px", "250px", "250px"]} src={cric5} />
                </div>
              </Carousel>
              <Flex justify="center" gap={5} m="auto" my={5}>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image w={"40px"} src={html} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={css} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={js} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={rct} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={firebase} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image h={["15px", "20px", "20px", "30px"]} src={rct_router} />
                </Box>
                <Box border="1px solid yellowgreen" p={2} boxSizing="border-box" w={"50px"} maxH="50px">
                  <Image src={chakra} />
                </Box>
              </Flex>
            </Box>
          </Box>

          <Box data-aos="fade-up"
            data-aos-duration="1500">

            <Box p={3} >
              <Text
                fontSize="xx-large"
                color={'yellowGreen'}
                fontWeight='semibold'
                font>
                Cricket.com
              </Text>
              <Text letterSpacing={1.5} fontSize={"x-large"} color="yellowGreen">About Project</Text>
              <div>
                <Text color="gray.400">This is a sports website. It is powered by data-driven insights, AI-based performance predictions, and smart fan features that will enhance your cricket-following experience like never before.</Text>
              </div>
              <Text fontSize={"large"} color="gray.400">It is an indivisual project.</Text>
              <Text fontSize={"x-large"} color="yellowGreen">Role</Text>
              <Text fontSize={"large"} color="gray.400">I created Home Page, Fantasy Page, Circlytic Page, Schedule Page, Login Page, Signup Page and, News Page. </Text>

              <Flex mt={5} justify="center" gap={10} >
                <a href="https://cricket-4bc52.web.app/" target="blank">
                  <Image w="40px" borderRadius="50%" bg={"white"} _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%" }} src="https://img.icons8.com/sf-regular-filled/2x/visible.png" />
                </a>
                <a href="https://github.com/Gautamkumar3/humane-theory-4192/tree/master/cricket" target="blank">
                  <Image w="40px" h="40px" bg={"white"} borderRadius="50%" _hover={{ bg: "#63B3ED", padding: "2px", borderRadius: "50%", p: "5px" }} src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-512.png" />
                </a>
              </Flex>
            </Box >
          </Box>
        </SimpleGrid>
      </Box>
    </>
  )
}



export default Projects
