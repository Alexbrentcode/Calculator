import React from "react";
import DigitButton from "./DigitButton";
import OperatorButton from "./OperatorButton";
import Display from "./Display";
import EqualsButton from "./EqualsButton";
import ClearButton from "./ClearButton";
import { Box, Paper, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { sumNumbers, subtractNumbers, multiplyNumbers, divideNumbers } from "../api";
import deskbg from '../assets/deskbg.jpg'


const Calculator = () => {
    // const digitsArr = [...Array(10).keys()]
    // digitsArr.shift()
    // digitsArr.push(0)
    const digitsArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const operatorArr = ["+", "-", "*", "/"];
    const [result, setResult] = useState("");
    const [input, setInput] = useState("");
    const [operator, setOperator] = useState("");
    const [disabled, setDisabled] = useState(false);

    const handleDigitButtonClick = (e) => {
        console.log(`The ${e.target.id} button was clicked`)
        setInput((prevState) => [...prevState, ...e.target.id])
    }

    const handleOperatorButtonClick = (e) => {
        if(input == ""){
            return
        }
        console.log(`The ${e.target.id} button was clicked`)
        setOperator(e.target.id);
        setDisabled(true);
        setInput((prevState) => [...prevState, ...e.target.id]);
    }

    const handleClearButtonCLick = () => {
        console.log("Clearing display...")
        setInput("");
        setResult("");
        setDisabled(false);
    }

    const handleCalculateButtonClick = () => {
        let inputString = input.join("");
        let parsedInput = inputString.split(operator);
        console.log(`First input is ${parsedInput[0]}, second input is ${parsedInput[1]} operator is ${operator}`);
        if(operator === "+") {
                sumNumbers(parsedInput[0], parsedInput[1]).then((res) => {
                    if(res){
                        console.log("Calculator result is", res.result)
                        setResult(res.result)
                    }
                })
            }

        if(operator === "-") {
                subtractNumbers(parsedInput[0], parsedInput[1]).then((res) => {
                    if(res){
                        console.log("Calculator result is", res.result)
                        setResult(res.result)
                    }
                })
            }

        if(operator === "*") {
                multiplyNumbers(parsedInput[0], parsedInput[1]).then((res) => {
                    if(res){
                        console.log("Calculator result is", res.result)
                        setResult(res.result)
                    }
                })
            }

            if(operator === "/") {
               if(parsedInput[1] === "0"){
                    return setResult("STOP IT!")
                    
               }
                divideNumbers(parsedInput[0], parsedInput[1]).then((res) => {
                    if(res){
                        console.log("Calculator result is", res.result)
                        setResult(res.result)
                    }
                })
            }
    }


    return (
        <>
        <Box
        sx=
        {{
            margin:"0px",
            position:"absolute",
            backgroundImage:`url(${deskbg})`,
            backgroundPosition: "center",
            width:"100vw",
            height:"100vh",
            backgroundSize: "cover", 
            zIndex:-1
        }}
        >

            <Paper
            elevation={8}
            sx=
            {{
                display:"flex",
                marginLeft:"15%",
                marginTop:"6%",
                marginRight:"auto",
                flexDirection:"row",
                flexWrap:"wrap",
                width:"50vw",
                height:"75vh",
                alignItems:"center",
                justifyContent:"center",
                backgroundColor:"#ebecf0",
            }}

            >
                <Display result={result} input={input}
                />
                <Box 
                sx=
                    {{
                        display:"flex",
                        width:"30vw",
                        height:"50vh",
                        flexDirection:"row",
                        flexWrap:"wrap",
                    }}
                    >

                {digitsArr.map((idx) => 
            
                    <DigitButton
                    className={idx}
                    idx={idx}
                    key={idx} 
                    digit={idx}
                    handleClick={handleDigitButtonClick}
                    />
                )}

                <EqualsButton
                sx={{
                    order:1,
                }}
                handleClick={handleCalculateButtonClick}
                />

                <ClearButton
                handleClick={handleClearButtonCLick}
                />

                </Box>

                <Box
                sx={{
                    display:"flex",
                    height:"50vh",
                    width:"max-content",
                    flexDirection:"column",
                }}
                >

                {operatorArr.map((item, idx) => 
                    <OperatorButton
                    disabled={disabled}
                    key={idx}
                    operator={item}
                    handleClick={handleOperatorButtonClick}
                    />

                )}
                </Box>
            </Paper>
        </Box>

        </>
    )
}

export default Calculator