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

export default makeStyles(({ palette, functions }) => {
  const { white, socialMediaColors } = palette;
  const { pxToRem } = functions;

  return {
    suiSocialButton: {
      backgroundColor: ({ buttonColor }) => socialMediaColors[buttonColor].main,
      color: white.main,

      "&:hover": {
        backgroundColor: ({ buttonColor }) => socialMediaColors[buttonColor].main,
      },

      "&:focus:not(:hover)": {
        backgroundColor: ({ buttonColor }) => socialMediaColors[buttonColor].dark,
        boxShadow: "none",
      },

      "&:disabled": {
        backgroundColor: ({ buttonColor }) => socialMediaColors[buttonColor].main,
        color: white.main,
      },
    },

    suiSocialButton_iconOnly: {
      minWidth: ({ size }) => {
        let minWidth;

        if (size === "small") {
          minWidth = pxToRem(25);
        } else if (size === "large") {
          minWidth = pxToRem(52);
        } else {
          minWidth = pxToRem(38);
        }

        return minWidth;
      },

      width: ({ size }) => {
        let width;

        if (size === "small") {
          width = pxToRem(25);
        } else if (size === "large") {
          width = pxToRem(52);
        } else {
          width = pxToRem(38);
        }

        return width;
      },

      minHeight: ({ size }) => {
        let minHeight;

        if (size === "small") {
          minHeight = pxToRem(25);
        } else if (size === "large") {
          minHeight = pxToRem(52);
        } else {
          minHeight = pxToRem(38);
        }

        return minHeight;
      },

      height: ({ size }) => {
        let height;

        if (size === "small") {
          height = pxToRem(25);
        } else if (size === "large") {
          height = pxToRem(52);
        } else {
          height = pxToRem(38);
        }

        return height;
      },

      padding: ({ size }) => {
        let padding;

        if (size === "small") {
          padding = pxToRem(4.5);
        } else if (size === "large") {
          padding = pxToRem(16);
        } else {
          padding = `${pxToRem(11)} ${pxToRem(11)} ${pxToRem(10)}`;
        }

        return padding;
      },
    },

    suiSocialButton_circular: {
      borderRadius: "50%",
    },
  };
});
