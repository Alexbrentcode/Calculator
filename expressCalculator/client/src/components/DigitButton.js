import React from "react";
import { Button } from "@mui/material";

const DigitButton = (props) => {
    return (
        <>
        <Button
        id = {props.idx}
        onClick={props.handleClick}
        variant="contained"
        active="false"
        sx={{
            display:"flex",
            width:"10vw",
            fontSize:"2.5rem",
            backgroundColor:"#f76534",
            ':hover':
            {
                backgroundColor:"#f76534",
                color:"white",
                filter: "brightness(0.95)"
            }
           
        }}

        >
            {props.digit}
            </Button>
        </>
    )
}

export default DigitButton