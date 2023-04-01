import { Button, ButtonProps } from "@chakra-ui/react";

export const CustomButton = ({ children, ...props } : ButtonProps) => {
    return (
        <Button bgColor="#048A81"
        p="20px" w="250px"
        borderRadius="6px"
        _hover={{ transform: "scale(1.1)", transition: ".2s transform, .2s background-color" }}
        _active={{ bgColor: "#08AA9F" }}
        {...props}>
            { children }
        </Button>
    )
}