import { Text, TextProps } from "@chakra-ui/react";
import { HTMLProps } from "react";


type CustomLabelProps  = {

} & TextProps & HTMLProps<HTMLLabelElement>;

export const CustomLabel = ({ children, ...props } : CustomLabelProps) => {
    return (
        <Text as="label"
        fontWeight="bold"
        p="8px"
        { ...props }>
            { children }
        </Text>
    )
}