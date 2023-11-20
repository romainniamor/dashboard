import Header from "../../../components/Header";
import GeoChart from "../../../components/geoChart";
import { Box, useTheme, Typography } from "@mui/material";

const Geo = () => {
  return (
    <Box m="30px">
      <Header title="Geography Chart" subtitle="Chart from nivo"></Header>
      <Box height="70vh">
        <GeoChart></GeoChart>
      </Box>
    </Box>
  );
};

export default Geo;
