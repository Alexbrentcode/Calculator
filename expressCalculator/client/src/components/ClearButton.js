import React from "react";
import { Button } from "@mui/material";

const ClearButton = (props) => {

    return (
        <>
        <Button variant="contained"
        onClick={props.handleClick}
        sx={{
            display:"flex",
            width:"10vw",
            flexGrow:1,
            fontSize:"1.5rem",
            backgroundColor:"#f5e23d",
            ':hover':{
                backgroundColor:"#f5e23d",
                color:"white",
                filter: "brightness(0.95)"
            }

        }}
        >
            Clear
        </Button>
        </>
    )

}

export default ClearButton