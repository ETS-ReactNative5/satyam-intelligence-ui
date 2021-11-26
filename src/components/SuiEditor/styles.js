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

export default makeStyles(({ palette, borders, typography }) => {
  const { borderRadius } = borders;
  const { size } = typography;
  const { text } = palette;

  return {
    suiEditor: {
      "& .ql-toolbar": {
        borderRadius: `${borderRadius.md} ${borderRadius.md} 0 0`,
      },

      "& .ql-container": {
        borderRadius: `0 0 ${borderRadius.md} ${borderRadius.md}`,
      },

      "& .ql-editor": {
        "& p": {
          fontSize: size.regular,
          color: text.main,
        },

        "& ul li": {
          color: text.main,
        },
      },
    },
  };
});
