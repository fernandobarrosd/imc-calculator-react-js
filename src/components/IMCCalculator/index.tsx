import { Flex, FlexProps } from "@chakra-ui/react";
import { CustomLabel } from "../CustomLabel";
import { NumberInputContainer, NumberInput } from "../CustomNumberInput";
import { useRef } from "react";
import { CustomButton } from "../CustomButton";
type IMCCalculatorProps = {
    onCalculate(result: number):void
} & FlexProps;

export const IMCCalculator = ({ onCalculate, children } : IMCCalculatorProps) => {
   const peso = useRef(0);
   const altura = useRef(0);

    const onClick = () => {
        const imc = Number((peso.current / (Math.pow(altura.current, 2))))
        .toFixed(2);
        onCalculate(parseFloat(imc));
    }
    return (
        <Flex as="section"
        direction="column"
        alignItems="center"
        gap="40px">
            <NumberInputContainer gap="3px"
            align="left">
                <CustomLabel htmlFor="peso">Peso</CustomLabel>
                <NumberInput id="peso"  w="160px" 
                value={peso.current}
                onChange={e => 
                peso.current = parseFloat((e.target.value))}/>
            </NumberInputContainer>
            <NumberInputContainer gap="3px"
            align="left">
                <CustomLabel htmlFor="peso">Altura</CustomLabel>
                <NumberInput id="peso" w="160px"
                value={altura.current}
                onChange={e => 
                altura.current = parseFloat(e.target.value)}/>
            </NumberInputContainer>    
            <CustomButton onClick={onClick}>Calcular</CustomButton>
            { children }
        </Flex>
    )
}