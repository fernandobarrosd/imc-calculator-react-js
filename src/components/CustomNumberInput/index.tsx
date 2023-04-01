import { Flex, FlexProps, NumberInput as ChakraNumberInput, 
    NumberInputField, NumberInputFieldProps } from "@chakra-ui/react"




const NumberInputContainer = ({ children, ...props } : FlexProps) => {
    return (
        <Flex direction="column"
        align="center"
        {...props}>
            { children }
        </Flex>
    )
}


const NumberInput = ({ ...props } : NumberInputFieldProps) => {
    return (
        <ChakraNumberInput w="130px">
            <NumberInputField bgColor="#93B7BE"
            color="#000"
            borderRadius="6px"
            _focus={{ border: "2px solid #048A81" }}
            textAlign="center"
            pl="30px"
            {...props}/>
        </ChakraNumberInput>
    )
}

export { NumberInputContainer, NumberInput }