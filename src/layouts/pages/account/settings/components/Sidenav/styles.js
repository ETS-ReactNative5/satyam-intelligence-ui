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

export default makeStyles(({ borders, palette, functions, transitions }) => {
  const { borderRadius } = borders;
  const { light } = palette;
  const { pxToRem } = functions;

  return {
    sidenav: {
      borderRadius: borderRadius.lg,
      position: "sticky",
      top: "1%",
    },

    sidenav_listLink: {
      display: "flex",
      alignItems: "center",
      borderRadius: borderRadius.md,
      padding: `${pxToRem(10)} ${pxToRem(16)}`,
      transition: transitions.create("background-color", {
        easing: transitions.easing.easeInOut,
        duration: transitions.duration.shorter,
      }),

      "&:hover": {
        backgroundColor: light.main,
      },
    },
  };
});
