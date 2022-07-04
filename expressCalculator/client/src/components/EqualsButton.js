import React from "react";
import { Button } from "@mui/material";

const EqualsButton = (props) => {


    return (
        <>
        <Button variant="contained"
        onClick={props.handleClick}
        sx={{
            display:"flex",
            width:"10vw",
            flexGrow:1,
            fontSize:"2.5rem",
            backgroundColor:"green",

            ':hover':{
                backgroundColor:"green",
                color:"white",
                filter: "brightness(0.95)"
            }

        }}
        >
            =
        </Button>
        
        </>
    )
}

export default EqualsButton