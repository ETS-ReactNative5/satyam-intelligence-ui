/**
=========================================================
* Soft UI Dashboard PRO React - v2.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/soft-ui-dashboard-pro-material-ui
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// @fullcalendar components
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

// @mui material components
import Card from "@mui/material/Card";

// Soft UI Dashboard PRO React components
import SuiBox from "components/SuiBox";
import SuiTypography from "components/SuiTypography";

// Custom styles for Calendar
import styles from "examples/Calendar/styles";

function Calendar({ header, ...rest }) {
  const classes = styles();

  const events = rest.events
    ? rest.events.map((el) => ({
        ...el,
        className: classes[`event_${el.className}`],
      }))
    : [];

  return (
    <Card className={classes.calendar_card}>
      <SuiBox pt={2} px={2} lineHeight={1}>
        {header.title ? (
          <SuiTypography variant="h6" fontWeight="medium" textTransform="capitalize">
            {header.title}
          </SuiTypography>
        ) : null}
        {header.date ? (
          <SuiTypography component="p" variant="button" textColor="text" fontWeight="medium">
            {header.date}
          </SuiTypography>
        ) : null}
      </SuiBox>
      <SuiBox p={2} customClass={classes.calendar}>
        <FullCalendar
          {...rest}
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          events={events}
          height="100%"
        />
      </SuiBox>
    </Card>
  );
}

// Setting default values for the props of Calendar
Calendar.defaultProps = {
  header: {
    title: "",
    date: "",
  },
};

// Typechecking props for the Calendar
Calendar.propTypes = {
  header: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.string,
  }),
};

export default Calendar;
