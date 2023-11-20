import { Box, IconButton, useTheme, Typography, Divider } from "@mui/material";
import { tokens } from "../theme";

const ProgressCircle = ({ progress = "O.75", size = "40" }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const angle = progress * 360;
  return (
    <Box
      sx={{
        bgcolor: `radial-gradient(${colors.primary[400]} 55%, transparent 56%`,
      }}
    ></Box>
  );
};

export default ProgressCircle;
