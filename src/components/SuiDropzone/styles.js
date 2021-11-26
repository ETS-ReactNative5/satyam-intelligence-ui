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

export default makeStyles(({ palette, typography, borders, functions }) => {
  const { text, white, dark, inputColors } = palette;
  const { size } = typography;
  const { borderRadius, borderWidth } = borders;
  const { rgba } = functions;

  return {
    suiDropzone: {
      display: "flex",
      alignItems: "center",
      border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
      borderRadius: borderRadius.md,

      "& .dz-default": {
        margin: "0 auto",
      },

      "& .dz-default .dz-button": {
        color: text.main,
        fontSize: size.sm,
      },

      "& .dz-preview .dz-details": {
        color: dark.main,
        opacity: 1,

        "& .dz-size span, & .dz-filename span": {
          backgroundColor: rgba(white.main, 0.7),
        },
      },

      "& .dz-error-message": {
        display: "none !important",
      },

      "& .dz-remove": {
        color: dark.main,
        textDecoration: "none",

        "&:hover, &:focus": {
          textDecoration: "none !important",
        },
      },
    },
  };
});
