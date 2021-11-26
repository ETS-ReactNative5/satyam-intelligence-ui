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
  const { linearGradient, rgba } = functions;
  const { gradients, transparent } = palette;

  return {
    complexStatisticsCard: {
      background: ({ color }) =>
        `${linearGradient(
          rgba(gradients[color].main, 0.9),
          rgba(gradients[color].state, 0.9)
        )}, url(${whiteCurved})`,
    },

    complexStatisticsCard__icon: {
      backgroundImage: ({ color }) =>
        `${linearGradient(gradients[color].main, gradients[color].state)}, url(${whiteCurved})`,
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: transparent.main,
    },
  };
});
