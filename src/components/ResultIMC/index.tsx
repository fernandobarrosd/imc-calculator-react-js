import { Text } from "@chakra-ui/react";

interface ResultIMCProps {
    imc: number;
    isVisible: boolean;
}


export const ResultIMC = ({ imc, isVisible } : ResultIMCProps) => {
    return (
        <>
            { isVisible && 
            <Text
            fontSize="20px"
            fontWeight="bold"
            bgColor="#93B7BE"
            color="#000"
            p="15px"
            borderRadius="6px"
            >
                O valor do IMC é {imc}
            </Text> 
            }
        </>
    )
}