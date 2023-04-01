import { Flex, FlexProps } from "@chakra-ui/react"

export const Container = ({ children, ...props } : FlexProps) => {
    return (
        <Flex bgColor="#2D3047"
        color="#FFF"
        w="100%"
        minH="100vh"
        direction="column"
        align="center"
        {...props}>
            { children }
        </Flex>
    )
}