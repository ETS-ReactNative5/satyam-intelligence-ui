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

export default makeStyles(
  ({ palette, boxShadows, functions, typography, borders, transitions }) => {
    const { inputColors, grey, white, dark, gradients } = palette;
    const { inputBoxShadow } = boxShadows;
    const { pxToRem, boxShadow, rgba } = functions;
    const { size: fontSize, fontWeightRegular } = typography;
    const { borderRadius, borderWidth } = borders;

    return {
      suiTagInput: {
        "& .react-tag-input": {
          width: "100%",
          height: "auto",
          padding: `${pxToRem(6)} ${pxToRem(6)}`,
          fontSize: fontSize.sm,
          fontWeight: fontWeightRegular,
          lineHeight: 1.4,
          color: grey[700],
          backgroundColor: white.main,
          backgroundClip: "padding-box",
          border: `${borderWidth[1]} solid ${inputColors.borderColor.main}`,
          appearance: "none",
          borderRadius: borderRadius.md,
          transition: transitions.create(["box-shadow", "border-color"], {
            easing: transitions.easing.ease,
            duration: transitions.duration.shortest,
          }),
          borderColor: ({ error, success }) => {
            let borderColorValue;

            if (error) {
              borderColorValue = inputColors.error;
            } else if (success) {
              borderColorValue = inputColors.success;
            } else {
              borderColorValue = inputColors.borderColor.main;
            }

            return borderColorValue;
          },

          "&:focus, &:focus-within": {
            borderColor: ({ error, success }) => {
              let borderColorValue;

              if (error) {
                borderColorValue = inputColors.error;
              } else if (success) {
                borderColorValue = inputColors.success;
              } else {
                borderColorValue = inputColors.borderColor.focus;
              }

              return borderColorValue;
            },
            outline: 0,
            boxShadow: ({ error, success }) => {
              let boxShadowValue;
              if (error) {
                boxShadowValue = inputBoxShadow.error;
              } else if (success) {
                boxShadowValue = inputBoxShadow.success;
              } else {
                boxShadowValue = boxShadow([0, 0], [0, 2], inputColors.boxShadow, 1);
              }

              return boxShadowValue;
            },
          },

          "& .react-tag-input__input": {
            height: ({ size }) => (size === "large" ? pxToRem(34) : pxToRem(26)),
            color: dark.main,

            "&::-webkit-input-placeholder": {
              color: rgba(dark.main, 0.5),
            },
          },

          "& .react-tag-input__tag": {
            display: "flex",
            alignItems: "center",
            backgroundColor: gradients.dark.state,
            color: white.main,
            borderRadius: borderRadius.section,
            padding: ({ size }) =>
              size === "large"
                ? `${pxToRem(5)} 0 ${pxToRem(4.5)}`
                : `${pxToRem(3)} 0 ${pxToRem(2.5)}`,

            "& .react-tag-input__tag__content": {
              padding: ({ size }) =>
                size === "large" ? `0 ${pxToRem(8)} 0 ${pxToRem(12)}` : `0 ${pxToRem(8)}`,
            },

            "& .react-tag-input__tag__remove": {
              backgroundColor: gradients.dark.state,
              borderRadius: `0 ${borderRadius.section} ${borderRadius.section} 0`,
              borderLeft: `${borderWidth[1]} solid ${rgba(white.main, 0.25)}`,
              height: ({ size }) => (size === "large" ? pxToRem(20) : pxToRem(16)),
              padding: ({ size }) =>
                size === "large" ? `${pxToRem(6)} ${pxToRem(12)}` : pxToRem(4),

              "&:before, &:after": {
                backgroundColor: rgba(white.main, 0.8),
                left: "40%",
                width: pxToRem(1),
              },
            },
          },
        },
      },
    };
  }
);
