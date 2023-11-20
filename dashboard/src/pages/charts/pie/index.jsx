import Header from "../../../components/Header";
import PieChart from "../../../components/pieChart";
import { Box, useTheme, Typography } from "@mui/material";

const Pie = () => {
  return (
    <Box m="30px">
      <Header title="Pie Chart" subtitle="Pie Chart from nivo"></Header>
      <Box height="70vh">
        <PieChart></PieChart>
      </Box>
    </Box>
  );
};

export default Pie;
