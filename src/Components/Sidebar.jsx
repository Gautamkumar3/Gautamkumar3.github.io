
import React, { useState } from 'react'
import "./Sidebar.css"
import Drawer from './Drawer'
import { Link } from 'react-scroll'
import { Box, IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { FaSun, FaMoon } from "react-icons/fa"

const Sidebar = () => {

    const { colorMode, toggleColorMode } = useColorMode()
    const isDark = colorMode === "dark"
    const bg = useColorModeValue('#2B547E', 'black')
    const color = useColorModeValue('white', 'black')

    return (
        <div>
            <Box className="main_container" bg={bg} >
                <Box className='sidebar'>
                    <Box className="top_section">
                        <h1 className='logo'>
                            G<span className='yellow'>K</span>
                        </h1>
                    </Box>
                    <Box className='routes'>
                        <Link to="homea" offset={-120} spy={true} smooth={true} >
                            <p className='link'>HOME</p>
                        </Link>
                        <Link to="about" offset={-300} spy={true} smooth={true}>
                            <p className='link'>ABOUT</p>
                        </Link>
                        <Link to="project" offset={-120} spy={true} smooth={true}>
                            <p className='link'>PROJECTS</p>
                        </Link>
                        <Link to="skill" offset={-120} spy={true} smooth={true}>
                            <p className='link'>SKILLS</p>
                        </Link>
                        <Link to="contact" offset={-200} spy={true} smooth={true}>
                            <p className='link'>CONTACT</p>
                        </Link>
                        <IconButton bg={isDark ? "black" : "white"} size='sm' m={2} onClick={toggleColorMode} icon={isDark ? <FaSun color='yellow' size="25px" /> : <FaMoon color='black' size="20px" />} />
                    </Box>
                </Box>

            </Box>
        </div >
    )
}

export default Sidebar
