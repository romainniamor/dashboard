import Header from "../../../components/Header";
import BarChart from "../../../components/barChart";
import { Box, useTheme, Typography } from "@mui/material";

const Bar = () => {
  return (
    <Box m="30px">
      <Header title="Bar Chart" subtitle="Bar Chart from nivo"></Header>
      <Box height="70vh">
        <BarChart></BarChart>
      </Box>
    </Box>
  );
};

export default Bar;
