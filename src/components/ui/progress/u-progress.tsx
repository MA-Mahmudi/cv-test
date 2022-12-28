import {Box, CircularProgress} from "@mui/material";


const UProgress = ({value, label}) => {

return (
    <div>
        <Box className="row center-content">
            <CircularProgress variant="determinate" thickness={5} value={value} size={60} color="secondary"/>
            <Box className="">
                <span className="text-beige">{value}%</span>
            </Box>
            <span className="text-beige mr-4">{label}</span>
        </Box>
    </div>
  );
};

export default UProgress;