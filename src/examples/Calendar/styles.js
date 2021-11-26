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

// @mui material components
import { makeStyles } from "@mui/styles";

const styles = makeStyles(({ palette, typography, functions, boxShadows }) => {
  const { white, dark, light, grey, gradients, secondary } = palette;
  const { size, fontWeightMedium, fontWeightBold } = typography;
  const { linearGradient, pxToRem } = functions;
  const { buttonBoxShadow } = boxShadows;

  return {
    calendar: {
      height: "100%",

      "& .fc-media-screen": {
        height: "100%",
        color: dark.main,
      },

      "& .fc-theme-standard .fc-scrollgrid": {
        border: "none",
      },

      "& .fc-theme-standard thead tr th": {
        borderLeft: "none",
        borderRight: "none",
      },

      "& .fc-theme-standard td, .fc-theme-standard th": {
        borderColor: light.main,
      },

      "& .fc th": {
        textAlign: "center",
      },

      "& .fc .fc-col-header-cell-cushion": {
        fontSize: size.sm,
        fontWeight: fontWeightMedium,
        color: grey[500],
      },

      "& .fc .fc-daygrid-day-number": {
        color: grey[700],
        fontSize: size.sm,
        fontWeight: fontWeightMedium,
        width: "100%",
        textAlign: "center",
        // lineHeight: 1.4,
      },

      "& .fc-scrollgrid-section.fc-scrollgrid-section-header > td": {
        border: "none",
      },

      "& .fc-scrollgrid-section.fc-scrollgrid-section-body.fc-scrollgrid-section-liquid > td": {
        border: "none",
      },

      "& .fc-scrollgrid-sync-table": {
        height: "auto !important",
      },

      "& .fc .fc-view-harness-active > .fc-view": {
        position: "static",
        height: "100%",
      },

      "& .fc .fc-scroller-liquid-absolute": {
        position: "static",
      },

      "& .fc-daygrid-event": {
        margin: `${pxToRem(0.5)} ${pxToRem(2)}`,
        border: "none",
        borderRadius: pxToRem(5.6),
        fontSize: size.sm,
        fontWeight: fontWeightMedium,
      },

      "& .fc .fc-daygrid-body-unbalanced .fc-daygrid-day-events": {
        minHeight: pxToRem(32),
      },

      "& .fc-event-title": {
        padding: `${pxToRem(3)} ${pxToRem(4.8)} ${pxToRem(2.5)}`,
      },

      "& .fc-button, .fc-today-button, .fc-button:disabled": {
        backgroundColor: secondary.main,
        borderColor: secondary.main,
        fontSize: size.sm,
        boxShadow: buttonBoxShadow.main,
        opacity: 1,
        transition: `all 150ms ease-in`,

        "&:hover, &:focus, &:active": {
          transform: "scale(1.02)",
          boxShadow: `${buttonBoxShadow.stateOf} !important`,
          backgroundColor: `${secondary.main} !important`,
          borderColor: `${secondary.main} !important`,
        },
      },

      "& .fc .fc-button .fc-icon": {
        fontSize: size.sm,
      },

      "& .fc-toolbar-title": {
        fontSize: size.lg,
        fontWeight: fontWeightBold,
      },
    },

    calendar_card: {
      height: "100%",
    },

    event_primary: {
      backgroundImage: linearGradient(gradients.primary.main, gradients.primary.state),
      color: white.main,
    },

    event_secondary: {
      backgroundImage: linearGradient(gradients.secondary.main, gradients.secondary.state),
      color: white.main,
    },

    event_info: {
      backgroundImage: linearGradient(gradients.info.main, gradients.info.state),
      color: white.main,
    },

    event_success: {
      backgroundImage: linearGradient(gradients.success.main, gradients.success.state),
      color: white.main,
    },

    event_warning: {
      backgroundImage: linearGradient(gradients.warning.main, gradients.warning.state),
      color: white.main,
    },

    event_error: {
      backgroundImage: linearGradient(gradients.error.main, gradients.error.state),
      color: white.main,
    },

    event_light: {
      backgroundImage: linearGradient(gradients.light.main, gradients.light.state),
      color: dark.main,
    },

    event_dark: {
      backgroundImage: linearGradient(gradients.dark.main, gradients.dark.state),
      color: white.main,
    },
  };
});

export default styles;
