//@ts-ignore
import React from 'react';
import {CircularProgress} from "@mui/material";


const UProgress = () => {

  let val = null as number

  return (
    <div>
      <CircularProgress variant="determinate" value={10}/>
    </div>
  );
};

export default UProgress;