import { Box, useTheme, Typography } from "@mui/material";
import { tokens } from "../theme";

const StatBox = ({ icon, title, subtitle, increase }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box width="100%" m="0 30px">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
      >
        <Box display="flex" justifyContent="space between">
          <Typography
            fontWeight="semi-bold"
            variant="h3"
            sx={{ color: colors.greenAccent[400] }}
          >
            {icon} {subtitle} {increase}
          </Typography>
        </Box>
        <Typography
          fontWeight="bold"
          variant="h2"
          sx={{ color: colors.grey[100] }}
        >
          {title}
        </Typography>
      </Box>
    </Box>
  );
};

export default StatBox;
