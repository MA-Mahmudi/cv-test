import {Box, CircularProgress} from "@mui/material";


const UProgress = ({value, label}) => {

return (
    <div className={"row align-middle"}>
        <Box>
            <CircularProgress variant="determinate" value={value} size={50}/>
            <span className={"text-beige"}>{label}</span>
        </Box>
    </div>
  );
};

export default UProgress;