import React from "react";
import { Button } from "@mui/material";

const OperatorButton = (props) => {
    return (
        <>
        <Button variant="contained"
        onClick={props.handleClick}
        id={props.operator}
        disabled={props.disabled}
        sx={{
            display:"flex",
            width:"10vw",
            flexGrow:1,
            backgroundColor:"#e6190e",
            fontSize:"2.5rem",

            ':hover':{
                backgroundColor:"#e6190e",
                color:"white",
                filter: "brightness(0.95)"
            },
            ':disabled':{
                backgroundColor:"#e6190e",
                color:"white",
                filter: "brightness(0.85)"

            }

        }}
        >
            {props.operator}
        </Button>
        
        </>
    )
}

export default OperatorButton