import { Flex, Heading } from "@chakra-ui/react"

export const Header = () => {
    return (
        <Flex as="header"
        justify="center">
            <Heading as="h1">IMC Calculator</Heading>
        </Flex>
    )
}