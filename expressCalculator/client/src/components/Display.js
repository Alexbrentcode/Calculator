import React from "react";
import { Typography, Box } from "@mui/material";

const Display = (props) => {


    return (
        <>
        <Box
        
                    sx={{
                        display:"flex",
                        width:"40vw",
                        height:"10vh",
                        border:"3px black solid",
                        backgroundColor:"black",
                        overflow:"hidden",
            
                    }}
        >
            <Typography
            variant="h4"
            sx={{
                display:"flex",
                justifyContent:"flex-end",
                marginLeft:"1%",
                lineHeight:"80%",
                color:"#02cf17"
              
            }}
            >{props.result}</Typography> 

            <Typography
            variant="h3"
            sx={{
                display:"flex",
                color:"#02cf17",
                justifyContent:"flex-end",
                marginLeft:"auto",
                alignItems:"flex-end",
            }}
            >{props.input}</Typography> 
        
        </Box>

        </>

    )

}

export default Display