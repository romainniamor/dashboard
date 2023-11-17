import Header from "../../components/Header";
import { Box } from "@mui/material";

const DashBoard = () => {
  return (
    <Box m="20px">
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Dashboard" subtitle="Bienvenue" />
      </Box>
    </Box>
  );
};

export default DashBoard;
