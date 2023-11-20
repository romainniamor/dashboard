import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
import timeGridPlugin from "@fullcalendar/timegrid";
import {
  Box,
  List,
  ListItem,
  ListItemText,
  Typography,
  useTheme,
} from "@mui/material";
import Header from "../../components/Header";
import { tokens } from "../../theme";
import { formatDate } from "@fullcalendar/core";

const Calendar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [currentEvents, setCurrentEvents] = useState([]);

  //handle situation au click d un event
  const handleDateClick = (selected) => {
    const title = prompt("Enter new event");
    const calendarApi = selected.view.calendar;
    calendarApi.unselect();

    if (title) {
      calendarApi.addEvent({
        id: `${selected.dateStr}-${title}`,
        title,
        start: selected.startStr,
        end: selected.endStr,
        allDay: selected.allDay,
      });
    }
  };

  const handleEventClick = (selected) => {
    if (
      window.confirm(
        `Are you sure you want to delete event ${selected.event.title}`
      )
    ) {
      selected.event.remove();
    }
  };

  return (
    <Box m="30px">
      <Header title="Calendar" subtitle="Calendar using full calendar" />
      <Box display="flex" justifyContent="space-between">
        <Box
          flex="1 1 20%"
          bgcolor={colors.primary[400]}
          padding="15px"
          borderRadius="5px"
        >
          <Typography />
          Events
          <List>
            {currentEvents.map((event) => (
              <ListItem
                key={event.id}
                sx={{
                  bgcolor: colors.greenAccent[500],
                  margin: "10px 0",
                  borderRadius: "5px",
                }}
              >
                <ListItemText
                  primary={event.title}
                  secondary={
                    <Typography>
                      {formatDate(event.start, {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </Typography>
                  }
                ></ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
        <Box flex="1 1 100%" ml="20px">
          <FullCalendar
            height="70vh"
            plugins={[
              dayGridPlugin,
              timeGridPlugin,
              listPlugin,
              interactionPlugin,
            ]}
            headerToolbar={{
              left: "prev,next today",
              center: "title",
              right: "dayGridMonth timeGridWeek timeGridDay listMonth",
            }}
            initialView="dayGridMonth"
            editable={true}
            selectable={true}
            selectMirror={true} // affiche une représentation visuelle de la plage de temps ou de la période que l'utilisateur est en train de sélectionner.
            select={handleDateClick}
            eventClick={handleEventClick}
            eventsSet={(events) => setCurrentEvents(events)}
            initialEvents={[
              { id: 1, title: "event1", start: "2023-11-16" },
              {
                id: 2,
                title: "event2",
                start: "2023-11-18",
                end: "2023-11-19",
              },
              {
                id: 3,
                title: "event3",
                start: "2023-11-10T12:30:00",
                allDay: false, // will make the time show
              },
            ]}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Calendar;
