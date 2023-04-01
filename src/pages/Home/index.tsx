import { Flex } from "@chakra-ui/react"
import { IMCCalculator } from "../../components/IMCCalculator"
import { Container } from "../../components/Container"
import { Header } from "../../Header";
import { useState, useRef } from "react";
import { ResultIMC } from "../../components/ResultIMC"

export const Home = () => {
    const [ imc, setIMC ] = useState(0);
    const isVisible = useRef(false);
    return (
        <Container
        pt={["0", "20px"]}>
            <Header/>
            <Flex as="main"
            pt="70px">
                <IMCCalculator 
                onCalculate={result => {
                    setIMC(result);
                    if (result.toString() !== "NaN") {
                        isVisible.current = true;
                    }
                    else {
                        isVisible.current = false;
                    }
                    
                }}>
                    <ResultIMC 
                    imc={imc}
                    isVisible={isVisible.current}/>

                </IMCCalculator>
            </Flex>
        </Container>
    )
}