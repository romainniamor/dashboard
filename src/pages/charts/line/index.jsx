import Header from "../../../components/Header";
import LineChart from "../../../components/lineChart";
import { Box, useTheme, Typography } from "@mui/material";

const Bar = () => {
  return (
    <Box m="30px">
      <Header title="Line Chart" subtitle="Line Chart from nivo"></Header>
      <Box height="70vh">
        <LineChart></LineChart>
      </Box>
    </Box>
  );
};

export default Bar;
