import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";
import ProgressCircle from "./ProgressCircle";

const StatBox = ({ icon, title, subtitle, progress, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box display="flex" justifyContent="space between">
        <Box>
          {icon}
          <Typography fontWeight="bold" sx={{ color: colors.grey[100] }}>
            {title}
          </Typography>
        </Box>
        <Box>
          <ProgressCircle progress={progress} />
        </Box>
        <Box display="flex" justifyContent="space between">
          <Typography
            fontWeight="semi-bold"
            sx={{ color: colors.greenAccent[400] }}
          >
            {subtitle}
          </Typography>
          <Typography sx={{ color: colors.greenAccent[600] }}>
            {increase}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default StatBox;
