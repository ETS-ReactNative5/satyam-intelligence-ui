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
  const { white, text } = palette;
  const { pxToRem } = functions;
  const { borderWidth } = borders;

  return {
    teamProfileCard_avatar: {
      border: `${borderWidth[2]} solid ${white.main}`,
      marginLeft: pxToRem(-12),
      cursor: "pointer",
      position: "relative",

      "&:hover, &:focus": {
        zIndex: "10",
      },
    },

    teamProfileCard_dropdownIcon: {
      width: pxToRem(16),
      cursor: "pointer",
    },

    teamProfileCard_rating: {
      fontSize: pxToRem(24),
      lineHeight: 0,
      color: text.main,
    },
  };
});
