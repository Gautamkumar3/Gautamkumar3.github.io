import { Flex, Text, useColorMode, useColorModeValue } from '@chakra-ui/react'
import React from 'react'

const Footer = () => {
    const { colorMode, toggleColorMode } = useColorMode()
    const bg = useColorModeValue('#788097', 'black')
    const color = useColorModeValue('white', 'black')

    return (
        <Flex bg={bg} h="80px" color="white" textAlign="center" justify="center" align="center">
            <Text>Designed & Build by Gautam Kumar, 2022 All rights reserved.</Text>
        </Flex>
    )
}

export default Footer
