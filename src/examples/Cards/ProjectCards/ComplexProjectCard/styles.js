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
  const { white } = palette;
  const { pxToRem } = functions;
  const { borderWidth } = borders;

  return {
    complexProjectCard_image: {
      padding: pxToRem(8),
    },

    complexProjectCard_avatar: {
      border: `${borderWidth[2]} solid ${white.main}`,
      cursor: "pointer",
      position: "relative",

      "&:not(:first-of-type)": {
        marginLeft: pxToRem(-12),
      },

      "&:hover, &:focus": {
        zIndex: "10",
      },
    },

    complexProjectCard_dropdownIcon: {
      marginLeft: "auto",
      alignSelf: "flex-start",
      padding: `${pxToRem(10)} 0`,
    },
  };
});
