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

export default makeStyles(({ functions, borders, palette }) => {
  const { pxToRem, rgba } = functions;
  const { borderWidth } = borders;
  const { transparent, secondary, dark } = palette;

  return {
    customButton: {
      width: pxToRem(150),
      height: pxToRem(120),
      marginBottom: pxToRem(16),
      marginLeft: pxToRem(4),
      borderWidth: borderWidth[2],

      "&.MuiButton-contained, &.MuiButton-contained:hover": {
        boxShadow: "none",
        border: `${borderWidth[2]} solid ${transparent.main}`,
      },

      "&:hover": {
        backgroundColor: transparent.main,
        border: `${borderWidth[2]} solid ${secondary.main} !important`,

        "& svg g": {
          fill: rgba(dark.main, 0.75),
        },
      },
    },
  };
});
