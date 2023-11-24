import Header from "../../components/Header";
import { Box, useTheme, Typography } from "@mui/material";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";
import { Link } from "react-router-dom";

const Documentation = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="20px">
      <Header title="Documentation" subtitle="Find info about this project" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            <Link
              to="https://fr.react.dev/"
              target="_blank"
              rel="noopener noreferrer"
            >
              React
            </Link>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            et aperiam, maxime nam, vel exercitationem necessitatibus laboriosam
            adipisci, vero excepturi doloribus error neque ea. Deleniti sit
            repellendus laudantium minima, et eaque. Recusandae nostrum cumque
            ab amet voluptatum odio reiciendis tenetur officia a dolores
            quisquam minus, nisi iure consequuntur? Quidem repellendus
            blanditiis totam incidunt laborum ea, voluptates unde est assumenda
            ut, magni corrupti nulla quis impedit culpa explicabo. Saepe at
            adipisci tempora quod tempore temporibus, eum obcaecati magni
            soluta, repudiandae error quibusdam explicabo, perspiciatis aliquam
            vel? Illo repellendus nesciunt veniam, minima obcaecati esse
            officiis nihil tenetur consectetur debitis maxime odio! Optio?
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h3">
            <Link
              to="https://mui.com/material-ui/customization/theming/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Material Ui
            </Link>
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            et aperiam, maxime nam, vel exercitationem necessitatibus laboriosam
            adipisci, vero excepturi doloribus error neque ea. Deleniti sit
            repellendus laudantium minima, et eaque. Recusandae nostrum cumque
            ab amet voluptatum odio reiciendis tenetur officia a dolores
            quisquam minus, nisi iure consequuntur? Quidem repellendus
            blanditiis totam incidunt laborum ea, voluptates unde est assumenda
            ut, magni corrupti nulla quis impedit culpa explicabo. Saepe at
            adipisci tempora quod tempore temporibus, eum obcaecati magni
            soluta, repudiandae error quibusdam explicabo, perspiciatis aliquam
            vel? Illo repellendus nesciunt veniam, minima obcaecati esse
            officiis nihil tenetur consectetur debitis maxime odio! Optio?
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default Documentation;
