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

// Images
import whiteCurved from "assets/images/curved-images/white-curved.jpeg";

export default makeStyles(({ functions, palette }) => {
  const { linearGradient, rgba, pxToRem } = functions;
  const { gradients } = palette;

  return {
    animatedStatisticsCard: {
      transformStyle: "preserve-3d",
    },

    animatedStatisticsCard_card: {
      background: ({ color }) =>
        `${linearGradient(
          rgba(gradients[color].main, 0.85),
          rgba(gradients[color].state, 0.85)
        )}, url(${whiteCurved})`,
      backgroundSize: "cover !important",
      backgroundPosition: "50% !important",
      overflow: "visible",
    },

    animatedStatisticsCard_title: {
      marginTop: pxToRem(8),
      transform: `translateZ(${pxToRem(50)}) scale(0.75)`,
      transition: "all 500ms linear",
    },

    animatedStatisticsCard_count: {
      transform: `translateZ(${pxToRem(50)}) scale(0.7)`,
      transition: "all 500ms linear",
    },

    animatedStatisticsCard_badge: {
      transform: `translateZ(${pxToRem(50)}) scale(0.7)`,
      transition: "all 500ms linear",
    },

    animatedStatisticsCard_button: {
      width: pxToRem(160),
      margin: `${pxToRem(8)} 0`,
      transform: `translateZ(${pxToRem(50)}) scale(0.7)`,
      transition: "all 500ms linear",

      "&:hover, &:focus": {
        transform: `translateZ(${pxToRem(50)}) scale(0.7)`,
      },
    },
  };
});
