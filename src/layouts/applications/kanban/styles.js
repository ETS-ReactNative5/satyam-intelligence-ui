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

export default makeStyles(({ palette, functions, borders, typography }) => {
  const { light, white, text } = palette;
  const { pxToRem } = functions;
  const { borderRadius } = borders;
  const { size } = typography;

  return {
    kanban: {
      position: "relative",
      margin: `${pxToRem(32)} 0`,

      "& .react-kanban-column": {
        backgroundColor: light.main,
        width: pxToRem(450),
        margin: `0 ${pxToRem(10)}`,
        padding: pxToRem(20),
        borderRadius: borderRadius.lg,
      },
    },

    kanban_card: {
      display: "block",
      width: "calc(450px - 40px)",
      backgroundColor: white.main,
      color: text.main,
      marginTop: pxToRem(20),
      padding: pxToRem(15),
      borderRadius: borderRadius.md,
      fontSize: size.regular,
      lineHeight: 1.5,
    },
  };
});
