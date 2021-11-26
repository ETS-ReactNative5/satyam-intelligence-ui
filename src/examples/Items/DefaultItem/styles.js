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

export default makeStyles(({ palette, functions, borders }) => {
  const { gradients, transparent } = palette;
  const { linearGradient, rgba, pxToRem } = functions;
  const { borderRadius } = borders;

  return {
    defaultItem_iconBox: {
      display: "grid",
      placeItems: "center",
      width: pxToRem(48),
      height: pxToRem(48),
      borderRadius: borderRadius.md,
      backgroundColor: ({ color }) => rgba(gradients[color].main, 0.03),
    },

    defaultItem_icon: {
      backgroundImage: ({ color }) => linearGradient(gradients[color].main, gradients[color].state),
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: transparent.main,
    },
  };
});
